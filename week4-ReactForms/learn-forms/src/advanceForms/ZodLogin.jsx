import React, { useState } from 'react'
import {z ,} from 'zod';

const ZodLogin = () => {

   const [data, setData] = useState({
        email: "",
        password: "",
    });
    // const [errors, setErrors] = useState({});

   const zodSchema = z.object({
        email: z.string().trim().email(),
        password: z
            .string()
            .trim()
            .min(6)
            .max(10)
    });

    function handleFormSubmit(e) {
        e.preventDefault();
        zodSchema.parse(data);

         console.log("subnit",data);
    }

    function handleInputUpdate(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }


  console.log(data);
 

  return (
    <div>
      <h1>ZobLogin</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
            Email:
            <input
               type="email" 
               name="email" 
               value={data.email} 
               onChange={handleInputUpdate}
             />
        </label>
        <br />
         <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleInputUpdate}
                    />
                </label>
        <br />
        <button>Submit</button>
    </form>
    </div>
  )
}

export default ZodLogin
