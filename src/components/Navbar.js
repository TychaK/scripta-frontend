import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getCategories} from "../store/categories.store";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getArticles} from "../store/articles.store";
import {ToastContainer} from "react-toastify";
import {getFromLocalStorage} from "../utils/local-storage";

const Navbar = () => {
    const dispatch = useDispatch()

    const [mobileSearchVisible, setMobileSearchVisible] = useState(false)

    const user = getFromLocalStorage('user')

    const search = (val) => {
        dispatch({
            type: 'filters/add',
            payload: {
                search: val
            }
        })

        dispatch(getArticles())
    }

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const categories = useSelector((state) => state?.categories)
    return (
        <header className="main-header header-style-1 font-heading">
            <div className="header-top">
                <div className="container">
                    <div className="row pt-20 pb-20">
                        <div className="col-md-3 col-xs-6 col-sm-3">
                            <Link to="/">
                                <img className="logo" src="/logo192.png" alt="" style={{height: "50px"}}/>
                                <span className={''}>Scripta News</span>
                            </Link>
                        </div>
                        <div
                            className="col-md-9 col-xs-6 col-sm-9 text-end header-top-right d-flex flex-row">
                            <input type="text" className="form-control d-none d-md-block text-white"
                                   onInput={(e) => search(e.target.value)}
                                   placeholder={'Type to search ...'}/>
                            <button className={'btn btn-search btn-secondary d-md-none mr-5'}
                                    onClick={() => setMobileSearchVisible(!mobileSearchVisible)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                            <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
                            {user ? (
                                <div className={'d-flex flex-row'}>
                                    <Link to={'/account'} className="text-white d-md-inline btn btn-primary">
                                        <span className="font-small">
                                        <i className="text-white"></i>
                                            {user?.name}
                                        </span>
                                    </Link>
                                </div>

                            ) : (
                                <Link to={'/auth'} className="text-white d-md-inline btn btn-primary">
                                <span
                                    className="mr-15 font-small">
                                <i className="text-white"></i>Login</span>
                                </Link>
                            )}
                        </div>
                        <div className={`col-md-12 shadow ${mobileSearchVisible ? 'd-block' : 'd-none'} d-md-none`}>
                            <input type="text" className="form-control d-md-block text-white"
                                   placeholder={'Type to search ...'}
                                   onInput={(e) => search(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-sticky">
                <div className="container align-self-center position-relative">
                    <div
                        className="position-sticky mobile_menu d-lg-none d-block d-flex flex-row w-100 overflow-scroll p-3 main-menu font-small">
                        {categories?.data?.map((category, index) => (
                            <li key={index} className={''}>
                                <Link to={`/category/${category?.id}`}>
                                    {category?.name?.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div className="main-nav d-none d-lg-block float-start">
                        <nav>
                            <ul className="main-menu d-none d-lg-inline font-small">
                                {categories?.data?.map((category, index) => (
                                    <li key={index}>
                                        <Link to={`/category/${category?.id}`}>
                                            {category?.name?.toUpperCase()}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="clearfix"></div>
                    <ToastContainer/>
                </div>
            </div>
        </header>

    )
}

export default Navbar