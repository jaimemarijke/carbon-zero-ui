import React from 'react';
import RadioGroup from 'react-radio';
import styles from './Calculator.scss';

const carTypes = [
    {
        value: '100',
        label: 'Electric (100mpg)',
    },
    {
        value: '50',
        label: 'Hybrid (50mpg)',
    },
    {
        value: '30',
        label: 'Sedan (30mpg)',
    },
    {
        value: '20',
        label: 'Gas guzzler (20mpg)',
    },
];

function onChange(value, event){
    console.log('checked ', value)
}

const Calculator = () => (
    <form className={styles.form}>
        <label className={styles.questionLabel}>
            Miles driven
            <input type="text" name="mileage" />
        </label>
        <label className={styles.questionLabel}>
            Mileage
            <RadioGroup
                name="mileage"
                defaultValue={'30'}
                items={carTypes}
                onChange={onChange}
            />
        </label>
      <input type="submit" value="Submit" />
    </form>
);

export default Calculator;
