import React, {useState} from 'react';

function AddCar({carList, setCarList}){
    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddCar = () => {

        const existingCarIndex = carList.findIndex(
            (car) => car.name === name && car.model === model
        );

        if(existingCarIndex !== -1){
            const updatedCarList = [...carList];
            updatedCarList[existingCarIndex].quantity += parseInt(quantity);
            setCarList(updatedCarList);
        }else{
        const newCar = {
            name,
            model,
            quantity: parseInt(quantity),
        };

        //for adding new car
        setCarList([...carList, newCar]);
    }
        //for clearing input fields
        setName('');
        setModel('');
        setQuantity('');
    };

    return(
        <div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default AddCar;