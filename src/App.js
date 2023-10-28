import React, { useState } from 'react';  
import './App.css';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';


function App() {


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

const [cname,setcname] = useState('')
const [usernm,setusernm] = useState(true)

const [email,setemail] = useState('')
const [isemail,setisemail] = useState(true)

const[password,setpassword] = useState('')
const[ispassword,setispassword] = useState(true)
const[confirmpwd,setconfirmpwd] = useState('')
const[isconfirmpwd,setisconfirmpwd] = useState(true)
const[checkpwd,setcheckpwd] = useState(true)



const getValidate = (e)=>{
  const {name,value} =e.target
  console.log(name,value);
  if(name == 'cname')
  {
    if(value == '')
    {
      // console.log('enter a value');
      setcname(value)
      setusernm(false)
    }
    else{
      setcname(value)
      setusernm(true)
    }
  }
  if(name == 'email')
  {
    if(!!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
      setemail(value)
      setisemail(true)
    }
    else{
      setemail(value)
      setisemail(false)
    }
  }
 
  
}



const getpassword =(e) =>{
  e.preventDefault()
  const {name,value} =e.target
  // console.log(name,value);
  if(name == 'password')
  {
    if(value == '')
      {

        setpassword(value)
        setispassword(false)
      }
      else{
        setpassword(value)
        setispassword(true)
      }
    }
    if(name == 'confirm_pwd')
    {
      if(value == '')
      {
        setconfirmpwd(value)
        setisconfirmpwd(false)
      }
      else{
        setconfirmpwd(value)
        setisconfirmpwd(true)
        
      }
      
    }
    
}

const handlesubmit = (e) => {
  
  console.log(password);
  console.log(confirmpwd);
  if(!cname || !email || !password || !confirmpwd)
  {
    e.preventDefault()
    alert('please fill the form')
  }
  else{
    if(password === confirmpwd)
    { 
      // setconfirmpwd(value)
      // setisconfirmpwd(true)
      setcheckpwd('true')
      alert(`Welcome ${cname}, Your account created successfully`)
      
    }
    else
    {
      setcheckpwd(false)
      e.preventDefault()
    }
  }
}




  return (
    <div style={{height:'100vh',backgroundImage:'url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg)',backgroundSize:'cover'}} className='d-flex justify-content-center align-items-center w-100'>
      
      
      <div style={{boxShadow:'15px 15px 15px 15px #aaaaaa',border:'1px solid #BFBFBF'}} className=' p-5 rounded'>
      <h1>SIGN UP HERE</h1>

      <form onSubmit={(e)=>handlesubmit(e)}>
        <div className=' rounded p-3 w-100'>
        <InputLabel htmlFor="name">Name</InputLabel> 
        <TextField name='cname' onChange={(e)=>getValidate(e)} style={{background:'white',border:'0px',borderRadius:'7px'}} fullWidth  id="name" />
        </div>
        { !usernm && 
            <div>
            <p className='text-danger fw-bolder'>*please enter the name</p>
            </div>
            }

        <div className=' rounded p-3 w-100'>
        <InputLabel htmlFor="email">Email</InputLabel> 
        <TextField name='email' onChange={(e)=>getValidate(e)} style={{background:'white',border:'0px',borderRadius:'7px'}} fullWidth  id="email" />
        </div>
        { !isemail && 
            <div>
            <p className='text-danger fw-bolder'>*please enter valid email</p>
            </div>
            }
        

        <div className=' rounded p-3 w-100'>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <  OutlinedInput name='password' style={{background:'white'}}
              id="outlined-adornment-password" onChange={(e) => getpassword(e)} 
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
        </div>

        { !ispassword && 
            <div>
            <p className='text-danger fw-bolder'>*please enter the password</p>
            </div>
            }

        <div className=' rounded p-3 w-100'>
        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
            <OutlinedInput name='confirm_pwd' style={{background:'white'}}
              id="outlined-adornment-password" onChange={(e) => getpassword(e)} 
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
        </div>
            
        { !isconfirmpwd &&
            <div>
            <p className='text-danger fw-bolder'>please enter confirm password</p>
            </div>
            }

        { !checkpwd &&
            <div>
            <p className='text-danger fw-bolder'>Passwords don't match</p>
            </div>
            }

        <div className='d-flex justify-content-center align-item-center mt-3'>
        <Button disabled={usernm && isemail && isconfirmpwd && ispassword?false:true} variant="contained" type='submit'>Sign UP</Button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
