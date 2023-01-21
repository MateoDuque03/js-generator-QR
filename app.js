const contenedor = document.querySelector('#contenedorQR');
const QR = new QRCode(contenedor);
const form = document.querySelector('#formQR');
const modal = document.querySelector("#myModal");
const close = document.querySelector(".close").onclick = () => {
  modal.style.display = 'none';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let link = form.link.value;
  if (link)
    QR.makeCode(form.link.value);
  else
    modal.style.display = 'block';

  form.link.value = '';
})
