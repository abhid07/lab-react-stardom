import React from 'react'


export default function DisplayStars(props) {

    console.log(props);
    return (
       
        <div className="table-container">
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                 { props.item.items.map(item=>{
                     console.log(item)
                return (
                    <tbody key={item.id} className={item.name}>
                    <tr>
                        <td><img className="image" src={item.pictureUrl} /></td>
                        <td>{item.name}</td>
                        
                        <td>{item.popularity}</td>
                            <td><button onClick={() => props.item.deleteStar(item.id)}>Delete</button></td>
                    </tr>
                    </tbody>
                 )})}
           </table>
           
        </div>
    )
}

