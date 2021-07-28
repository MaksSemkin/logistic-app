import {React,Component} from 'react';
import './order.css'
import AddOrder from "../add-order/addOrder";

export default class Order extends Component {



    render() {
        const {onDelete,onEdit,addOrder} = this.props


        const {orders} = this.props;
        const el = orders.map((elem) => {
            const {id,number,orderDate,company,driverName,driverPhoneNumber,comments,ati} = elem
            return(

                <tr key={id} >
                    <td >{number}</td>
                    <td >{orderDate}</td>
                    <td>{company}</td>
                    <td>{driverName}</td>
                    <td>{driverPhoneNumber}</td>
                    <td>{comments}</td>
                    <td>{ati}</td>
                    <td><button onClick={()=>onDelete(id)} > Delete</button>
                        <button onClick={()=>onEdit(id)}> Edit</button>
                    </td>
                </tr>
            )
        })
        return (<table><tbody>{el}</tbody></table>
       )


}}
