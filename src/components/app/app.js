import {React,Component} from 'react';
import Order from '../order/order'

import AddOrder from "../add-order/addOrder";

export default class App extends Component {

    curId  = 2;

    state  = {
        orders: [
            {   id:0,
                number:1,
                orderDate: "15.03.2021",
                company:'777',
                driverName: 'Nikolay',
                driverPhoneNumber:666666,
                comments: 'Мчит ',
                ati: null
            },
            {
                id:1,
                number:2,
                orderDate: "2.06.2021",
                company:'Lotos',
                driverName: 'Yura',
                driverPhoneNumber:99999,
                comments: 'Go-go-go',
                ati: null
            },
            {
                id:2,
                number:3,
                orderDate: '26.07.2021',
                company:"CrossRoads",
                driverName: "Zhora",
                driverPhoneNumber:222222,
                comments: "Быстрее ветра",
                ati: null
            }
        ]

    }

        onDelete = (id)=> {
        console.log('onDelete')
        this.setState(({orders}) => {
            const idx = orders.findIndex((el) => el.id === id);
            console.log(idx)
            const newOlders =[...orders.slice(0,idx),...orders.slice(idx+1)];
            return {
                orders : newOlders
            };
        });
        };

        onEdit = (id) => {
    console.log('onEdit!')


        }

        addOrder = (obj)=> {
            this.curId = this.curId+1

            const orderAdded = (obj) => {

                return {
                    id:this.curId+1,
                    number:this.state.orders.length+1,
                    orderDate: obj.orderDate,
                    company:obj.company,
                    driverName: obj.driverName,
                    driverPhoneNumber:obj.driverPhoneNumber,
                    comments: obj.comments,
                    ati: obj.ati,

                }
            }

            const orderPlus = orderAdded(obj)
            console.log('curId = ',orderPlus.id)
            this.setState(({orders}) => {
                const newOrders = [...orders, orderPlus]

                return {
                    orders: newOrders,

                }
            }
            )

        }

    render() {



        return (
           <div>
            <Order
                orders = {this.state.orders}
                onDelete = {this.onDelete}
                onEdit = {this.onEdit}

            />
            <AddOrder addOrder = {this.addOrder}/>
           </div>
        )
    }

}
