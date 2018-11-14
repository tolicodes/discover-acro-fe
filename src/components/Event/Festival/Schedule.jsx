import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from 'react-select';

import { H1 } from '../../common/Typography';

const Schedule = styled.div`
    margin-top: 400px;
`;

const ScheduleFilters = styled.div`
	height: 48px;
	border: 1px solid #4182EC;
    background-color: #FFFFFF;
    
    display: flex;
    padding: 0 20px;
`;

const Filter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const FilterLabel = styled.span`
    font-weight: bold;
    margin-right: 20px;
`;

const TeachersSelect = styled(Select)`
    min-width: 200px;
`;

const LEVELS = [
    'Beginner',
    'Intermediate',
    'Advanced',
];

const TEACHERS = [
    'Mendel Romanenko',
    'Bassam Kubba',
];

export default () => (
    <Schedule>
        <H1>Schedule</H1>

        <ScheduleFilters>
            <Filter>
                <FilterLabel>
                    Levels
                </FilterLabel>

                {
                    LEVELS.map(level => (
                        <FormControlLabel
                            control={<Checkbox
                                value={level}
                            />}
                            label={level}
                        />
                    ))
                }
            </Filter>

            <Filter>
                <FilterLabel>
                    Teachers
                </FilterLabel>

                <TeachersSelect
                    isMulti={true}
                    isSearchable={true}
                    options={TEACHERS.map(option => ({
                        value: option,
                        label: option,
                    }))}
                />
            </Filter>
        </ScheduleFilters>
    </Schedule>
)