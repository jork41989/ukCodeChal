import React from "react";
import * as ReactDOM from 'react-dom';
import IpCheck from './ipFinder';


class IPFinder extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);


    ReactDOM.render(<div>Hello</div>, mountPoint);
  }
}
customElements.define('ip-finder', IPFinder);