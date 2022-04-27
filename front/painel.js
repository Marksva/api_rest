export default {
    template: `
        <div class="p-2 bg-gray-100">
            <p>Clientes</p>
            <button id="btn1" class="border rounded px-1 hover:bg-gray-200 text-sm">GET</button>
            <button id="btn2" class="border rounded px-1 hover:bg-gray-200 text-sm">POST</button>
            <button id="btn3" class="border rounded px-1 hover:bg-gray-200 text-sm">PUT</button>
            <button id="btn4" class="border rounded px-1 hover:bg-gray-200 text-sm">DELETE</button>
            <div class="p-2">
                <span class="ml-2">ID:</span>
                <input type="text" class="ml-2 border rounded"></input>
                <span class="ml-2">NOME:</span>
                <input type="text" class="ml-2 border rounded"></input>
                <span class="ml-2">EMAIL:</span>
                <input type="email" class="ml-2 border rounded"></input>
            </div>
        </div>

    `,
    data() {
        return {

        }
    },
    methods: {

    }
}