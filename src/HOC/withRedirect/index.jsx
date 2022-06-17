import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { setRedirect } from "redux/Common/actions";

const WithRedirect = (WrappedComponent) => {
  const Component = (props) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const redirectStateStore = useSelector(
      (state) => state.Common.redirectState
    );
    const redirectURLStore = useSelector((state) => state.Common.redirectURL);

    React.useEffect(() => {
      if (redirectStateStore) {
        navigate(redirectURLStore);
        setTimeout(() => {
          dispatch(setRedirect(false, ""));
        }, 500);
      }
    }, [redirectStateStore, redirectURLStore]);
    return <WrappedComponent {...props} />;
  };
  return Component;
};

export default WithRedirect;
