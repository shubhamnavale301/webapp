import React from 'react';
import Counter from '../ProductCatalog/Counter';
class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = { quantity: props.quantity };
        this.handler = this.handler.bind(this);
    }

    handler(data) {
        this.setState({ quantity: data });
    }

    render() {
        return (
            <div>

                <hr />
                <p>Title:{this.props.title}</p>
                <img src={this.props.imageurl} />
                <p>Quantity:{this.state.quantity}</p>
                <p> Unit price:{this.props.unitprice}</p>
                <p>Amount:{this.props.unitprice * this.state.quantity}</p>
                <Counter count={this.state.quantity}
                    handler={this.handler}>
                </Counter>

                <br />
                <button>Remove</button>
            </div>
        );
    }
}
export default Item;