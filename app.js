const { jsPDF } = window.jspdf;
window.html2canvas = html2canvas;

const a = document.getElementById('pdfDownloader')

a.addEventListener('click', e => {
    let doc = new jsPDF('p', 'px', [window.innerWidth, window.innerHeight*3]);

doc.html(document.body, {
   callback: doc => doc.save("Curriculum_Luis_Santos_iOS_Dev.pdf"),
   x: 10,
   y: 10
});
})