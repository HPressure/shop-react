import React from "react";
import { cn } from "@bem-react/classname";

import "./FilterBar.scss";

export default class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.bar = React.createRef();
    this.state = {
      stuck: false,
      stuckValue: "",
    };
  }
  handleScroll = () => {
    if (this.bar.current) {
      // console.log(this.bar.current.getBoundingClientRect().top);
      let offset = this.bar.current.getBoundingClientRect().top;
      this.setState({
        stuck: offset <= 0 && true,
        stuckValue: this.state.stuck && window.pageYOffset,
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    console.log(this.state.stuckValue);

    const FilterBar = cn("FilterBar");
    return (
      <div className={FilterBar({ fixed: this.state.stuck })} ref={this.bar}>
        asdfdsf
      </div>
    );
  }
}
