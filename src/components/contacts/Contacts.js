import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { getContacts } from './../../actions/contactAction';


class Contacts extends Component {
  
  componentDidMount(){
    this.props.getContacts(); //put the contacts into the props
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  contacts : PropTypes.array.isRequired,
  getContacts : PropTypes.func.isRequired,
}
/**
 * inside connect function we put 2 things
 * 
 *1 -> anything that we want to map from the redux state to props in component
 *2 -> anything that we want to dispatch
 */

const mapStateToProps = (state) =>({
  contacts : state.contact.contacts //since we can access contactReducer states through the props(this.props.contacts)
});



//export default connect()(Contacts);
export default connect(
  mapStateToProps,
  {getContacts}
)(Contacts);