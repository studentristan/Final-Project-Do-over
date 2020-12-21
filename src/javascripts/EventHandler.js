/**
 * Comment header block
 */

export default class EventHandler {  //everything goes in here
//Variables. KEY: pl = platinum; g = gold; s = silver; c = copper; d = deposit; w = withdraw;
#pl;
#g;
#s;
#c;
#dpl;
#dg;
#ds;
#dc;
#wpl;
#wg;
#ws;
#wc;
#user;
#pass;
  constructor() {
    console.log('bag of holding is accepting events on main page');
    this.setMuns(); //sets all money values to 0 from the beginning so that calculations don't return NaN.
    this.handleLoginModalInteract(); //opens and closes the modal. I should have done this another way. This sucked to get to work.
    this.handleSubmitPress(); //submits login info and does checks
    this.handleDepositModalInteract(); //opens and closes the modal. I should have done this another way. This sucked to get to work.
    this.handleWithdrawModalInteract(); //opens and closes the modal. I should have done this another way. This sucked to get to work.
    this.handleDepositPlInput(); //handles platinum deposit inputs
    this.handleDepositGInput(); //handles gold deposit inputs
    this.handleDepositSInput(); //handles silver deposit inputs
    this.handleDepositCInput(); //handles copper deposit inputs
    this.handleDepositPress(); //handles you pressing the deposit button
    this.handleWithdrawPlInput(); //handles platinum withdraw inputs
    this.handleWithdrawGInput(); //handles gold withdraw inputs
    this.handleWithdrawSInput(); //handles silver withdraw inputs
    this.handleWithdrawCInput(); //handles copper withdraw inputs
    this.handleWithdrawPress(); //handles you pressing the withdraw button
    this.handleConvertUpPress(); //handles converting up
    this.handleConvertDownPress(); //handles converting down

  }

// MODAL WORKING SECTION --------------------------------------------------------------------------------------------------------------------------------------

handleDepositModalInteract() {
 //getElementsByClassName returns an array, so make sure to label what one you wanna grab.
  document.getElementsByClassName("modal-btn")[0].addEventListener("click",(event) => {
    document.getElementsByClassName("modal")[0].style.display = `block`;
  });
  document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementsByClassName("modal")[0].style.display = `none`;
  };
  window.onclick = function(event) {
    if (event.target === document.getElementsByClassName("modal")[0]) {
      document.getElementsByClassName("modal")[0].style.display = "none";
    }
  }
}

  handleWithdrawModalInteract() {

    document.getElementsByClassName("modal-btn")[1].addEventListener("click",(event) => {
      document.getElementsByClassName("modal")[1].style.display = `block`;
    });
    document.getElementsByClassName("close")[1].onclick = function() {
      document.getElementsByClassName("modal")[1].style.display = `none`;
    };
    window.onclick = function(event) {
      if (event.target === document.getElementsByClassName("modal")[1]) {
        document.getElementsByClassName("modal")[1].style.display = "none";
      }
    }
  }


  handleLoginModalInteract() {
      document.getElementById('user').addEventListener('change', (event) => {
        this.setUser(document.getElementById('user').value);
  });
      document.getElementById('pass').addEventListener('change', (event) => {
        this.setPass(document.getElementById('pass').value);
    });
  }

  //Deposit Variable input thingies ----------------------------------------------------------------------------------------------------------------------------------------

  handleDepositPlInput() {
    document.getElementById('dpl').addEventListener('change', (event) => {
      this.setDpl(document.getElementById('dpl').value);
      console.log(`dpl updated: ${this.#dpl}`);
    });
  }

  handleDepositGInput() {
    document.getElementById('dg').addEventListener('change', (event) => {
      this.setDg(document.getElementById('dg').value);
      console.log(`dg updated: ${this.#dg}`);
    });
  }

  handleDepositSInput() {
    document.getElementById('ds').addEventListener('change', (event) => {
      this.setDs(document.getElementById('ds').value);
      console.log(`ds updated: ${this.#ds}`);
    });
  }

  handleDepositCInput() {
    document.getElementById('dc').addEventListener('change', (event) => {
      this.setDc(document.getElementById('dc').value);
      console.log(`dc updated: ${this.#dc}`);
    });
  }

  handleWithdrawPlInput() {
    document.getElementById('wpl').addEventListener('change', (event) => {
      this.setWpl(document.getElementById('wpl').value);
      console.log(`wpl updated: ${this.#wpl}`);
      if (this.#wpl > this.#pl) {
        this.#wpl = 0;
        console.log('Nice try, dude. You dont have it tho.');
        document.getElementById('wpl').value =`${this.#wpl}`;
      }
    });
  }

  handleWithdrawGInput() {
    document.getElementById('wg').addEventListener('change', (event) => {
      this.setWg(document.getElementById('wg').value);
      console.log(`wg updated: ${this.#wg}`);
      if (this.#wg > this.#g) {
        this.#wg = 0;
        console.log('Nice try, dude. You dont have it tho.');
        document.getElementById('wg').value =`${this.#wg}`;
      }
    });
  }

  handleWithdrawSInput() {
    document.getElementById('ws').addEventListener('change', (event) => {
      this.setWs(document.getElementById('ws').value);
      console.log(`ws updated: ${this.#ws}`);
      if (this.#ws > this.#s) {
        this.#ws = 0;
        console.log('Nice try, dude. You dont have it tho.');
        document.getElementById('ws').value =`${this.#ws}`;
      }
    });
  }

  handleWithdrawCInput() {
    document.getElementById('wc').addEventListener('change', (event) => {
      this.setWc(document.getElementById('wc').value);
      console.log(`wc updated: ${this.#wc}`);
      if (this.#wc > this.#c) {
        this.#wc = 0;
        console.log('Nice try, dude. You dont have it tho.');
        document.getElementById('wc').value =`${this.#wc}`;
      }
    });
  }

