import React from "react";
import { useSelector } from "react-redux";

import Loading from "components/common/Loading";

const WithRedirect = (WrappedComponent) => {
  const Component = (props) => {
    const isLoading = useSelector((state) => state.Common.loading);

    return (
      <React.Fragment>
        {isLoading && <Loading />}
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
  return Component;
};

export default WithRedirect;
