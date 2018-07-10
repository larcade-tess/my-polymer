import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-header-panel/paper-header-panel.js';
/**
* @customElement
* @polymer
*/
class MyPolymerApp extends PolymerElement {

  static get template() {
    return html`

    <style>
    :host {
      display: block;
    }
    body {
      margin:0px;
    }
    .headertext {
      margin:0px;
    }
     .subheadtext {
      margin:0px;
      font-family: 'Nunito Sans', sans-serif;
    }
    .header{
      background-color:#0277bd;
      color:#fff;
      font-family: 'Pathway Gothic One', sans-serif;
      font-size:2em;
      padding-left:30px;
      width:100%;
      height:130px;
      margin:0;
      display:flex;
      align-items:center;
    }
     .banner {
      height:50px;
      width:100%;
      padding-left:30px;
      background-color:#ffc107;
      font-family: 'Nunito Sans', sans-serif;
      display:flex;
      align-items:center;
    }
    .contain {
      display:flex;
      flex-flow:row;
      justify-content:center;
    }
    paper-button {
      display:flex;
      flex-direction:column;
      margin:30px;
    }
    paper-button.fancy {
      background: #fff;
      color: black;
      border: 2px solid gray;
    }
    paper-button.fancy:hover {
      background: gray;
    }
    paper-button[disabled],
    paper-button[toggles][active] {
      background: black;
    }
    iron-icon.image {
      height:200px;
      width:200px;
      display:block;
    }
    .title {
      display:block;
    }
    </style>
<!--

<header>
  <div class='header'>
    <h1 class='headertext'>Rock Paper Scissors</h1>
  </div>
</header>

<div class='banner'>
  <h3 class='subheadtext'>Choose your weapon</h3>
</div>


  <paper-button raised class='fancy' on-click="buttonclick">
    <iron-icon src="images/rock.jpg" class='image'></iron-icon>
    <h3 class='title'>Rock</h3>
  </paper-button>
  <paper-button raised class='fancy'  on-click="buttonclick">
    <iron-icon src="images/paper.jpg" class='image'></iron-icon>
    <h3 class='title'>Paper</h3>
  </paper-button>
-->
<div class='contain'>
  <paper-button raised class='fancy' choice='s' on-click="buttonclick">
    <iron-icon src="images/scissors.jpg" class='image'></iron-icon>
    <h3 class='title'>Scissors</h3>
  </paper-button>
</div>

<footer>
  <div class='banner'>
    <p>&copy; Copyright Tess Larcade 2018 | Made for WDD 499 | Portfolio</p>
  </div>
</footer>

    `;

   }

buttonclick(e) {
    var x = e.target.getAttribute('choice');
    console.log(e.target.getAttribute('choice'));

    //
    // if (x == 'r'){
    //   console.log("rock")
    // }
    // else if (x == 'p'){
    //   console.log("paper")
    // }
    // else if (x == 's'){
    //   console.log("scissors")
    // }
    // else {
    //   console.log('error');
    // }
  }

  // static get properties() {
  //   return {
  //     prop1: {
  //       type: String,
  //       value: 'Rock Paper Scissors'
  //     }
  //   };
  // }


}

window.customElements.define('my-polymer-app', MyPolymerApp);
