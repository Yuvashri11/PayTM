import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export function Balance(){
    const [amount,setAmount]=useState(0)
    const loc=useLocation()
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response)=>{
                console.log(response.data)
                setAmount(response.data.balance)
            })
        
    },[loc])
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {amount}
        </div>
    </div>
}