import React from "react";
export default class Error extends React.Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : jsonPageRes ? jsonPageRes.status : null;
    return { statusCode };
  }

  render() {
    return (
      <p>
        Congratulations. You found the 404-Page
      </p>
    );
  }
}
