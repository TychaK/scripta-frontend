import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getArticles} from "../../store/articles.store";
import {useParams} from "react-router-dom";
import ArticleListItem from "../shared/ArticleListItem";

const ArticleCategories = () => {
    const dispatch = useDispatch()
    const {category_id} = useParams()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch({
            type: 'filters/add',
            payload: {
                category_id: [category_id],
                search: '',
                page: page,
                paginate: true,
                user_id: ''
            }
        })
        dispatch(getArticles())
    }, [category_id, page])

    const articles = useSelector((state) => state?.articles?.data)

    return (
        <>
            <div className="pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="post-module-3">
                                <div className="widget-header-1 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Latest posts</h5>
                                </div>
                                <div className="loop-list loop-list-style-1">
                                    {articles?.data?.map((article, index) => (
                                        <ArticleListItem article={article} key={index}/>
                                    ))}
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleCategories