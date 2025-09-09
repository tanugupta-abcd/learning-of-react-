import React from 'react'
import CustomForm from './CustomForm'
import { SIGN_IN_FORM_CONFIG } from './formConfig'

const SignIn = () => {
 
    function onSignInFormSubmit(data){
        console.log("Data form custom SignIn form :",data);
    }

  return (
    <div>
        <h1>Sign In Form</h1>
      <CustomForm config={SIGN_IN_FORM_CONFIG}  onSubmit={onSignInFormSubmit}/>
    </div>
  )
}

export default SignIn
