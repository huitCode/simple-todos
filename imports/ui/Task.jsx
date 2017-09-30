import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tasks } from '../api/tasks';

export default class Task extends Component {
    toogleChecked() {
        Tasks.update(this.props.task._id, {
            $set: { checked: !this.props.task.checked },
        });
    }

    deleteThisTask() {
        Tasks.remove(this.props.task._id);
    }

    render() {
        const taskClassName = this.props.task.checked ? 'checked' : '';

        return (
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteThisTask.bind(this)}>
                    &times;
                </button>

                <input
                    type="checkbox"
                    readOnly
                    checked={this.props.task.checked}
                    onClick={this.toogleChecked.bind(this)}
                />

                <span className="text">{this.props.task.text}</span>
            </li>
        );
    }
}

Task.PropTypes = {
    task: PropTypes.object.isRequired,
};