import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from 'react-select';
import moment from 'moment';

import { H1, H2, H3 } from '../../common/Typography';

const ScheduleContainer = styled.div`
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

const ScheduleContent = styled.div``;

const Day = styled.div``;

const Date = styled(H2)`
    margin-top: 25px;
`;

const Session = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const SessionInfo = styled.div`
    width: 170px;
    height: 160px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SessionName = styled(H2)`
    margin-bottom: 30px;
`;

const SessionTime = styled(H3)`
    font-weight: normal;
`;

const Classes = styled.div`
    display: flex;
    width: calc(100% - 170px);

    overflow-x: auto;
    flex-wrap: nowrap;
`;

const Class = styled.div`
    display: flex;
    flex: 0 0 200px;
    height: 160px;
    margin-right: 20px;

    position: relative;
`;

const ClassImg = styled.img`
    width: 100%;
    height: 100%;
`;

const AddButton = styled.button`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: #BDD358;
    font-size: 14px;
    color: white;
    font-weight: bold;

    position: absolute;
    top: 5px;
    left: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const AddButtonPlus = styled.span`
    margin-top: -3px;
`;

const DIFFICULTIES = {
    Beginner: '#F1905C',
    Intermediate: '#F15806', 
    Advanced: '#DE5207',
};

const Difficulty = styled.div`
    height: 20px;
    width: 80px;
    border-radius: 10px;
    background-color: ${ ({ difficulty }) => DIFFICULTIES[difficulty]};

    position: absolute;
    right: 5px;
    top: 5px;

    font-size: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ClassBottom = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    
    position: absolute;
    bottom: 0;
    left: 0;

    background-color: rgba(216,216,216,0.75);
`;

const ClassName = styled(H3)``;

const Teachers = styled.div`
    font-size: 14px;
    text-align: center;
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

export default class Schedule extends Component {
    constructor() {
        super();

        this.state = {
            schedule: null,
        }
    }
    
    async componentDidMount() {
        this.setState({
            schedule: await (await fetch('/events/ny-acro-fest/schedule.json')).json()
        });
    }

    render() {
        const { schedule } = this.state;

        if (!schedule) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <ScheduleContainer>
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

                <ScheduleContent>
                    {
                        schedule.map(({
                            date,
                            sessions,
                        }) => (
                                <Day>
                                    <Date>
                                        {moment(date).format('LLLL')}
                                    </Date>

                                    {
                                        sessions.map(({
                                            name,
                                            timeStart,
                                            timeEnd,
                                            classes
                                        }) => (
                                                <Session>
                                                    <SessionInfo>
                                                        <SessionName>
                                                            {name}
                                                        </SessionName>

                                                        <SessionTime>
                                                            <div>{timeStart}</div>
                                                            <div>to</div>
                                                            <div>{timeEnd}</div>
                                                        </SessionTime>
                                                    </SessionInfo>

                                                    <Classes>
                                                        {
                                                            classes.map(({
                                                                name,
                                                                teachers,
                                                                levels,
                                                                style
                                                            }) => (
                                                                    <Class>
                                                                        <ClassImg
                                                                            src={`/events/ny-acro-fest/img/class_${Math.floor(Math.random() * Math.floor(7) + 1)}.jpg`}
                                                                        />

                                                                        <AddButton>
                                                                            <AddButtonPlus>+</AddButtonPlus>
                                                                        </AddButton>

                                                                        <Difficulty
                                                                            difficulty={levels[0]}
                                                                        >
                                                                            {levels[0]}
                                                                        </Difficulty>

                                                                        <ClassBottom>
                                                                            <ClassName>
                                                                                {name}
                                                                            </ClassName>

                                                                            <Teachers>
                                                                                {teachers.join(' & ')}
                                                                            </Teachers>
                                                                        </ClassBottom>
                                                                    </Class>
                                                                ))
                                                        }
                                                    </Classes>
                                                </Session>
                                            ))
                                    }
                                </Day>

                            ))
                    }
                </ScheduleContent>
            </ScheduleContainer>
        );
    }
}
