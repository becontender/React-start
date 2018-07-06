import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

class App extends Component {
  render() {
    return (
    <div className="wrapper">
        <SayFullName name="Ivan" surname="Ivanov" link="vk.com" />
        <SayFullName name="Petr" surname="Petrov" link="vk.com" />
        <SayFullName name="Sidor" surname="Sidorov" link="vk.com" />
    </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1>Мое имя {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link}>Ссылка на мой профиль</a>
    </div>
  )
}

export default App;
