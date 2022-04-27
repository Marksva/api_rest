import api from './api.js'
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import topo from "./topo.js"
import sidemenu from "./sidemenu.js"
import painel from "./painel.js"
import painelprodutos from "./painelprodutos.js"


createApp({
    components: {
        topo,
        sidemenu,
        painel,
        painelprodutos
    },
    data() {
        return {

        }
    },
    methods: {

    }
}).mount('#meuApp')










// var b1 = document.getElementById('btn1')
// var b2 = document.getElementById('btn2')
// var b3 = document.getElementById('btn3')
// var b4 = document.getElementById('btn4')

// //configurando button de get
// b1.addEventListener('click', () => {
//     api.get('clients').then((res) => {
//         console.log("retorno do servidor");
//         console.log(res.data);
//     }).catch((e) => {
//         console.log("erro", e);
//     });
// });

// // cofigurando button post
// b2.addEventListener('click', () => {
//     let dados = {
//         id: "cli04",
//         nome: "Paola Oliveira",
//         email: "paola@paola.com"
//     }
//     api.post("clients", dados).then((res) => {
//         console.log("retorno do servidor");
//         console.log(res.data);
//     }).catch((e) => {
//         console.log("erro", e
//         );
//     });
// });

// // configurando button put
// b3.addEventListener('click', () => {
//     let dados = {
//         id: "cli04",
//         nome: "abreu abrião",
//         email: "abreu@abreu"
//     }
//     api.put("clients", dados).then((res) => {
//         console.log("retorno do servidor");
//         console.log(res.data);
//     }).catch((e) => {
//         console.log("erro", e
//         );
//     });
// });

// // configurando button delete
// b4.addEventListener('click', () => {
//     api.delete("clients", "cli04").then((res) => {
//         console.log("retorno do serivdor");
//         console.log(res.data);
//     }).catch((e) => {
//         console.log("erro", e);
//     })
// });
