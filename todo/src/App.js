import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';

export default function App() {

const [data, setData] = useState([])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
}, [])


  return (

    
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>uesrId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
          {
            data.map((d)=>{
              return(
                
            
          

        <tr>
         
          <td>{d.userId}</td>
          <td>{d.id}</td>
          <td>{d.title}</td>
          <td>{d.completed}</td>
        </tr>
        
            )
              })
            }
        
        
      </tbody>
    </Table>
    </div>
  )
}

