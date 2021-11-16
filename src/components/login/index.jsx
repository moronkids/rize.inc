import React from "react";
import BgVideo from "assets/videos/bg_vid.mp4";
import MainLogo from "assets/img/main_logo2.png";
function index() {
  return (
    <div>
      <main className="main h-100 w-100 flex-column my-auto d-flex">
        <video
          // source={BgVideo}
          // playsinline
          autoPlay
          muted
          loop
          // poster="polina.jpg"
          // id="bgvid"
        >
          {/* <source src={BgVideo} type="video/webm" /> */}
          <source src={BgVideo} type="video/mp4" />
        </video>
        <div className="container h-100 my-auto">
          <div className="row h-100">
            <div className="col-sm-8 col-md-6 col-lg-4 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <a href="rize_signIn2.html">
                    <img
                      src={MainLogo}
                      alt="Rize.inc Logo"
                      className="img-fluid mb-3"
                      width="120"
                      height="120"
                    />
                  </a>
                  <h1 className="h2 rCw">Welcome to Rize.inc</h1>
                  <p className="lead rCw">
                    Sign in to your account to Continue
                  </p>
                </div>

                <div className="card mt-2">
                  <div className="card-body p-0">
                    <div className="m-sm-4">
                      <form>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            className="form-control form-control-lg"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                          />
                          <small>
                            <a
                              href="rize_resetPass.html"
                              className="left ptb1 rLink"
                            >
                              Forgot password?
                            </a>
                          </small>
                        </div>
                        <div className="inline-div">
                          <div className="custom-control custom-checkbox align-items-center mt-3 col-md-6">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              value="remember-me"
                              name="remember-me"
                            />
                            <label className="custom-control-label text-sm">
                              Remember me
                            </label>
                          </div>
                          <div className="text-center mt-3 col-md-6">
                            <a
                              href="index.html"
                              className="btn btn-lg btn-primary bt100 btnRprim"
                            >
                              Sign in
                            </a>
                            {/* <!-- <button type="submit" className="btn btn-lg btn-primary">Sign in</button> --> */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <p className="rCw">
                    Doesn’t have an account ?{" "}
                    <a href="rize_signUp.html" className="rCPrim">
                      Register Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade rModal"
          id="successModal_regis"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body m-3">
                <img src="images/success_img.png" className="rModalImg" />
                <p className="mb-0">
                  Registration successfully completed!, Please check Your{" "}
                  <b>E-Mail</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade rModal"
          id="successModal_password"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body m-3">
                <img src="images/success_img.png" className="rModalImg" />
                <p className="mb-0">
                  Please check your E-Mail to continue your{" "}
                  <b>Forgot Password</b> Process!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade rModal"
          id="errorModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body m-3">
                <img src="images/failed_img.png" className="rModalImg" />
                <p className="mb-0">
                  We encounter some problem, please check your input or contact
                  us using this error code : <b>xxxxx</b>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default index;
