import React from 'react'

import HtmlRender from '../../../components/utils/HtmlRender'
import UiValidate from '../../../components/forms/validation/UiValidate'

const terms = require('html-loader!./TermsAndConditions.html');

export default class Register extends React.Component {
  render() {
    return (
      <div id="extr-page">
        <header id="header" className="animated fadeInDown">

          <div id="logo-group">
            <span id="logo"> <img src="assets/img/logo.png" alt="SmartAdmin"/> </span>
          </div>

          <span id="extr-page-header-space">
        <span className="hidden-mobile hiddex-xs">Already registered?</span>&nbsp;<a href="#login"
                                                                                     className="btn btn-danger">Sign In</a> </span>

        </header>
        <div id="main" role="main" className="animated fadeInDown">

          {/* MAIN CONTENT */}
          <div id="content" className="container">

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 hidden-xs hidden-sm">
                <h1 className="txt-color-red login-header-big">StreamTech</h1>
                <div className="hero">

                  <div className="pull-left login-desc-box-l">
                    <h4 className="paragraph-header">It's Okay to be Smart. Experience the simplicity of StreamTech,
                      everywhere you go!</h4>
                    
                  </div>

                  <img src="assets/img/demo/iphoneview.png" alt="" className="pull-right display-image"
                       style={{width: '210px'}}/>

                </div>

                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5 className="about-heading">About StreamTech</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa.
                    </p>
                  </div>

                </div>

              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="well no-padding">

                  <form action="#/dashboard" id="smart-form-register" className="smart-form client-form">
                    <header>
                      Registration is FREE*
                    </header>

                    <fieldset>
                      <section>
                        <label className="input"> <i className="icon-append fa fa-user"/>
                          <input type="text" name="username" placeholder="Username"/>
                          <b className="tooltip tooltip-bottom-right">Needed to enter the website</b> </label>
                      </section>

                      <section>
                        <label className="input"> <i className="icon-append fa fa-envelope"/>
                          <input type="email" name="email" placeholder="Email address"/>
                          <b className="tooltip tooltip-bottom-right">Needed to verify your account</b> </label>
                      </section>

                      <section>
                        <label className="input"> <i className="icon-append fa fa-lock"/>
                          <input type="password" name="password" placeholder="Password" id="password"/>
                          <b className="tooltip tooltip-bottom-right">Don't forget your password</b> </label>
                      </section>

                      <section>
                        <label className="input"> <i className="icon-append fa fa-lock"/>
                          <input type="password" name="passwordConfirm" placeholder="Confirm password"/>
                          <b className="tooltip tooltip-bottom-right">Don't forget your password</b> </label>
                      </section>
                    </fieldset>

                    <fieldset>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input type="text" name="firstname" placeholder="First name"/>
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input type="text" name="lastname" placeholder="Last name"/>
                          </label>
                        </section>
                      </div>

                      <div className="row">
                        <section className="col col-6">
                          <label className="select">
                            <select name="gender" defaultValue={"0"}>
                              <option value="0" disabled={true}>Gender</option>
                              <option value="1">Male</option>
                              <option value="2">Female</option>
                              <option value="3">Prefer not to answer</option>
                            </select> <i/> </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input type="text" name="companyname" placeholder="Company name"/>
                          </label>
                        </section>

                      </div>

                      <section>
                        <label className="checkbox">
                          <input type="checkbox" name="subscription" id="subscription"/>
                          <i/>I want to receive news and special offers</label>
                        <label className="checkbox">
                          <input type="checkbox" name="terms" id="terms"/>
                          <i/>I agree with the <a href="#" data-toggle="modal" data-target="#myModal"> Terms and
                          Conditions </a></label>
                      </section>
                    </fieldset>
                    <footer>
                      <a href="#/dashboard" className="btn btn-primary">
                        Register
                      </a>
                    </footer>

                    <div className="message">
                      <i className="fa fa-check"/>
                      <p>
                        Thank you for your registration!
                      </p>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal */}
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
                <h4 className="modal-title" id="myModalLabel">Terms & Conditions</h4>
              </div>
              <div className="modal-body custom-scroll terms-body">
                <HtmlRender html={terms}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" id="i-agree">
                  <i className="fa fa-check"/> I Agree
                </button>

                <button type="button" className="btn btn-danger pull-left" id="print">
                  <i className="fa fa-print"/> Print
                </button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
      </div>
    )
  }
}
