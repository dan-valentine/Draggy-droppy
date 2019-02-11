import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Basic from './Components/Basic/Basic';
import Todo from './Components/Todo/Todo';
import Sort from './Components/Sort/Sort';
import Draggable from './Components/Draggable/Draggable';
import TableDemo from './Components/Table/TableDemo';

export default (
  <Switch>
    <Route path="/" exact component={Basic} />
    <Route path="/todo" exact component={Todo} />
    <Route path="/sort" exact component={Sort} />
    <Route path="/table" exact component={TableDemo} />
    <Route path="/draggable" exact component={Draggable} />
  </Switch>
);
