'use client'

import { Provider } from "react-redux";
import {store} from "../store/store";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;