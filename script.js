
const buttons = document.getElementById("buttons");
const screen = document.getElementById("screen");
const value = ['AC', 'DE', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];
const ope = value.slice(2, value.length - 1);

//for create buttons auto
for (let i = 0; i < 20; i++) {
  buttons.innerHTML += `<button class="flex">${value[i]}</button>`
}

//fro coloring operetors button
for (let i = 0; i < buttons.children.length - 3; i++) {
  if ((i > 0 && (i - 3) % 4 == 0) || i < 3) buttons.children[i].style.color = 'rgb(0, 255, 0)';
}


const result = () => screen.value = eval(screen.value);

const Delete = () => screen.value = '';

const write = (x) => { if (-1 < ope.indexOf(x)) screen.value += x; }

const Back = () => {
  let a = screen.value.split('');
  a.pop();
  screen.value = a.join('');
}

//Run function accoding to the keydown
document.addEventListener("keydown", (e) => Event(e));

function Event(e) {
  if (e.key == 'Enter' && screen.value != '') result()
  else if (e.key == 'Delete') Delete();
  else if (e.key == 'Backspace') Back();
  else write(e.key)
}

//Run function accoding to the click
buttons.addEventListener('click', (e) => {
  let text = e.target.textContent;
  if (text == 'AC') Delete();
  else if (text == 'DE') Back();
  else if (text == '=') result();
  write(text)
}, true)
