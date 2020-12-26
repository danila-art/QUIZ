	let page1 = document.getElementById('testPage1');
	let page2 = document.getElementById('testPage2');
	let page3 = document.getElementById('testPage3');
	let page4 = document.getElementById('testPage4');
let question = {
	question1: '',
	question2: [],
	question3: '',
	question4: ''
}
function nextPage() {
 		page1.style.display = 'none';
 		page2.style.display = 'block';
 	if (document.getElementById('radio1_1').checked) {
 		question.question1 = document.getElementById('radio1_1').value;
 	}else if (document.getElementById('radio1_2').checked) {
 		question.question1 = document.getElementById('radio1_2').value;
 	}else if (document.getElementById('radio1_3').checked) {
 		question.question1 = document.getElementById('radio1_3').value;
 	}else if (document.getElementById('radio1_4').checked) {
 		question.question1 = document.getElementById('radio1_4').value;
 	}
}

function nextPage2() {
 		page2.style.display = 'none';
 		page3.style.display = 'block';
 	if (document.getElementById('radio3_1').checked) {
 		question.question2.push(document.getElementById('radio2_1').value);
 	}
 	if (document.getElementById('radio2_2').checked) {
 		question.question2.push(document.getElementById('radio2_2').value);
 	}
 	if (document.getElementById('radio2_3').checked) {
 		question.question2.push(document.getElementById('radio2_3').value);
 	}
 	if (document.getElementById('radio2_4').checked) {
 		question.question2.push(document.getElementById('radio2_4').value);
 	}
 	if (document.getElementById('radio2_5').checked) {
 		question.question2.push(document.getElementById('radio2_5').value);
 	}
 	if (document.getElementById('radio2_6').checked) {
 		question.question2.push(document.getElementById('radio2_6').value);
 	}
 	if (document.getElementById('radio2_7').checked) {
 		question.question2.push(document.getElementById('radio2_7').value);
 	}
 	if (document.getElementById('radio2_8').checked) {
 		question.question2.push(document.getElementById('radio2_8').value);
 	}
}

function nextPage3() {
 		page3.style.display = 'none';
 		page4.style.display = 'block';
 	if (document.getElementById('radio3_1').checked) {
 		question.question3 = document.getElementById('radio3_1').value;
 	}else if (document.getElementById('radio3_2').checked) {
 		question.question3 = document.getElementById('radio3_2').value;
 	}else if (document.getElementById('radio3_3').checked) {
 		question.question3 = document.getElementById('radio3_3').value;
 	}else if (document.getElementById('radio3_4').checked) {
 		question.question3 = document.getElementById('radio3_4').value;
 	}
}

function nextPage4() {
 		page4.style.display = 'none';
 	if (document.getElementById('radio4_1').checked) {
 		question.question4 = document.getElementById('radio4_1').value;
 	}else if (document.getElementById('radio4_2').checked) {
 		question.question4 = document.getElementById('radio4_2').value;
 	}else if (document.getElementById('radio4_3').checked) {
 		question.question4 = document.getElementById('radio4_3').value;
 	}else if (document.getElementById('radio4_4').checked) {
 		question.question4 = document.getElementById('radio4_4').value;
 	}
}