import React from 'react'

function Page2() {
    return (
        <div>
            <div class="progress" style={{ height: "2px", width: "24rem", position: "absolute", left: "18rem", top: "3rem" }}>
                <div class="progress-bar w-100" role="progressbar" aria-valuenow="105" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress" style={{ height: "2px", width: "24rem", position: "absolute", left: "44.5rem", top: "3rem" }}>
                <div class="progress-bar w-0" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h1>Add Your Company Details</h1>
            <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis tempor ex volutpat laoreet.</p>
            <div className="container" style={{ backgroundColor: "whitesmoke", padding: "3rem", width: "40rem", marginTop: "4rem", marginBottom: "4rem" }}>
                <div style={{ columnCount: 2 }}>
                    <img style={{ height: "5rem", width: "5rem", marginBottom: "2rem", borderRadius: "50%", cursor: "pointer" }} src="https://i.pinimg.com/originals/82/50/eb/8250ebbe710fdc11dc3332e02ad7cf42.jpg" alt=""></img>
                    {/* <p  className="upload" style={{position:"absolute",top:"21.5rem",left:"32rem",cursor:"pointer"}}>Upload your Image</p> */}
                    <div style={{position:"absolute",top:"20rem",left:"32rem"}}>
                    <label class="form-label upload" for="customFile"></label>
                    <input type="file" class="form-control upload" id="customFile" />
                    </div>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Company Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="company name" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="eg: company@gmail.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Job Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg: Full stack" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Year of Experience</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Experience" />
                </div>
                <div class="form-check" style={{ marginTop: "4rem" }}>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        I accept the <a href="/">Terms and Condition</a>
                    </label>
                </div>
                {/* <div > <input type="submit" className="btn btn-success btn-send pt-2 btn-block " onClick value="Next" /> </div> */}

            </div>
        </div>
    )
}

export default Page2
