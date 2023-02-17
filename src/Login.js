import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const history = useNavigate()
    useEffect(()=>{
        async function getRem(){
            const res = await axios.get('http://localhost:3400/')
            console.log(res.data)
        }
        getRem()
    },[])
    return (
        <div style={{display:'flex', flexDirection:'column', zIndex:'1000'}}>
            <div style={{display:'flex', alignItems:'center', padding:'9px'}} className='msg'>
                <div>
                    <img style={{width:"40px"}} src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'></img>
                </div>
                <div style={{marginLeft:'10px'}}>
                    <a style={{textDecoration:'none', color:'rgb(40,40,40)'}} href='http://localhost:3400/auth/google'><h2>Connect With Google</h2></a>
                </div>
                
            </div>

            
        </div>
    )
}

export default Login
