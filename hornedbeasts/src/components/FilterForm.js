import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

export class FilterForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      hornsNumber: 'All'
    };
  }

    hornSelect = (event) => {
      event.preventDefault();
      this.props.selectedHorn(event.target.value);
    }

    handlingSubmit = (event) => {
      event.preventDefault();
      this.props.filter();
    }

    render() {
      return (
        <div>
          <Form id='selectHornsForm'>
            <Form.Label>Number Of Horns</Form.Label>
            <Form.Control
              as='select'
              onChange = {this.hornSelect}
              style={{ width: '100%', textAlignLast: 'center', fontSize:'20px', borderBlockWidth:'3px', marginBottom: '5px'}}>
              <option>Choose From Here!</option>
              <option value={1}>One Horn</option>
              <option value={2}>Two Horns</option>
              <option value={3}>Three Horns</option>
            </Form.Control>
            <button onClick={this.handlingSubmit}>Press for results</button>
          </Form>
        </div>
      );
    }
}

export default FilterForm;
