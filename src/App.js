import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div style={{ columnCount: 3 ,height:"6rem",backgroundColor:"#334257" }}>
                <Link  style={{ position: "absolute", left: "15.5rem", top: "2rem" }} to="/"><div style={{ border: "1px solid white", borderRadius: "50%", height: "2.5rem", width: "2.5rem" }}></div><div className="btn-1" style={{ border: "1px solid white", borderRadius: "50%", width: "2rem", height: '2rem', position: "absolute", bottom: "4px", left: "4px" }}><p style={{ marginLeft: "10px",marginTop:"2px",color:"white" }}>1</p></div></Link>
                <Link style={{ position: "absolute", left: "42rem", top: "2rem" }} to="/Page2"><div style={{ border: "1px solid white", borderRadius: "50%", height: "2.5rem", width: "2.5rem" }}></div><div className="btn-1" style={{ border: "1px solid white", borderRadius: "50%", width: "2rem", height: '2rem', position: "absolute", bottom: "4px", left: "4px" }}><p style={{ marginLeft: "10px",marginTop:"2px",color:"white"  }}>2</p></div></Link>
                <Link  style={{ position: "absolute", left: "68.5rem", top: "2rem" }} to="/Page3"><div style={{ border: "1px solid white", borderRadius: "50%", height: "2.5rem", width: "2.5rem" }}></div><div className="btn-1" style={{ border: "1px solid white", borderRadius: "50%", width: "2rem", height: '2rem', position: "absolute", bottom: "4px", left: "4px" }}><p style={{ marginLeft: "10px",marginTop:"2px",color:"white"  }}>3</p></div></Link>
            </div>
{/* 
            <Link to="/Page2"><input type="submit" className="btn btn-success btn-send pt-2 btn-block " onClick value="Next" /></Link>
            <Link to="/Page3"><input type="submit" className="btn btn-success btn-send pt-2 btn-block " onClick value="Next" /></Link> */}
            



            <Switch>
                <Route path="/Page2">
                    <Page2 />
                </Route>
                <Route path="/Page3">
                    <Page3 />
                </Route>
                <Route path="/">
                    <Page1 />
                </Route>
            </Switch>

        </Router>

    )
}

export default App
