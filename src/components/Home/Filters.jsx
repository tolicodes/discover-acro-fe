import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Slider from 'rc-slider';
import Select from 'react-select';
import Checkbox from '@material-ui/core/Checkbox'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';

import "react-datepicker/dist/react-datepicker.css";
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const FiltersContainer = styled.div`
    width: 300px;
    border: 1px solid #979797;
    background-color: #FFFFFF;
    padding: 20px;
`;

const Field = styled.div`
    margin-bottom: 50px;
`;

const FieldTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const To = styled.span`
    margin: 0 3px;
`;

const DatePickerButton = styled.input`
    width: 115px;
    height: 30px;
    border: 1px solid #4182EC;
    border-radius: 4px;
    background-color: #4182EC;
    padding: 0 10px;
    color: white;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`;

const rangeTrackStyle = [{
    backgroundColor: '#4182EC'
}];

const rangeHandleStyle = {
    borderColor: '#4182EC'
};

const Input = styled.input`
    border: 1px solid #4182EC;
    width: calc(100% - 20px);
    border-radius: 4px;
    height: 30px;
    padding: 0 10px;
`;

const CheckboxField = styled(FormControlLabel)`
    width: 100%;
`;

const EVENT_TYPES = [
    'Festival',
    'Retreat',
    'Workshop',
    'Immersion',
    'Class'
];

export default class Filters extends Component {
    state = {
        startDate: moment(),
        endDate: moment().add(2, 'week')
    }

    constructor() {
        super();
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
    }

    onChangeStartDate(startDate) {
        this.setState({
            startDate 
        });
    }

    onChangeEndDate(endDate) {
        this.setState({
            endDate 
        });
    }

    render() {
        return (
            <FiltersContainer>
                <Field>
                    <FieldTitle>Date</FieldTitle>
                    <DatePicker
                        selected={this.state.startDate}
                        customInput={<DatePickerButton />}
                        onSelect={this.onChangeStartDate}
                    />

                    <To>to</To>

                    <DatePicker
                        selected={this.state.endDate}
                        customInput={<DatePickerButton />}
                        onSelect={this.onChangeEndDate}
                    />
                </Field>

                <Field>
                    <FieldTitle># of Days</FieldTitle>

                    <Range
                        min={1}
                        max={15}
                        defaultValue={[1, 15]}
                        handleStyle={rangeHandleStyle}
                        trackStyle={rangeTrackStyle}
                    />
                </Field>
                
                <Field>
                    <FieldTitle>Cities</FieldTitle>

                    <Select
                        onChange={this.handleChangeCity}
                        isMulti={true}
                        isSearchable={true}
                        options={[{
                            value: 'NYC',
                            label: 'NYC',
                        }, {
                            value: 'SF',
                            label: 'SF',
                        }]}
                    />
                </Field>

                <Field>
                    <FieldTitle>Teachers</FieldTitle>

                    <Select
                        onChange={this.handleChangeTeachers}
                        isMulti={true}
                        isSearchable={true}
                        options={[{
                            label: 'Mendel Romanenko',
                            value: 'Mendel Romanenko',
                        }, {
                            label: 'Bassam Kubba',
                            value: 'Bassam Kubba',
                        }]}
                    />
                </Field>

                <Field>
                    <FieldTitle>Cost</FieldTitle>

                    <Range
                        min={10}
                        max={200}
                        defaultValue={[10, 200]}
                        handleStyle={rangeHandleStyle}
                        trackStyle={rangeTrackStyle}
                    />
                </Field>

                <Field>
                    <FieldTitle>Types</FieldTitle>

                    <div>
                        {
                            EVENT_TYPES.map(event => (
                                <CheckboxField
                                    control={<Checkbox
                                        value={event}
                                    />}
                                    label={event}
                                />
                            ))
                        }
                    </div>
                </Field>
            </FiltersContainer>
        );
    }
}
