import React from "react";
import "./Column.css";

export const Column = {
  render() {
    const { title, desc, bg, img } = this.props;
    return (
      <div
        className="columnGrid"
        style={{
          backgroundColor: bg,
          backgroundImage: img
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
            : "",
        }}
      >
        <div className="columnItem">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    );
  },
};

export default Column;
