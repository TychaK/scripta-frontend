import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../store/users.store";

const Register = () => {
    const dispatch = useDispatch()
    const errors = useSelector((state) => state?.users?.errors)

    function register(e) {
        e.preventDefault()
        dispatch({
            type: 'register/form',
            payload: {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                password_confirmation: e.target.password_confirmation.value
            }
        })

        dispatch(createUser())

    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-10">
                        <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                            <div className="padding_eight_all bg-white">
                                <div className="heading_s1 text-center">
                                    <h3 className="mb-30 font-weight-900">Sign Up | Scripta</h3>
                                </div>
                                <form method="post" onSubmit={register}>
                                    <div className="form-group">
                                        <input type="text" required="" className="form-control text-white" name="name"
                                               placeholder="Your Name"/>
                                        {errors?.name?.map((error, index) => (
                                            <span className={'text-danger'} key={index}>
                                                {error}
                                            </span>
                                        ))}
                                    </div>
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
                                    <div className="form-group">
                                        <input className="form-control text-white" required="" type="password"
                                               name="password_confirmation"
                                               placeholder="Confirm Password"/>

                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="button button-contactForm btn-block">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                                <div className="text-muted text-center">Have an Account?
                                    <Link to="/auth"> Log In now</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register