//Deposit and Withdraw button presses!

  handleDepositPress() {
    document.getElementById('deposit').addEventListener('click', (event) => {
    document.getElementsByClassName("modal")[0].style.display = "none";
    if (this.#dpl > 0) {
    this.#pl = this.#pl * 1 + this.#dpl * 1;} else {this.pl = this.pl + 0;}
    if (this.#dg > 0){
    this.#g = this.#g * 1 + this.#dg * 1;} else {this.g = this.g + 0;}
    if (this.#ds > 0){
    this.#s = this.#s * 1 + this.#ds * 1;} else {this.s = this.s + 0;}
    if (this.#dc > 0){
    this.#c = this.#c * 1 + this.#dc * 1;} else {this.c = this.c +0;}
    document.getElementById('pl').innerHTML =`${this.#pl}`;
    document.getElementById('g').innerHTML =`${this.#g}`;
    document.getElementById('s').innerHTML =`${this.#s}`;
    document.getElementById('c').innerHTML =`${this.#c}`;
    console.log('successful deposit!');
  })};

  handleWithdrawPress() {
    document.getElementById('withdraw').addEventListener('click', (event) => {
      document.getElementsByClassName("modal")[1].style.display = "none";
      if (this.#wpl > 0) {
        this.#pl = this.#pl * 1 - this.#wpl * 1;} else {this.pl = this.pl + 0;}
      if (this.#wg > 0){
        this.#g = this.#g * 1 - this.#wg * 1;} else {this.g = this.g + 0;}
      if (this.#ws > 0){
        this.#s = this.#s * 1 - this.#ws * 1;} else {this.s = this.s + 0;}
      if (this.#wc > 0){
        this.#c = this.#c * 1 - this.#wc * 1;} else {this.c = this.c +0;}
      document.getElementById('pl').innerHTML =`${this.#pl}`;
      document.getElementById('g').innerHTML =`${this.#g}`;
      document.getElementById('s').innerHTML =`${this.#s}`;
      document.getElementById('c').innerHTML =`${this.#c}`;
      console.log('successful withdraw!');
    })};

  handleSubmitPress() {
    document.getElementById('submit').addEventListener('click', (event) => {
      if (this.#user === 'admin' && this.#pass === 'admin') {
        document.getElementById('loginModal').style.display = "none";
      } else { console.log('sorry, try again.');}
    });

  }

//Conversion stuff

  handleConvertUpPress() {
    document.getElementById('convert-up').addEventListener('click', (event) =>{
    this.#pl = this.#g / 100 + this.#s / 1000 + this.#c / 10000 + this.#pl;
    document.getElementById('pl').innerHTML =`${this.#pl}`;
    this.#g = 0;
    this.#s = 0;
    this.#c = 0;
    document.getElementById('g').innerHTML =`${this.#g}`;
    document.getElementById('s').innerHTML =`${this.#s}`;
    document.getElementById('c').innerHTML =`${this.#c}`;
    console.log('You have converted up! There are 100G to every 1Pl, 10S to every 1G, and 10C to every 1S!')
    })};

  handleConvertDownPress() {
    document.getElementById('convert-down').addEventListener('click', (event) =>{
    this.#c = this.#s * 10 + this.#g * 100 + this.#pl * 10000 + this.#c;
    document.getElementById('c').innerHTML =`${this.#c}`;
    this.#g = 0;
    this.#s = 0;
    this.#pl = 0;
    document.getElementById('g').innerHTML =`${this.#g}`;
    document.getElementById('s').innerHTML =`${this.#s}`;
    document.getElementById('pl').innerHTML =`${this.#pl}`;
    console.log('You have converted down! There are 100G to every 1Pl, 10S to every 1G, and 10C to every 1S!')
  })};


//variable setters ---------------------------------------------------------------------------------------------------------------------------------------------

  setDpl(dpl) {
    this.#dpl = dpl;
  }

  setDg(dg) {
    this.#dg = dg;
  }

  setDs(ds) {
    this.#ds = ds;
  }

  setDc(dc) {
    this.#dc = dc;
  }

  setWpl(wpl) {
    this.#wpl = wpl;
  }

  setWg(wg) {
    this.#wg = wg;
  }

  setWs(ws) {
    this.#ws = ws;
  }

  setWc(wc) {
    this.#wc = wc;
  }

  setMuns() {
    this.#pl = 0;
    this.#g = 0;
    this.#s = 0;
    this.#c = 0;
  }

  setUser(user) {
    this.#user = user;
  }

  setPass(pass) {
    this.#pass = pass;
  }
}