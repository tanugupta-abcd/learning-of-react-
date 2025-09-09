import { useActionState, useState } from "react";


const IntroForm = () => {

    const initalStates ={
        firstName:"tanu gupta",
        country:"Africa",
        gender: "female",
        hobbies: ['sports','drawing'],
        email: "itsme@gmail",
        password: "xyz@123"
    };


    const [state ,action ,isPending] = useActionState(formSubmitted ,initalStates);
    
    async function formSubmitted( prevData,formData){

        console.log(prevData ,Object.fromEntries(formData));
        console.log("form submitting...");

        await new Promise((resolve)=> setTimeout(resolve,4000));
        let data = Object.fromEntries(formData);
        const allHobbies =formData.getAll('hobbies');
        data ={...data,hobbies:allHobbies};
        console.log(data);

        console.log("form submitted sucessfully...");

        return {};
    }

    const emptyState={
         firstName:"",
        email:"",
        password:"",
        gender:"",
        country:"",
        hobbies:[]
    }

    const [data,setData]=useState(emptyState);

    function handleInputUpdate(e){
        const {name,value,type ,checked}= e.target ;

        if(type ==='checkbox'){
           const newHobbies = checked
           ?[...data.hobbies,value]
           :data.hobbies.filter((item)=> item!==value);
           const newData = {...data ,hobbies:newHobbies};
           setData(newData);
           console.log(newData);
           return;
        }
        const newData = {...data ,[name]:value};
        setData(newData);
        console.log(newData);
    }

    function onFormSubmit(e){
        e.preventDefault();
        console.log(data);


        // e.target.rest();
        setData(emptyState);
    }

    return (
      <form onSubmit={onFormSubmit}>
        <label>
            First Nmae :
            <input
             type="text" 
             name="firstName"
             placeholder="enter your name" 
             onChange={handleInputUpdate}
             value={data.firstName}
             />
        </label>
         <br /><br />
        <label>
            Email :
            <input 
            type="email" 
            name="email"
             placeholder="enter your email"
             onChange={handleInputUpdate}
             value={data.email}
              />
        </label>
         <br /><br />
        <label>
            Password :
            <input
             type="password" 
             name="password"
              placeholder="enter stron password"
              value={data.password}
             onChange={handleInputUpdate}
             
             />
        </label>
        <br /><br />
        <label>
            Gender :
            <label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    onChange={handleInputUpdate}
                    checked={"male"===data.gender}
                />
                 Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleInputUpdate} 
                    checked={"female"===data.gender}
                />
                 Female
            </label>
            <label>
                <input 
                    type="radio"
                    name="gender"
                    value="others" 
                    onChange={handleInputUpdate}
                    checked={"others"===data.gender}
                />
                Others
            </label>
        </label>

        <br /><br />

         <label  >Country : 
            <select name="country" onChange={handleInputUpdate} value={data.country} >
                <option value="USA">USA</option>
                <option value="Indian">Indian</option>
                <option value="Germany">Germany</option>
                <option value="Africa">Africa</option>
            </select>
        </label>

         <br /><br />

         <label name="hobbies">
            Hobbies :
            <br />
             <label>
                <input
                    type="checkbox"
                    name="hobbies"
                    value='dancing'
                    onChange={handleInputUpdate} 
                    checked={data.hobbies?.includes("dancing")}
                />
                Dancing
             </label>
             <br />
             <label>
                <input
                    type="checkbox" 
                    name="hobbies"
                    value='drawing' 
                    onChange={handleInputUpdate}
                    checked={data.hobbies?.includes("drawing")}
                /> 
                Drawing
             </label>
             <br />
             <label>
                <input 
                    type="checkbox" 
                    name="hobbies"
                    value='reading'
                    onChange={handleInputUpdate}
                   checked={data.hobbies?.includes("reading")}
                />
                Reading
             </label>
             <br />
             <label>
                <input 
                    type="checkbox"
                    name="hobbies"
                    value='sports' 
                    onChange={handleInputUpdate}
                    checked={data.hobbies?.includes("sports")}
                />
                Sports
             </label>
         </label>
        <br /><br />
         <button disabled={isPending} type="submit" >Submit</button>
         <button type="button"  >Cancle</button>

      </form>
    );
};

export default IntroForm;
