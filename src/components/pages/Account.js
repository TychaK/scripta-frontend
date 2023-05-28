import {useDispatch, useSelector} from "react-redux";
import {getAuthors} from "../../store/authors.store";
import Select from "react-select";
import {useEffect, useState} from "react";
import {saveUserPreferences} from "../../store/users.store";
import {getFromLocalStorage} from "../../utils/local-storage";

const Account = () => {
    const dispatch = useDispatch()
    const [selectedAuthorOptions, setSelectedAuthorOptions] = useState([]);
    const [selectedCategoryOptions, setSelectedCategoryOptions] = useState([]);
    const [authorSearch, setAuthorSearch] = useState('');
    const authors = useSelector((state) => state?.authors?.data)
    const categories = useSelector((state) => state?.categories?.data)
    const [options, setOptions] = useState([])
    const [categoryOptions, setCategoryOptions] = useState([])
    const user = getFromLocalStorage('user')
    const mapAuthors = () => {

        let mapped = authors?.map((author) => {
            return {
                value: author?.id,
                label: author?.name
            }
        })
        setOptions(mapped)
    }

    const mapCategories = () => {

        let mapped = categories?.map((category) => {
            return {
                value: category?.id,
                label: category?.name
            }
        })
        setCategoryOptions(mapped)
    }

    useEffect(() => {
        dispatch({
            type: 'authors/filters',
            payload: {
                search: authorSearch
            }
        })
        dispatch(getAuthors()).then(() => {
            mapAuthors()
        })
    }, [authorSearch])

    useEffect(() => {
        mapCategories()
    }, [categories])

    function savePreferences(e) {
        e.preventDefault()
        dispatch({
            type: 'preferences/form',
            payload: {
                authors: selectedAuthorOptions,
                categories: selectedCategoryOptions
            }
        })

        dispatch(saveUserPreferences())
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-10">
                        <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                            <div className="padding_eight_all bg-white">
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="">Hi {user?.name}!</div>
                                </div>
                                <div className="heading_s1 text-center">
                                    <h3 className="mb-30 font-weight-900">Account | Preferences</h3>
                                </div>
                                <div className="row">
                                    <form action="" onSubmit={savePreferences}>
                                        <div className="form-group">
                                            <label htmlFor="" className={'col-form-label'}>Select Authors</label>
                                            <Select
                                                name={'author'}
                                                placeholder={'Start typing to search for author'}
                                                onChange={setSelectedAuthorOptions}
                                                onInputChange={setAuthorSearch}
                                                options={options}
                                                value={selectedAuthorOptions}
                                                async
                                                isMulti
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="" className={'col-form-label'}>Select Categories</label>
                                            <Select
                                                placeholder={'Select Category'}
                                                options={categoryOptions}
                                                onChange={setSelectedCategoryOptions}
                                                value={selectedCategoryOptions}
                                                isMulti
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button className={' button button-contactForm btn-block'}>
                                                Save Preferences
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account