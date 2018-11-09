import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Filters = styled.div`
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

const DatePickerButton = styled.button`
    height: 30px;
    width: 116px;
    border: 1px solid #4182EC;
    border-radius: 4px;
    background-color: #4182EC;
    padding: 0 10px;
`;

export default () => (
    <Filters>
        <Field>
            <FieldTitle>Date</FieldTitle>
            <DatePicker
                customInput={<DatePickerButton/>}
            />
        </Field>
    </Filters>
);
