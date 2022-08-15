import React, { Component } from "react";

class Contact extends Component {
    constructor(props) {
       super(props);
       this.state = {
          search: '',
          checkedMale: true,
          checkedFemale: true,
          checkedNotSpecified: true
       }
    }
 
    handleSearchChange = (e) => {
       this.setState({ search: e.target.value })
    }
 
    handleCheckboxMale = (e) => {
       this.setState({ checkedMale: e.target.checked })
    }
 
    handleCheckboxFemale = (e) => {
       this.setState({ checkedFemale: e.target.checked })
    }
 
    handleCheckedNotSpecified = (e) => {
       this.setState({ checkedNotSpecified: e.target.checked })
    }
 
    filter = () => {
       let filterContact = [];
       this.props.contact.filter(e => {
 
          if (e.gender === 'female' && this.state.checkedFemale == true && Object.values(e).join().toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) {
             filterContact.push(e)
          } else if (e.gender === undefined && this.state.checkedNotSpecified == true && Object.values(e).join().toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) {
             filterContact.push(e)
          } else if (e.gender === 'male' && this.state.checkedMale == true && Object.values(e).join().toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) {
             filterContact.push(e);
          }
       })
 
       return filterContact;
    }
 
    render() {
 
       return (
          <div className='contact__wrapper'>
             <input className='contacts__search'
                placeholder='Search contact'
                value={this.state.search}
                onChange={this.handleSearchChange.bind(this)} >
             </input>
             <div className='checkbox'>
                <div>
                   <label htmlFor='male'> Чоловіки </label>
                   <input
                      id='male' type={'checkbox'}
                      checked={this.state.checkedMale}
                      onChange={this.handleCheckboxMale.bind(this)}>
                   </input>
                </div>
                <div>
                   <label htmlFor='female'> Жінки </label>
                   <input
                      id='female' type={'checkbox'}
                      checked={this.state.checkedFemale}
                      onChange={this.handleCheckboxFemale.bind(this)} >
                   </input>
                </div>
                <div>
                   <label htmlFor='not__specified'> Не вказано </label>
                   <input
                      id='not__specified'
                      type={'checkbox'}
                      checked={this.state.checkedNotSpecified}
                      onChange={this.handleCheckedNotSpecified.bind(this)} >
                   </input>
                </div>
             </div>
             {
                this.filter().map((el) =>
                   <div className='contact__wrapper-card'>
                      <p className='card__wrapper'>
                         {el.gender == 'male' ? <img className='card__icon' src='https://cdn-icons-png.flaticon.com/512/4128/4128176.png' /> :
                            el.gender == 'female' ? <img className='card__icon' src='https://cdn-icons-png.flaticon.com/512/3135/3135789.png' /> :
                               el.firstName[0]}
                      </p>
                      <div className='card__info'>
                         <p className='card__info-name'>
                            {el.firstName} {el.lastName}
                         </p>
                         <p className='card__info-phone'>
                            {el.phone}
                         </p>
                      </div>
                   </div>
                )
             }
          </div>
 
 
       )
    }
 }
 
 export default Contact;