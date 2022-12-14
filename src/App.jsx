import "./App.css";
import { Navbar } from "./Nav";
// import { Alltodo } from './AllTodo';
import Todo from "./Todo";
// import { AddTodo } from "./AddTodo";
// import { FavTodo } from "./FavTodo";

function App() {
  return (
    <div>
      <Navbar />
         <div className="Todo-page">
        <Todo text=" React Learning" />
        <Todo text="React Development" />
        <Todo text="React Deployment to the web" />
        <Todo text="Learn Node JS" />
        <Todo text="Learn koa js" />
        <Todo text="Learn Pug js" />
        <Todo text="Learn Express JS Framework" />
        <Todo text="Learn Mongo DB" />
        <Todo text="Learn Mongoose" /> <Todo text="Learn Docker" />{" "}
        <Todo text="Learn Graph QL" /> <Todo text="Learn Typescript" />{" "}
        <Todo text="Be a Full Stack Web Developer " />{" "}
        <Todo text="Learn Blockchain Development " />{" "}
        <Todo text="All About Web 3" /> <Todo text="Many  Of Ether js" />{" "}
        <Todo text="About Oracle" /> <Todo text="About Etherscan" />{" "}
        <Todo text="Solidity Pragma" />{" "}
        <Todo text="Smart Contracts deployment" /> <Todo text="Molis backend" />{" "}
        <Todo text="Reentrance In Blockchain" /> <Todo text="Web 3 Security " />
        <Todo text="Full Stack Blockchain Development" />
  </div>
{/* <AddTodo/> 
<FavTodo/> */}
    </div>
  );
}

export default App;