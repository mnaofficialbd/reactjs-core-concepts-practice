import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name='Chittagong' speciality='Mezban'></District>
      <District name='Dhaka' speciality='Business'></District>
      <District name='Chatpur' speciality='Hilsha'></District>
    </div>
  );
}
function LoadPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
// console.log(posts)
function Post(props) {
  return (
    <div style={{ backgroundColor: 'rgb(207, 241, 53)', margin: '10px', padding: '10px', borderRadius: '15px', border: '2px solid red' }}>
      <h3>Post No: {props.id}</h3>
      <h4 style={{ padding: '10px', backgroundColor: '#61dafb', borderRadius: '5px' }}>Title: {props.title}</h4>
      <p>Body: {props.body}</p>
    </div>
  )
}
const districtStyle = {
  backgroundColor: '#61dafb',
  margin: '20px',
  padding: '10px',
  borderRadius: '20px',
}
function District(props) {
  const [power, setPower] = useState(1)

  const bootsPower = () => {
    /* const newPower = power * 2;
    setPower(newPower) */
    setPower(power * 2)
  }

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.speciality}</p>
      <h4>Power: {power}</h4>
      <button onClick={bootsPower}>Boost the Power</button>
    </div>
  )
}

export default App;
