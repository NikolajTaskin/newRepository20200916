//Task 1
// const pakelis = {
// 	vnt: 20,
// 	parukyti() {
// 		return this.vnt--;	
// 	}
// };

// console.log(pakelis.parukyti());
// console.log(pakelis.parukyti());
// console.log(pakelis.parukyti());

//////////

// const pakelis = {
// 	vnt: 20,
// 	parukyti() {
// 		console.log(this.vnt--);
// 		console.log(this.vnt);	
// 	}
// };

// pakelis.parukyti();
// pakelis.parukyti();
// pakelis.parukyti();

//Task 2

// const pakelis = {
// 	vnt: 20,
// 	parukyti() {
// 		this.vnt--;	
// 	}
// };

// while (pakelis.vnt) {
// 	pakelis.parukyti();
// }



//Task 3
// const pakelis = {
// 	vnt: 20,
// 	parukyti() {
// 		this.vnt--;	
// 	}
// };

// function surukyti(){
// 	while (pakelis.vnt) {
// 		pakelis.parukyti();
// 	}
// }

//Task 4
// const pakelis = {
// 	vnt: 20,
// 	parukyti() {
// 		this.vnt--;	
// 	}
// };

// function surukyti(object){
// 	while (object.vnt) {
// 		object.parukyti();
// 	}
// }
// surukyti(pakelis);

//Task 5
const pakelis = {
	vnt: 20,
	parukyti() {
		if (this.vnt) {
			this.vnt--
		}	
		return this.vnt;
	}
};

const manoNaujasPakelis = {...pakelis};

pakelis.parukyti();

const mygtukas = document.createElement('button');
const body = document.querySelector('body');
mygtukas.innerHTML = pakelis.vnt;

mygtukas.addEventListener('click', () => { /////anonimine funkcija
mygtukas.innerHTML = pakelis.parukyti();
});

body.append(mygtukas);



