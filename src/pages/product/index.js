import React, { Component} from 'react';
import api from '../../service/api';
import { Link } from 'react-router-dom'
import './styles.css'

export default class Product extends Component {

    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`product/${id}`);

        this.setState({ product: response.data});
    }

    render(){
        const { product } = this.state;   
        
        return (
            <div className="product-info">
                <Link to="/"> Voltar</Link>
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <a href={product.url}>{product.url}</a>
            </div>
        );
    };
}