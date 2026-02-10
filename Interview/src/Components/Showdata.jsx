import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Showdata = () => {
    const [userdata, setuserData] = useState([]);
    const [Error, setError] = useState(null)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setuserData(res.data))
            .catch((err) => setError(err))
    })
    return (
        <>
            <div>
                {userdata.length > 0 ? userdata.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>Good</p>
                    </div>
                )) : <p>data is missing</p>}
            </div>
        </>
    )
}

export default Showdata;
