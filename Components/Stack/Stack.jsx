import React from "react";
import "./Stack.css";
import StackNavBar from "./StackNavBar";
import Data from "./StackData/Data";

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaO-zhZqUxonxkKaYjuLIceVbfSLayOjm7Dsg9LZKr7pt2sIXnkkv5EyncMAnIgzqSjZs&usqp=CAU";

const Stack = () => {
    const elem = <>
        <StackNavBar />

        <div className="StackContainer">
            <h1>{Data[0]}</h1>
            <div className="About">
                <p>{Data[1]}
                    {Data[2]}
                    <br />
                    <img className="Img" src={url} />
                </p>
            </div>


            <h1>{Data[3]}</h1>
            <div className="Operations" >
                <p>
                    {Data[4]}
                    {Data[5]}
                </p>
                <br />
                <br />
            </div>
        </div>
    </>
    return elem;
}
export default Stack;