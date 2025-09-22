import { useState } from 'react'
import viteLogo from '/vite.svg'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount(count => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// function App() {
//   return (
//     <>
//       <h1>Hello World!</h1>
//       <h2>Learning to code with React</h2>
//     </>
//   )
// }

// function App() {
//   const users = [
//     { id: 1, name: 'Nathan', role: 'Web Developer' },
//     { id: 2, name: 'John', role: 'Web Designer' },
//     { id: 3, name: 'Jane', role: 'Team Leader' },
//   ]

//   return (
//     <>
//       <p>The currently active users list:</p>
//       <ul>
//       {
//         users.map(function(user){
//           // returns Nathan, then John, then Jane
//           return (
//             <li key={user.id}> {user.name} as the {user.role} </li>
//           )
//         })
//       }
//       </ul>
//     </>
//   )
// }


// export default App


// export default function ParentComponent() {
//   return (
//     <>
//       <UserComponent />
//       <ProfileComponent />
//       <FeedComponent />
//     </>
//   );
// }

// function UserComponent() {
//   return <h1> User Component </h1>;
// }

// function ProfileComponent() {
//   return <h1> Profile Component </h1>;
// }

// function FeedComponent() {
//   return <h1> Feed Component</h1>;
// }

// >>>>>>>>>>>>>> REACT STATE >>>>>>>>>>>>>>>>>>
export default function ParentComponent() {
  const [name, setName] = useState('John')

  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={() => setName('Mark')}>Change Name</button>
    </>
  )
}
