import React, { PureComponent, Component, Fragment } from 'react';

export class Table extends PureComponent {
    state = {
        currentSpot: null,
        displayChildren: []
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.children === prevState.children) {
            return null;
        }
        return {
            displayChildren: nextProps.children.slice(),

            children: nextProps.children,

        }
    }

    dragcurrentSpot = (i) => e => {
        console.log('dragcurrentSpot: ', i);
        // here we are keeping track of the index of the dragged item
        // instead of using the dataTransfer object, we are using state
        this.setState({ currentSpot: i });
    }

    drop = (i) => e => {
        console.log('drop i: ', i);
        // make copy of state so we don't mutate it directly
        let childrenCopy = this.state.displayChildren.slice();
        // remove dragged item from the array and catch in variable
        let moving = childrenCopy.splice(this.state.currentSpot, 1)[0];
        // add the item back into the array at the position it was dropped
        childrenCopy.splice(i, 0, moving);
        // setState with the mutated copy of state and clear out currentSpot
        this.setState({ displayChildren: childrenCopy, currentSpot: null });
    }

    dragOver = (i) => e => {
        console.log('i', i)
        let childrenCopy = this.state.displayChildren.slice();
        // remove dragged item from the array and catch in variable
        let moving = childrenCopy.splice(this.state.currentSpot, 1)[0];
        // add the item back into the array at the position it was dropped
        childrenCopy.splice(i, 0, moving);
        // setState with the mutated copy of state
        this.setState({ displayChildren: childrenCopy, currentSpot: i });
        e.preventDefault();
    }



    render() {

        const rows = this.state.displayChildren.map((e, i) => {
            if (i === 0) {
                return <tr
                    className="DragableTableRow">{e}</tr>
            }
            return (
                <tr
                    className="DragableTableRow"
                    draggable
                    onDragStart={this.dragcurrentSpot(i)}
                    onDragOver={this.dragOver(i)}
                    onDrop={this.drop(i)}>
                    {e}
                </tr>
            )
        })
        return (
            <table className="DragableTable">
                {rows}
            </table>
        );
    }
}

export class Tr extends Component {


    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}

export class Td extends Component {
    render() {
        return (
            <td className="DragableTableData">
                {this.props.children}
            </td>
        );
    }
}
