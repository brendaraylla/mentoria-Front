
const menuHeaderEmpresa = document.querySelector('.menu__empresa');
const dropdown = menuHeaderEmpresa.querySelector('.menu__header-dropdown');
menuHeaderEmpresa.addEventListener("click", event => dropdown.classList.toggle('active'));

const btnVoltar = document.querySelector('.btn-voltar');
const modal = document.querySelector('.modal');
btnVoltar.addEventListener("click", event => modal.classList.add('active'));

const closePanel = document.querySelector('.close-panel');
closePanel.addEventListener("click", event => modal.classList.remove('active'));

const iconInfo = document.querySelector('.fa-question-circle-o');
const info = document.querySelector('.header__informacoes');
iconInfo.addEventListener("click", event => info.classList.toggle('active'));

const headerCollapseDados = document.querySelector('.collapse__header-dados');
const mainCollapseDados = document.querySelector('.collapse__main-dados');
headerCollapseDados.addEventListener("click", event => mainCollapseDados.classList.toggle('active'));

const headerCollapseInfo = document.querySelector('.collapse__header-info');
const mainCollapseInfo = document.querySelector('.collapse__main-info');
headerCollapseInfo.addEventListener("click", event => mainCollapseInfo.classList.toggle('active'));

const menuHamburguer = document.querySelector('.fa-bars');
const menuCollapse = document.querySelector('.menu');
menuHamburguer.addEventListener("click", event => menuCollapse.classList.toggle('collapsed'));

const inputDestinatario = document.querySelector(".destinatario");
const destinatarioPesquisa = document.querySelector(".destinatario__pesquisa");
inputDestinatario.addEventListener("click", event => destinatarioPesquisa.classList.toggle('active'));