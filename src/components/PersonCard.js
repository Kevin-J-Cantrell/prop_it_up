
import React, {useState} from 'react';
    
const PersonCard = (props) => {


    // const [age,setAge] = useState(props.age);
    
    
    return (
        <div>
            <h1>{ props.firstname }, { props.lastname }</h1>
            <p>age: {age}</p>
            <p>Hair Color: {props.hair_color}</p>
            
            <button onClick={(event)=> setAge(age + 1)}>Happy Birthday {props.firstname} a year older!</button>
            <button onClick={(event)=> setAge(age - 1)}>you have been babyfied {props.firstname} by a year!</button>
        </div>
    );
}
export default PersonCard;