import { h, Component } from 'preact';

export default class BaseComponent extends Component {
  setState(stateDiff, callback) {
    if (typeof callback === 'function') {
      super.setState(stateDiff, callback);
    } else {
      return new Promise(resolve => {
        super.setState(stateDiff, resolve);
      });
    }
  }
}
