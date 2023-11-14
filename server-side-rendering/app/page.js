"use client"
import axios from "axios";
import React, { useState } from "react";

const Page = ()=>{
  const [userdata, setUserdata] = useState("")
  const [num, setnum] = useState(10)

const getData = async ()=>{
  const response = await axios.get("https://picsum.photos/v2/list")
setUserdata(JSON.stringify(response.data))
}

return (
<div>
<button onClick={getData} className="bg-lime-400 rounded px-5 py-3">Get Data</button>
<div className="bg-slate-200">
  {/* {userdata.map((e)=>{
    userdata
  })} */}
{userdata}
</div>
</div>
)
}
export default Page