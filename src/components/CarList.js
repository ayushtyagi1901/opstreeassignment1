import React from "react";

function CarList({carList}){
    return(
        <div>
            <h2>CarList</h2>
            <ul>
                {carList.map((car, index)=> (
                    <li key={index}>
                        Name: {car.name}, Model:{car.model}, Quantity: {car.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarList;