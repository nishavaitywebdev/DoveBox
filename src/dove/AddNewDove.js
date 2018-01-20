import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewDove extends Component{
    createDove = () => {
        // get values from the form and create a dove object
        const dove = {
            active: this.refs.active.checked,
            color: this.refs.color.value,
            images_collected: this.refs.imagesCollected.value,
            last_command: this.refs.lastCommand.value,
            deorbit_dt: this.refs.deOrbit.value,
        };
        this.props.onUserInput(dove);
        // Reset the form after dove is created
        this.refs.imagesCollected.value = '';
        this.refs.lastCommand.value = '';
        this.refs.color.value = '';
        this.refs.deOrbit.value = '';
        this.refs.active.checked = false;
    }

    render(){
        return(
            <div>
                <div>
                    <label>Create Dove</label>
                </div>
                <div className='form-group col-sm-12'>
                    <div className='col-sm-2'>
                        <input type='text' 
                        className='form-control' 
                        ref='lastCommand' 
                        placeholder='Enter Last command'/>
                    </div>
                    <div className='col-sm-2'>
                        <input type='number' 
                        className='form-control' 
                        ref='imagesCollected' 
                        placeholder='Images Collected' />
                    </div>
                    <div className='col-sm-2'>
                        <input type='color' 
                        className='form-control' 
                        ref='color' />
                    </div>
                    <div className='col-sm-2'>
                        <input type='checkbox'  
                        ref='active' value='active' /> Active
                    </div>
                    <div className='col-sm-2'>
                        <input type='datetime' 
                        className='form-control' 
                        ref='deOrbit' 
                        placeholder='Enter Datetime'/>
                    </div>
                    <div className='col-sm-2'>
                        <a className='btn btn-primary btn-block'
                           onClick={this.createDove}>Add Dove</a>
                   </div>
                </div>
            </div>
        );
    }
}
AddNewDove.propTypes = {
    onUserInput: PropTypes.func,
};
export default AddNewDove;
