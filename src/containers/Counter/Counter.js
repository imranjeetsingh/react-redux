import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as ActionCreator from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        console.log(this.props.storedResult)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Show Result</button>
                <ul>
                    {this.props.storedResult.map(data =>(
                        <li key={data.id}  onClick = {()=>this.props.onDeleteResult(data.id)}>{data.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
// console.log(this.props.ctr)
const mapStateToProps = state =>{
    return {
        ctr : state.ctr.counter,
        storedResult : state.res.results
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter : () => dispatch(ActionCreator.increment(1)),
        onDecrementCounter : () => dispatch(ActionCreator.decrement(1)),
        onAddCounter : () => dispatch(ActionCreator.add(5)),
        onSubCounter : () => dispatch(ActionCreator.subtract(5)),
        onStoreResult : (counter) => dispatch(ActionCreator.storeResult(counter)),
        onDeleteResult : (id) => dispatch(ActionCreator.deleteResult(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);