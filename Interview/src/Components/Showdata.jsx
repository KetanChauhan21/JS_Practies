import React, { useEffect, useState } from 'react'

const Showdata = () => {
    const [userdata, setuserData] = useState([]);
    const [Error, setError] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => { setuserData(data); console.log("data is:", data) })
            .catch((err) => setError(err.message));
    }, [])
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
