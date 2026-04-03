var alice_guard = "right_vom_tag"
var bob_guard = "right_vom_tag"
var running = false;
var complex_attack = false;

const ACTION_WEIGHTS = [1, 2, 2, 4];

function build(R1, R2, R3, R4, R5) {
    x = [0, 3**0.5, 3**0.5, 0, -1*3**0.5, -1*3**0.5, 0];
    y = [-2, -1, 1, 2, 1, -1, -2];

    p1 = ["", "", "", "", "", ""];
    p2 = ["", "", "", "", "", ""];
    for (let i = 0; i < 6; i++) {
        p1[i] = `M ${x[i]*R1+100},${y[i]*R1+100} ${x[i+1]*R1+100},${y[i+1]*R1+100} ${x[i+1]*R2+100},${y[i+1]*R2+100} ${x[i]*R2+100},${y[i]*R2+100} Z`;
        p2[i] = `M ${x[i]*R2+100},${y[i]*R2+100} ${x[i+1]*R2+100},${y[i+1]*R2+100} ${x[i+1]*R3+100},${y[i+1]*R3+100} ${x[i]*R3+100},${y[i]*R3+100} Z`;
    }

    const svg = document.getElementById("arena");
    svg.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        svg.innerHTML += `<path d="${p1[i]}" class="attack" id="attack${i}"/>`
        svg.innerHTML += `<path d="${p2[i]}" class="attack" id="attack${i+7}"/>`
    }
    svg.innerHTML += `<circle cx="100" cy="98" r="${R4}" class="attack" id="attack6"/>`
    svg.innerHTML += `<circle cx="100" cy="98" r="${R5}" class="attack" id="attack13"/>`

    svg.innerHTML += `<line class="guard" id="guard0" transform="matrix(-0.99 0.57 1.18 2.06 111.66 53.17)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard1" transform="matrix(-0.75 2.61 2.29 0.66 117.84 72.74)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard2" transform="matrix(1 1.73 2.06 -1.19 113.37 119.49)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard3" transform="matrix(1.73 1 1.19 -2.06 135.23 140.45)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard4" transform="matrix(0.69 -1.88 -2.23 -0.82 115.39 149.48)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard5" transform="matrix(0.67 1.88 2.24 -0.8 84.39 149.48)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard6" transform="matrix(1.73 -1 -1.19 -2.06 64.23 140.45)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard7" transform="matrix(1 -1.73 -2.06 -1.19 86.37 119.49)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard8" transform="matrix(-0.72 -2.61 -2.29 0.63 82.1 72.69)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard9" transform="matrix(-0.98 -0.58 -1.21 2.05 88.66 53.17)" x1="-7" y1="0" x2="7" y2="0" />`
        
    svg.innerHTML += `<line class="guard" id="guard10" transform="matrix(-0.99 0.57 1.18 2.06 112.66 55.17)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard11" transform="matrix(-0.75 2.61 2.29 0.66 115.73 71.67)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard12" transform="matrix(1 1.73 2.06 -1.19 111.37 120.49)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard13" transform="matrix(1.73 1 1.19 -2.06 134.23 142.45)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard14" transform="matrix(0.69 -1.88 -2.23 -0.82 113.39 148.48)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard15" transform="matrix(0.67 1.88 2.24 -0.8 86.39 148.48)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard16" transform="matrix(1.73 -1 -1.19 -2.06 65.23 142.45)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard17" transform="matrix(1 -1.73 -2.06 -1.19 88.37 120.49)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard18" transform="matrix(-0.72 -2.61 -2.29 0.63 84.39 71.69)" x1="-7" y1="0" x2="7" y2="0" />`
    svg.innerHTML += `<line class="guard" id="guard19" transform="matrix(-0.98 -0.58 -1.21 2.05 87.66 55.17)" x1="-7" y1="0" x2="7" y2="0" />`
}


