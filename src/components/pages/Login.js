import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../store/users.store";
import {getFromLocalStorage} from "../../utils/local-storage";

const Login = () => {
    const dispatch = useDispatch()
    const errors = useSelector((state) => state?.users?.errors)

    function login(e) {
        e.preventDefault()
        dispatch({
            type: 'login/form',
            payload: {
                email: e.target.email.value,
                password: e.target.password.value
            }
        })

        dispatch(loginUser()).then(() => {
            if (getFromLocalStorage('user') !== null) {
                window.location.href = '/account'
            }
        })

    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-10">
                        <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                            <div className="padding_eight_all bg-white">
                                <div className="heading_s1 text-center">
                                    <h3 className="mb-30 font-weight-900">Login | Scripta</h3>
                                </div>
                                <form method="post" onSubmit={login}>
                                    <div className="form-group">
                                        <input type="text" required="" className="form-control text-white" name="email"
                                               placeholder="Your Email"/>
                                        {errors?.email?.map((error, index) => (
                                            <span className={'text-danger'} key={index}>
                                                {error}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control text-white" required="" type="password"
                                               name="password"
                                               placeholder="Password"/>
                                        {errors?.password?.map((error, index) => (
                                            <span className={'text-danger'} key={index}>
                                                {error}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="login_footer form-group">
                                        <div className="chek-form">
                                            <div className="custome-checkbox">
                                                <input className="form-check-input" type="checkbox" name="checkbox"
                                                       id="exampleCheckbox1" value=""/>
                                                <label className="form-check-label"
                                                       htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                                            </div>
                                        </div>
                                        <a className="text-muted" href="#">Forgot password?</a>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="button button-contactForm btn-block">
                                            Log in
                                        </button>
                                    </div>
                                </form>
                                <div className="text-muted text-center">Don't Have an Account?
                                    <Link to="/signup"> Sign up now</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login