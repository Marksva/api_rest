const porta = "4000";

export default {

    get(rota) {
        return axios.get('http://localhost:' + porta + '/' + rota);
    },

    post(rota, dados) {
        let bodyFormData = new URLSearchParams();
        for (let key in dados) {
            bodyFormData.append(key, dados[key]);
        }
        return axios('http://localhost:' + porta + '/' + rota, {
            method: "post",
            url: "http://localhost:4000/clients",
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
    },

    put(rota, dados) {
        let bodyFormData = new URLSearchParams();
        for (let key in dados) {
            bodyFormData.append(key, dados[key]);
        }
        return axios('http://localhost:' + porta + '/' + rota, {
            method: "put",
            url: "http://localhost:4000/clients",
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
    },

    delete(rota, id) {
        let bodyFormData = new URLSearchParams();
        bodyFormData.append("id", id);
        return axios('http://localhost:' + porta + '/' + rota, {
            method: "delete",
            url: "http://localhost:4000/clients",
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
    }

}