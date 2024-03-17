import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = (props) => {
  return (
    <div>
    <h1>Error 404 : Url not found on server</h1>
    <a href="/"><button className="btn btn-primary">Go back</button></a>
    </div>
  )
};

export default NotFound;