function attack(index, color) {
    console.log(index, color)
    const el = document.getElementById(`attack${index}`);
    if (!el) return;

    document.querySelectorAll('.attack').forEach(ele => {
        ele.style.fill = 'rgba(248, 248, 248, 1)';
    });

    color_dict = {'default': 'rgba(248, 248, 248, 1)', 'red': 'red', 'orange': 'orange', 'yellow': 'yellow', 'green': 'green'};
    el.style.fill = (index<7?color_dict[color]:color_dict['green']);
}

function guard(old_index, new_index, color) {
    const old_el = document.getElementById(`guard${old_index}`);
    const new_el = document.getElementById(`guard${new_index}`);
    if (!old_el || !new_el) return;
    
    color_dict = {'tomato': 'tomato', 'chartreuse': 'chartreuse'};
    old_el.style.stroke = 'rgba(120, 120, 120, 0.2)';
    new_el.style.stroke = color_dict[color];
}


function loop() {
    if (!running) return;
    let delay = 0;

    const actions = ['alice_change_guard', 'bob_change_guard', 'alice_attack', 'bob_attack'];
    const expanded_actions = actions.flatMap((n, i) => Array(ACTION_WEIGHTS[i]).fill(n));
    const action = expanded_actions[Math.floor(Math.random() * ACTION_WEIGHTS.reduce((sum, w) => sum + w, 0))];


    if (action === 'alice_change_guard') {
        const options = GUARD_TRANSITIONS[alice_guard];
        new_guard = options[Math.floor(Math.random() * options.length)];
        guard(GUARDS.indexOf(alice_guard)+10, GUARDS.indexOf(new_guard)+10, 'chartreuse');
        alice_guard = new_guard;
        delay = Math.random() * (1500 - 500) + 2000;
        setTimeout(() => {loop()}, delay);
    } else if (action === 'bob_change_guard') {
        const options = GUARD_TRANSITIONS[bob_guard];
        new_guard = options[Math.floor(Math.random() * options.length)];
        guard(GUARDS.indexOf(bob_guard), GUARDS.indexOf(new_guard), 'tomato');
        bob_guard = new_guard;
        delay = Math.random() * (1500 - 500) + 2000;
        setTimeout(() => {loop()}, delay);
    } else if (action === 'alice_attack') {
        const options = SIMPLE_ATTACKS[alice_guard];
        const option = options[Math.floor(Math.random() * options.length)];
        console.log(action,': ', option);
        handle_attack_seq(option, 7);
    } else if (action === 'bob_attack' && !complex_attack) {
        const options = SIMPLE_ATTACKS[bob_guard];
        const option = options[Math.floor(Math.random() * options.length)];
        console.log(action,':   ', option);
        handle_attack_seq(option, 0);
    } else if (action === 'bob_attack' && complex_attack) {
        const options = COMPLEX_ATTACKS[bob_guard];
        const option = options[Math.floor(Math.random() * options.length)];
        console.log(action,':   ', option);
        handle_attack_seq(option, 0);
    }
}

function handle_attack_seq(seq, start_index) {
    let delay = 0;
    const act_dict = {'defence': 'red', 'feint': 'orange'}
    if (seq.length === 0) {
        attack(0, 'default');
        delay = Math.random() * (1500 - 500) + 3000;
        setTimeout(() => {loop()}, delay);
    } else if (seq.length > 0) {
        attack(start_index + ATTACKS.indexOf(seq[0][0]), act_dict[seq[0][1]]);
        delay = Math.random() * (1500 - 500) + 500;
        setTimeout(() => {handle_attack_seq(seq.slice(1), start_index)}, delay);
    }
}


function start_game() {
    if (running) return;
    running = true;
    setTimeout(() => {loop()}, 1000);
}

function stop_game() {
    running = false;
}

const start_btn = document.getElementById('start_btn');
const stop_btn = document.getElementById('stop_btn');

start_btn.onclick = () => {
  start_game();

  start_btn.classList.add('active');
  stop_btn.classList.remove('active');
};

stop_btn.onclick = () => {
  stop_game();

  stop_btn.classList.add('active');
  start_btn.classList.remove('active');
};

build(48, 44, 40, 8, 4);
guard(11, 11, 'chartreuse');
guard(1, 1, 'tomato');
