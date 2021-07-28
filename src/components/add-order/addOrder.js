import {React,Component} from 'react';
import './addOrder.css'


export default class AddOrder extends Component{

    state = {
           orderDate: '',
            company: '',
            driverName: '',
            driverPhoneNumber: '',
            comments: '',
            ati: ''


    }
    onOrderDateChange = (e)=> {
        this.setState({orderDate: e.target.value})

        console.log(this.state.orderDate)
    }
    onCompanyChange = (e)=> {
        this.setState({company: e.target.value})
        console.log(this.state)
    }
    onDriverPhoneNumberChange = (e)=> {
        this.setState({driverPhoneNumber: e.target.value})
        console.log(this.state)
    }
    onDriverNameChange = (e)=> {
        this.setState({driverName: e.target.value})
        console.log(this.state)
    }
    onCommentsChange = (e)=> {
        this.setState({comments: e.target.value})
        console.log(this.state)
    }

    onAtiChange = (e)=> {
        this.setState({ati: e.target.value})
        console.log(this.state)
    }

    onSubmit = (e)=> {
        e.preventDefault();
        this.props.addOrder(this.state);
        this.setState({ orderDate: '',
            company: '',
            driverName: '',
            driverPhoneNumber: '',
            comments: '',
            ati: ''})
    }




    render() {
        const {addOrder} = this.props;

        return (
            <form className="order-add-form"
                  onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="form-control"
                       onChange={this.onOrderDateChange}
                       placeholder="Введите дату заявки"
                       value={this.state.orderDate}
                />
                <input type="text"
                       className="form-control"
                       onChange={this.onCompanyChange}
                       placeholder="Введите название компании"
                       value={this.state.company}
                />
                <input type="text"
                       className="form-control"
                       onChange={this.onDriverNameChange}
                       placeholder="Введите имя водителя"
                       value={this.state.driverName}
                />
                <input type="text"
                       className="form-control"
                       onChange={this.onDriverPhoneNumberChange}
                       placeholder="Введите номер водителя"
                       value={this.state.driverPhoneNumber}
                />
                <input type="text"
                       className="form-control"
                       onChange={this.onCommentsChange}
                       placeholder="Введите комментарий"
                       value={this.state.comments}
                />
                <input type="text"
                       className="form-control"
                       onChange={this.onAtiChange}
                       placeholder="Введите номер ATI"
                       value={this.state.ati}
                />
                <button  className="btn-add"  >
                    Add Order
                </button>

            </form>
        )
    }
}

