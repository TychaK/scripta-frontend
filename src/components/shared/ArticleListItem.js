import {Link} from "react-router-dom";

const ArticleListItem = (props) => {
    const {article} = props
    return (
        <>
            <article className="hover-up-2 transition-normal wow fadeInUp  animated"
                     style={{visibility: "visible", animationName: "fadeInUp"}}>
                <div className="row mb-40 list-style-2">
                    <div className="col-md-4">
                        <div className="post-thumb position-relative border-radius-5">
                            <div className="img-hover-slide border-radius-5 position-relative"
                                 style={{backgroundImage: `url(${article?.image_url})`}}>
                                <Link className="img-link" to={`/articles/${article?.id}`}></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 align-self-center">
                        <div className="post-content">
                            <div className="entry-meta meta-0 font-small mb-10">
                                <Link to={`/articles/${article?.id}`}>
                                    <span className="post-cat text-warning">
                                    {article?.category?.name}
                                </span>
                                </Link>
                            </div>
                            <h5 className="post-title font-weight-900 mb-20">
                                <Link to={`/articles/${article?.id}`}>
                                    {article?.title}
                                </Link>
                            </h5>
                            <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                                <span className="post-on">
                                    {article?.created_at}
                                </span>
                                <span className="time-reading has-dot">
                                    {article?.author?.name || article?.contributors}
                                </span>
                                <span className="post-by has-dot">{article?.views} views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default ArticleListItem