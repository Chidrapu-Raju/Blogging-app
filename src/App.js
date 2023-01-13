import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import BlogCreated from "./BlogCreated";
import BlogDeleted from "./BlogDeleted";
import PageNotFound from "./PageNotFound";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = ()=>{
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/create" element={<Create />}/>
                        <Route exact path="/blogs/:id" element={<BlogDetails />}/>
                        <Route exact path="/BlogCreated" element={<BlogCreated />}/>
                        <Route exact path="/BlogDeleted" element={<BlogDeleted />}/>
                        <Route exact path="*" element={<PageNotFound />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;