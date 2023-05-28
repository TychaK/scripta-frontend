import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getArticle} from "../../store/articles.store";

const Article = () => {
    const dispatch = useDispatch()
    const {article_id} = useParams()
    useEffect(() => {
        dispatch(getArticle(article_id || ''))
    }, [article_id])

    const article = useSelector((state) => state?.articles?.data)

    return (
        <>
            <div className="container single-content">
                <div className="entry-header entry-header-style-1 mb-50 pt-50">
                    <h1 className="entry-title mb-50 font-weight-900">
                        {article?.title}
                    </h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="entry-meta align-items-center meta-2 font-small color-muted">
                                <p className="mb-5">
                                    <Link className="author-avatar" to="/#"></Link>
                                    By <a href="author.html">
                                    <span className="author-name font-weight-bold">
                                        {article?.author?.name || article?.contributors}
                                    </span>
                                </a>
                                </p>
                                <span className="mr-10">
                                    {article?.published_at}
                                </span>
                                <span className="has-dot"> 8 mins read</span>
                            </div>
                        </div>
                        <div className="col-md-6 text-end d-none d-md-inline">
                            <ul className="header-social-network d-inline-block list-inline mr-15">
                                <li className="list-inline-item text-muted"><span>Share this: </span></li>
                                <li className="list-inline-item"><a className="social-icon fb text-xs-center"
                                                                    target="_blank" href="#"><i
                                    className="elegant-icon social_facebook"></i></a></li>
                                <li className="list-inline-item"><a className="social-icon tw text-xs-center"
                                                                    target="_blank" href="#"><i
                                    className="elegant-icon social_twitter "></i></a></li>
                                <li className="list-inline-item"><a className="social-icon pt text-xs-center"
                                                                    target="_blank" href="#"><i
                                    className="elegant-icon social_pinterest "></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img className="border-radius-10" src={`${article?.image_url}`} alt="post-title"/>
                </figure>

                <article className="entry-wraper mb-50">
                    <div className="excerpt mb-30">
                        <p>
                            {article?.title}
                        </p>
                    </div>
                    <div className="entry-main-content dropcap wow fadeIn  animated">
                        <p dangerouslySetInnerHTML={{__html: article?.description || article?.content}}></p>
                        <hr className="wp-block-separator is-style-dots"/>
                    </div>
                </article>
            </div>
        </>
    )
}
export default Article