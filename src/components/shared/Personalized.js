import {useDispatch, useSelector} from "react-redux";
import {getFromLocalStorage} from "../../utils/local-storage";
import {useEffect, useState} from "react";
import {getArticles} from "../../store/articles.store";
import ArticleListItem from "./ArticleListItem";

const Personalized = () => {

    const dispatch = useDispatch()

    const articles = useSelector((state) => state?.articles?.data)

    const user = getFromLocalStorage('user')

    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch({
            type: 'filters/add',
            payload: {
                user_id: user?.id,
                summary: true,
                paginate: true,
                page: page,
                category_id: []
            }
        })
        dispatch(getArticles())
    }, [page])

    return (
        <>
            <div className="archive-header pt-50">
                <div className=""><h4 className="font-weight-900">Personalized for you</h4>
                    <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                </div>
            </div>
            {articles?.data?.map((article, index) => (
                <ArticleListItem article={article} key={index}/>
            ))}
            <div className="pagination-area mb-30 wow fadeInUp  animated">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                        {articles?.links?.map((link, index) => (
                            <li className="page-item active" key={index}
                                onClick={() => setPage(link?.label)}>
                                <a className="page-link" href="#"
                                   dangerouslySetInnerHTML={{__html: link?.label}}>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Personalized
