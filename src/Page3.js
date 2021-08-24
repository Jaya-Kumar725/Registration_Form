import React from 'react'

function Page3() {
    return (
        <div>
            <div class="progress" style={{ height: "2px", width: "24rem", position: "absolute", left: "18rem", top: "3rem" }}>
                <div class="progress-bar w-100" role="progressbar" aria-valuenow="105" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress" style={{ height: "2px", width: "24rem", position: "absolute", left: "44.5rem", top: "3rem" }}>
                <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>


            {/*  */}

            <div className="container"> <div className="text-center mt-5 ">
                <h1>Enter your OTP</h1>
                <p style={{ textAlign: "center" }}>For ypur security we need to verify your identity. We sent a 5-digit<br></br> code to name@domain.com. Please enter it below</p>
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
                                                    {/* <div className="form-group"> <label for="form_name">Enter your code</label> <input id="form_name" type="number" name="name" className="form-control" placeholder="OTP" required="required" data-error="Firstname is required." /> </div> */}
                                                    <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"><input class="m-2 text-center form-control rounded" type="number" id="second" maxlength="1" required/> <input class="m-2 text-center form-control rounded" type="number" id="third" maxlength="1" required/> <input class="m-2 text-center form-control rounded" type="number" id="fourth" maxlength="1" required/> <input class="m-2 text-center form-control rounded" type="number" id="fifth" maxlength="1" required/> <input class="m-2 text-center form-control rounded" type="number" id="sixth" maxlength="1" required/> </div>

                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-md-3">
                                                    <input type="submit" className="btn btn-primary btn-send pt-2 btn-block " onClick value="Back" />
                                                </div>

                                                <div className="row col-md-9">
                                                    <input type="submit" className="btn btn-primary btn-send pt-2 btn-block " onClick value="Verify" />
                                                </div>
                                                <p style={{ textAlign: "center" }}>Didn't receive the email? Check your spam filter for an email from name name@domain.com</p>
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

export default Page3
