import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import * as actions from '../../Redux/contacts/actions';
import { getFilter } from '../../Redux/contacts/selectors';
import styles from './Filter.module.css';

// const nameInputId = shortid.generate();

const Filter = ({ value, onChange }) => {
    return (
        <div className={styles.filterDiv}>
            <h3 className={styles.filterHeader}>Поиск контактов по имени</h3>
            <input
                type="text"
                placeholder="Search contact"
                name="filter"
                value={value}
                onChange={onChange}
                // id={nameInputId}
                className={styles.filterLabel}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        value: getFilter(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onChange: (event) => dispatch(actions.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
