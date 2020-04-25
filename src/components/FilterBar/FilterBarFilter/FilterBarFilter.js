import React from "react";
import { cn } from "@bem-react/classname";
import { compose, composeU } from "@bem-react/core";

import "./FilterBarFilter.scss";

import { Button as ButtonPresenter } from "../../Button/Button";
import { withButtonTypeFilter } from "../../Button/_type/Button_type_filter/Button_type_filter";
import { withButtonThemeIcon } from "../../Button/_theme/Button_theme_icon/Button_theme_icon";
import { withButtonThemeText } from "../../Button/_theme/Button_theme_text/Button_theme_text";

const Button = compose(
  withButtonTypeFilter,
  composeU(withButtonThemeIcon, withButtonThemeText)
)(ButtonPresenter);

export default class FilterBarFilter extends React.Component {
  state = {
    showMenu: false,
  };
  handleClick = () => {
    this.setState((prevState) => {
      let prevChoice = prevState.showMenu;
      return {
        showMenu: !prevChoice,
      };
    });
  };
  render() {
    const FilterBar = cn("FilterBar");
    return (
      <div className={FilterBar({}, [this.props.className])}>
        <Button
          type="filter"
          title={this.props.title}
          onClick={() => this.handleClick}
        />
      </div>
    );
  }
}
