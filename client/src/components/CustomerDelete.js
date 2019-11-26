import React from 'react';

class CustomerDelete extends React.Component {


    deleteCustomer(id) {
        // /api/customers/7
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e => {this.deleteCustomer(this.props.id)})}>DELETE</button>
        )
    }
}

export default CustomerDelete;