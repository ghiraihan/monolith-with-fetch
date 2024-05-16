const namaTxt = document.getElementById('nama_txt');
const namaResultTxt = document.getElementById('nama_result_txt');
const feedbackTxt = document.getElementById('feedback_txt');
const feedbackResultTxt = document.getElementById('feedback_result_txt');
const submitBtn = document.getElementById('submit_btn');
const statusTxt = document.getElementById('status');

let response = null;

if(response === null) {
  namaResultTxt.style.display = 'none';
  feedbackResultTxt.style.display = 'none';
}

function kirimFormulir() {
  const formulir = document.forms['formulir-ini'];
  const dataFormulir = new FormData(formulir);
  const data = new URLSearchParams(dataFormulir);
  // hit api
  const responseRaw = fetch('/contact', {
    method: 'POST',
    body: data
  });
  responseRaw.then(async function (respons) {
    response = await respons.json();
    namaResultTxt.style.display = 'inherit';
    namaResultTxt.innerText = response.data.nama;
    feedbackResultTxt.style.display = 'inherit';
    feedbackResultTxt.innerText = response.data.feedback;
    document.getElementById('nama_txt').style.display = 'none';
    feedbackTxt.style.display = 'none';
    submitBtn.style.display = 'none';
    statusTxt.innerText = response.message;
  })
  return false;
}