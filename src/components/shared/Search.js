const Search = () => {
    return (
        <>
            <div className="main-search-form">
                <div className="container">
                    <div className=" pt-50 pb-50 ">
                        <div className="row mb-20">
                            <div className="col-12 align-self-center main-search-form-cover m-auto">
                                <p className="text-center"><span className="search-text-bg">Search</span></p>
                                <form action="#" className="search-header">
                                    <div className="input-group w-100">
                                        <input type="text" className="form-control"
                                               placeholder="Search stories, places and people"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-search bg-white" type="submit">
                                                <i className="elegant-icon icon_search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-80 text-center">
                            <div className="col-12 font-small suggested-area">
                                <h5 className="suggested font-heading mb-20 text-muted"><strong>Suggested
                                    keywords:</strong></h5>
                                <ul className="list-inline d-inline-block">
                                    <li className="list-inline-item"><a href="category.html">World</a></li>
                                    <li className="list-inline-item"><a href="category.html">American</a></li>
                                    <li className="list-inline-item"><a href="category.html">Opinion</a></li>
                                    <li className="list-inline-item"><a href="category.html">Tech</a></li>
                                    <li className="list-inline-item"><a href="category.html">Science</a></li>
                                    <li className="list-inline-item"><a href="category.html">Books</a></li>
                                    <li className="list-inline-item"><a href="category.html">Travel</a></li>
                                    <li className="list-inline-item"><a href="category.html">Business</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-80">
                            <div className="col-lg-4">
                                <div
                                    className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                                    <div
                                        className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <a className="color-white" href="single.html">
                                            <img src="assets/imgs/news/thumb-2.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6><a href="category.html">Travel Tips</a></h6>
                                        <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                                    <div
                                        className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <a className="color-white" href="single.html">
                                            <img src="assets/imgs/news/thumb-4.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6><a href="category.html">Lifestyle</a></h6>
                                        <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6">
                                <div
                                    className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                                    <div
                                        className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <a className="color-white" href="single.html">
                                            <img src="assets/imgs/news/thumb-3.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6><a href="category.html">Hotel Review</a></h6>
                                        <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Search