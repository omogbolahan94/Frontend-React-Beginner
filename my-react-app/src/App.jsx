import { useState } from 'react'
import { useEffect } from 'react';
import viteLogo from '/vite.svg'
import './style.css'


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
// export default function ParentComponent() {
//   const [name, setName] = useState('John')

//   return (
//     <>
//       <h1>Hello {name}</h1>
//       <button onClick={() => setName('Mark')}>Change Name</button>
//     </>
//   )
// }

// function App(props) {
//   const { user } = props

//   if (user) {
//     return <button>Logout</button>
//   }
//   return <button>Login</button>
// }

// export default App

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Dynamically Changing a Button >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// export default function App(props) {
//   const { user } = props

//   let button = <button>Login</button>

//   if (user) {
//     button = <button>Logout</button>
//   }

//   return (
//     <>
//       <h1>Hello there!</h1>
//       {button}
//     </>
//   )
// }


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HANDLING EVENT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// export default function App() {
//   const handleClick = (event) => {
//     console.log("Hello World!");
//     console.log(event);
//   }
//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   )
// }


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< TOGGLE THE VISIBILITY OF DIV >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function App() {
//   // State to hold the visibility status of the paragraph
//   const [isParagraphVisible, setIsParagraphVisible] = useState(true);

//   // Function to toggle the visibility status of the paragraph
//   const toggleStatus = () => {
//     setIsParagraphVisible(!isParagraphVisible);
//   };

//   return (
//     <>
//       <h1 className="paragraph-text">Change UI based on click</h1>
//       {isParagraphVisible && (
//         <p>This paragraph will be shown/hidden on click</p>
//       )}
//       <button onClick={toggleStatus}>
//         {isParagraphVisible ? 'Hide' : 'Show'} Paragraph
//       </button>
//     </>
//   );
// }

// export default App;


// // <<<<<<<<<<<<<<<<<<<<<<<<<<<< FORM SUBMISSION >>>>>>>>>>>>>>>>>>>>>>>>>>>
// function Form() {
//   const [username, setUsername] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(username);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       Username:
//       <input
//         type='text'
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button>Submit</button>
//     </form>
//   );
// }

// export default Form;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< HANDLING ERROR IN FORM SUBMISSION >>>>>>>>>>>>>>>>>>>>>>>>>>>
// function Form() {
//   const [username, setUsername] = useState();
//   const [usernameError, setUsernameError] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(username);
//   };

//   const handleUsername = e => {
//     const { value } = e.target;
//     setUsername(value);
  
//     // Validate username value:
//     if (value.length <= 6) {
//       setUsernameError('Username length must be more than 6 characters');
//     } else {
//       setUsernameError();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       Username:
//       <input type='text' value={username} onChange={handleUsername} />
//       <p>{usernameError}</p>
//       <button>Submit</button>
//     </form>
//   )
// };

// export default Form;


// <<<<<<<<<<<<<<<<<<<<<<<<<< MAKE CONNECTION TO BACKEND: useEffect HOOK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function App() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const task = await response.json();
    console.log(task)
    setTitle(task.title);
  };

  return <h1>{title}</h1>;
};

export default App;