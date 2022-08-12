import React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { fetchCart, exchangeToken, logout } from './store';
import { Link } from 'react-router-dom';

class App extends React.Component{

    componentDidMount(){
        this.props.exchangeToken();
    }

    componentDidUpdate(prevProps){
        if(!prevProps.auth.id && this.props.auth.id){
            this.props.fetchCart();
        }
    }
    render(){
        const { auth, logout, cart } = this.props;
        return (
            <main>
                <h1>Grace Shopper</h1>
                {
                    auth.id ? <button onClick={logout}>Logout {auth.username}</button> : <SignIn/>
                }
                {
                    auth.id ? <Link to='/cart'>Cart ({cart.lineItems.length})</Link> : null
                }
            </main>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}


const mapDispatchToProps = (dispatch) =>{
    return {
        exchangeToken: () => dispatch(exchangeToken()),
        logout: () => dispatch(logout()),
        fetchCart: () =>dispatch(fetchCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);