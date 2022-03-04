import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todoapp.js';
import Timer from './timer.js';
import Comment from './comment.js';
import Message from './message.js';
import ExampleReactBoostrap from './exampleractboostrap.js';
import ExampleNavegacion from './examplenavegacion.js';
import StateHook from './state_hook.js';
import FunctionHook from './function_hook.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const comment = {
  text: 'Mi primer comentario de React',
  author: {
    name: 'Random Guy',
    avatarUrl: 'https://i.imgur.com/o9fpo46.png'
  }
};

function Inicio() {
  return (
    <div>
      <h1>Selecciona el componente a usar</h1>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/reactBootstrap">ReactBootstrap</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/navegacion">Navegacion</Link></li>
        <li><Link to="/temporizador">Temporizador</Link></li>
        <li><Link to="/saludo">Saludo</Link></li>
        <li><Link to="/comentario">Comentario</Link></li>
        <li><Link to="/stateHook">Hook de estado</Link></li>
        <li><Link to="/functionHook">Hook de funcion</Link></li>
      </ul>
      <hr/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reactBootstrap" element={<ExampleReactBoostrap />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/navegacion/*" element={<ExampleNavegacion />} />
        <Route path="/temporizador" element={<Timer />} />
        <Route path="/saludo" element={<Message name="Phipe" estadoAnimo="Pensativo" />} />
        <Route path="/comentario" element={<Comment {...comment} />} />
        <Route path="/stateHook" element={<StateHook />} />
        <Route path="/functionHook" element={<FunctionHook />} />
      </Routes>
    </div>
  </Router>,
  document.getElementById('root')
);