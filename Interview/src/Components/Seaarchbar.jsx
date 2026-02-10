import React, { useState } from 'react'

const Seaarchbar = () => {

    const item = ["smartPhone", "laptop", "watch", "camera", "speaker", "headphone", "Cloths", "shoes", "jeans", "shirt", "tshirt", "socks", "Iphone", "Motorola", "SmartWatch", "wireless earphone", "airfrier", "refrigerator", "Laptop", "Button"];
    const [search, setSearch] = useState(item);
    const SearchBar = (val) => {
        const value = item.filter((e) => e.toLowerCase().includes(val.toLowerCase()));
        console.log(value);
        setSearch(value);
    }
    return (
        <div>
            <input type="text" onChange={(e) => SearchBar(e.target.value)} />
            {search.length > 0 ? search.map((val, index) => {
                return (
                    <>
                        <div key={index}>
                            <p>{val}</p>
                        </div>
                    </>
                )
            }) : <div><p>Not Found</p></div>}
        </div>
    )
}

export default Seaarchbar
