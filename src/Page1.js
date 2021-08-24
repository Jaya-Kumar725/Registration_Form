import React from 'react'
import "./App.css"

function Page1() {
    return (
        <div>
            <div class="progress" style={{ height: "2px", width: "24rem", position: "absolute", left: "18rem", top: "3rem" }}>
                <div class="progress-bar w-0" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress" style={{ height: "2px", width: "24rem", position: "absolute", left: "44.5rem", top: "3rem" }}>
                <div class="progress-bar w-0" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            {/*  */}
            <div className="container"> <div className="text-center mt-5 ">
                <h1>Add your personal details</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
                <div className="row padding-10px">
                    <div className="col-lg-7 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container">
                                    <form  id="contact-form">
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> <label for="form_name">Fullname</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Fullname" required="required" data-error="Firstname is required." /> </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> <label for="form_need">Gender</label> <select id="form_need" name="value" className="form-control" required="required" data-error="Please specify your need.">
                                                        <option value="" selected disabled>Select your Gender</option>
                                                        <option value="database">Male</option>
                                                        <option value="localfile">Female</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> <label for="form_need">Country</label> <select id="form_need" name="value" className="form-control" required="required" data-error="Please specify your need.">
                                                        <option value="" selected disabled>India</option>
                                                        <option value="database">America</option>
                                                        <option value="localfile">Europe</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> <label for="form_need">State</label> <select id="form_need" name="value" className="form-control" required="required" data-error="Please specify your need.">
                                                        <option value="" selected disabled>Tamilnadu</option>
                                                        <option value="database">Kerala</option>
                                                        <option value="localfile">Karnataka</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-md-12">
                                                    <div className="form-group"> <label for="form_name">Phone</label> <input id="form_name" type="number" name="phone" className="form-control" placeholder="phone" required="required" data-error="Firstname is required." /> </div>
                                                </div>
                                                {/* <div > <input type="submit" className="btn btn-success btn-send pt-2 btn-block " onClick value="Next" /> </div> */}
                                                <p style={{ textAlign: "center" ,marginTop:"3rem"}}>Already have an account?<a href="/"> Log in</a></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page1
