import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
class Sticky extends Component {
  static baseClass = 'tk-sticky'

  state = {
    height: 0,
    width: 0,
    stuckBottom: false,
    stuckLeft: false,
    stuckRight: false,
    stuckTop: false,
  }

  componentDidMount() {
    this.addEvents();
    this.handleScroll();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scrollTarget !== this.props.scrollTarget) {
      this.removeEvents();
      this.addEvents();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  frameId = 0

  StickyDiv = React.createRef();

  handleScroll = () => {
    const { sides } = this.props;
    const StickyDiv = this.StickyDiv.current || null;
    const scrollTarget = this.props.scrollTarget || window;

    this.frameId = 0;

    if (!StickyDiv) {
      return;
    }

    const scrollRect = scrollTarget.getBoundingClientRect ? scrollTarget.getBoundingClientRect() : { // scrollTarget is the window
      height: scrollTarget.innerHeight,
      width: scrollTarget.innerWidth,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      x: scrollTarget.scrollX,
      y: scrollTarget.scrollY,
    };

    let StickyRect = StickyDiv.getBoundingClientRect();

    if (!this.state.height || !this.state.width) {
      this.setState({
        height: StickyRect.height,
        width: StickyRect.height,
      });
    }

    StickyRect = { // Apparently you can't spread the results of a bounding client rectangle
      height: this.state.height || StickyRect.height,
      width: this.state.width || StickyRect.width,
      x: StickyRect.x,
      y: StickyRect.y,
    };

    if (typeof sides.bottom === 'number') {
      const stuckBottom = StickyRect.y + StickyRect.height > (scrollRect.height + scrollRect.top) - sides.bottom;
      this.setState({ stuckBottom });
    }

    if (typeof sides.top === 'number') {
      const stuckTop = StickyRect.y < scrollRect.top + sides.top;
      this.setState({ stuckTop });
    }

    if (typeof sides.left === 'number') {
      const stuckLeft = StickyRect.x < scrollRect.left + sides.left;
      this.setState({ stuckLeft });
    }

    if (typeof sides.right === 'number') {
      const stuckRight = StickyRect.x + StickyRect.width > (scrollRect.width + scrollRect.left) - sides.right;
      this.setState({ stuckRight });
    }
  }

  debouncedScroll = () => {
    if (!this.frameId) {
      const frameId = requestAnimationFrame(this.handleScroll);
      this.frameId = frameId;
    }
  }

  addEvents() {
    const scrollTarget = this.props.scrollTarget || window;

    if (scrollTarget && this.StickyDiv.current) {
      scrollTarget.addEventListener('scroll', this.debouncedScroll);
    }
  }

  removeEvents() {
    const scrollTarget = this.props.scrollTarget || window;

    if (scrollTarget) {
      scrollTarget.removeEventListener('scroll', this.debouncedScroll);
    }

    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
  }

  render() {
    const { children } = this.props;
    const { stuckBottom, stuckLeft, stuckRight, stuckTop } = this.state;

    const StickyModifiers = [];

    if (stuckBottom) {
      StickyModifiers.push('stuck-bottom');
    }

    if (stuckLeft) {
      StickyModifiers.push('stuck-left');
    }

    if (stuckRight) {
      StickyModifiers.push('stuck-right');
    }

    if (stuckTop) {
      StickyModifiers.push('stuck-top');
    }

    const childrenWithStuckProps = React.Children.map(children, (child) => {
      const childModifiers = (child.props && child.props.modifiers) || [];
      return React.cloneElement(child, { modifiers: [...childModifiers, ...StickyModifiers] });
    });

    return (
      <div
        className={Sticky.baseClass}
        ref={this.StickyDiv}
      >
        {childrenWithStuckProps}
      </div>
    );
  }
}

Sticky.propTypes = {
  /** Pass in a React component, and it will receive `stuckBottom`, `stuckLeft`, `stuckRight`, and/or `stuckTop` modifiers */
  children: Header,
  /** If you have an internally scrolling component, pass its ref callback to watch for scroll events */
  scrollTarget: Header,
  /** These offsets determine how far from the edge of the page an element must be to count as 'stuck' */
  sides: PropTypes.shape({
    bottom: 100,
    left: 100,
    right: 100,
    top: 100,
  }),
};

Sticky.defaultProps = {
  scrollTarget: null,
  sides: {
    top: 0,
  },
};

export default Sticky;
