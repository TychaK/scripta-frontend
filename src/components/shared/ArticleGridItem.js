const ArticleGridItem = () => {
    return (
        <>
            <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp  animated" data-wow-delay="0.2s">
                <div className="post-card-1 border-radius-10 hover-up">
                    <div className="post-thumb thumb-overlay img-hover-slide position-relative"
                         style={{backgroundImage: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg'}}>
                        <a className="img-link" href="single.html"></a>
                        <span className="top-right-icon bg-success"><i
                            className="elegant-icon icon_camera_alt"></i></span>
                        <ul className="social-share">
                            <li><a href="#"><i className="elegant-icon social_share"></i></a></li>
                            <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i
                                className="elegant-icon social_facebook"></i></a></li>
                            <li><a className="tw" href="#" target="_blank" title="Tweet now"><i
                                className="elegant-icon social_twitter"></i></a></li>
                            <li><a className="pt" href="#" target="_blank" title="Pin it"><i
                                className="elegant-icon social_pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div className="post-content p-30">
                        <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.html"><span
                                className="post-cat text-info">Travel</span></a>
                            <a href="category.html"><span className="post-cat text-success">Food</span></a>
                        </div>
                        <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                                <a href="single.html">Want fluffy Japanese pancakes but can’t fly to
                                    Tokyo?</a>
                            </h5>
                            <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                                <span className="post-on">27 August</span>
                                <span className="time-reading has-dot">12 mins read</span>
                                <span className="post-by has-dot">23k views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default ArticleGridItem