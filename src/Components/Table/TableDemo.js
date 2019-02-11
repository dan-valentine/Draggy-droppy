import React, { Component } from 'react';
import { Table, Tr, Td } from './DragableTable';
import './TableDemo.css'

export default class TableDemo extends Component {
    render() {
        return (
            <div className="Table-demo-container">
                <Table>
                    <Tr>
                        <Td  freeze='left'><i>Collegue</i></Td>
                        <Td><i>Rating</i></Td>
                        <Td><i>Coolnes</i></Td>
                        <Td><i>Skill</i></Td>
                    </Tr>
                    <Tr>
                        <Td>It</Td>
                        <Td>IS</Td>
                        <Td>NOT</Td>
                        <Td>OK</Td>
                    </Tr>
                    <Tr>
                        <Td>TO</Td>
                        <Td>RATE</Td>
                        <Td>PEOPLE</Td>
                        <Td>.</Td>
                    </Tr>
                    <Tr>
                        <Td>Dan</Td>
                        <Td>0</Td>
                        <Td>loser</Td>
                        <Td>none</Td>
                    </Tr>
                </Table>
            </div>
        );
    }
}