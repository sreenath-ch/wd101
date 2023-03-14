const tls=document.getElementById('user-table');
let entry=JSON.parse(localStorage.getItem('users')) || [];
for (const user of entry) {
    const {name,email,password,dob,terms} = user;
    const row = tls.insertRow();
    row.insertCell().textContent=name;
    row.insertCell().textContent=email;
    row.insertCell().textContent=password;
    row.insertCell().textContent=dob;
    row.insertCell().textContent=terms ? 'true' : 'false';
}
const frs=document.getElementById('registration_form');
frs.addEventListener('submit',(event) => {
    event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const dob=document.getElementById('dob').value;
    const terms=document.getElementById('terms').checked;
    const d=new Date(dob);
    const n=new Date();
    const bfd=(new Date(n.getFullYear()-55,n.getMonth(),n.getDate()));
    const rfd=(new Date(n.getFullYear()-18,n.getMonth(),n.getDate()));
    if (d<bfd ||(d>rfd)) {
        alert('under 18 years or over 55 years');
        return;
    }
    const user={name,email,password,dob,terms};
    entry.push(user);
    localStorage.setItem('users',JSON.stringify(entry));
    const row=tls.insertRow();
    const mak=[name,email,password,dob,terms]
    const rows=mak.map((item) => {
        const cell=row.insertCell();
        cell.textContent=item;
    })
    frs.reset();
});