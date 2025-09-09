export const SIGN_IN_FORM_CONFIG =[
    {
        id:"username",
        name:"username",
        label:"Username :",
        defaultValue:"tanu",
        placeholder:"eg.john palate",
        type:"text"
        
    },
    {
        id:"email",
        name:"email",
        label:"Email :",
        placeholder:"eg.john@.com",
        type:"email"
        
    }
    ,
    {
        id:"password",
        name:"password",
        label:"Password :",
        placeholder:"e.g.enter a strong password",
        type:"password"
    }
    
]


export const SIGN_UP_FORM_CONFIG=[
    {
        id:"username",
        name:"username",
        label:"Name :",
        placeholder:"eg.john palate",
        type:"text",
        validate: (val)=>{
            if(!val) return "Username is required"
            if(val.length<4) return "Username should e of least length 4"
            return null;
        }
    },
    {
        id:"email",
        name:"email",
        label:"Email :",
        placeholder:"eg.john@.com",
        type:"email",
        validate: (val)=>{
            if(!val) return "Email is required"
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(val)) return "Email is not valid"
            return null;
        }
    }
    ,
    {
        id:"password",
        name:"password",
        label:"Password :",
        placeholder:"e.g.enter a strong password",
        type:"password",
        autocomplete:"new-password",
        validate: (val)=>{
            if(!val) return "Password is required"
            if(val.length<4) return "Password should e of least length 4"
            const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if(!emailRegex.test(val)) return "Strong password (8+ chars, uppercase, lowercase, digit, special char)"
            return null;
        }
    },
    {
        id:"confirmPassword",
        name:"confirmPassword",
        label:"Confirm Password :",
        placeholder:"asa same as above",
        type:"password",
        autocomplete:"new-password",
        validate:(val, formData )=>{
            if(val ==formData.password) return null;
            return "Password not match"
        }
    }
    ,{
        id:"gender",
        name:"gender",
        label:" Gender :",
        type:"radio",
        options:[
            {
                label:"Male",
                value:"male"
            },
             {
                label:"Female",
                value:"female"
            },
             {
                label:"Others",
                value:"others"
            }
        ],
        validate:(val)=>{
            if(val) return null;
            return "Please select a Gender"
        }
    },
    {
        id:"country",
        name:"country",
        label:" Country :",
        type:"select",
        options:[
            {
                label:"India",
                value:"india"
            },
             {
                label:"UAS",
                value:"usa"
            },
             {
                label:"Germany",
                value:"germany"
            }
        ],
        validate:(val)=>{
            if(val) return null;
            return "Please select a Country";
        }
    }
    ,{
        id:"hobbies",
        name:"hobbies",
        label:" Hobbies :",
        type:"checkbox",
        options:[
            {
                label:"Reading",
                value:"reading"
            },
             {
                label:"Cycling",
                value:"cycling"
            },
             {
                label:"Drawing",
                value:"drawing"
            }
        ],
        validate:(val)=>{
            if(val && val.length>0) return null;
            return "Please select atleast one";
        }
    }
    
]