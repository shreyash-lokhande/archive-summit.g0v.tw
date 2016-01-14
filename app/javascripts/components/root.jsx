'use strict';

import React, { Component } from "react";
import Header from "./header";
import Intro from "./intro";
import Footer from "./footer";

class Root extends Component {
  render() {
    return <main>
      <Header root={this} />
      <Intro />
      <Footer />
    </main>;
  }
};

export default Root;