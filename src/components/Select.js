
import React, { Component } from 'react';
import { Inputs } from 'adminlte-2-react';

const { Select2 } = Inputs

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <div style={{ paddingTop: '20px' }}>
                    <div style={{
                        display: 'inline-block',
                        paddingLeft: '20px',
                        fontSize: '20px',
                        width: '30%',
                    }}>{this.props.label}</div>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '68%', paddingTop: '15px' }}>
                        <Select2
                            name={this.props.name}
                            defaultValue={this.props.defaultValue}
                            value={this.props.value}
                            labelPosition='none'
                            style={{ width: '100%' }}
                            options={this.props.options}
                            onChange={this.props.onChange}
                            placeholder={this.props.placeholder} />
                    </div>
                </div>
                <br />
            </>
        );
    }
}
