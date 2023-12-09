let items = ""

new Vue({
    el: '#app',
    data() {
        return { 
            items: []
         }
    },
    methods: {
        // addProduct() {
        //     if (this.newProduct.trim() !== '') {
        //         this.products.push(this.newProduct)
        //         this.newProduct = ''
        //     }
        // },
        // removeProduct(index) {
        //     this.products.splice(index, 1)
        // },

        zhopa: function(){
            fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => (this.items = data))
        },

        items_done: function()
        {
            return this.items.filter(item => item.completed == true)
        },

        items_undone: function()
        {
            return this.items.filter(item => item.completed == false)
        }

    },
})