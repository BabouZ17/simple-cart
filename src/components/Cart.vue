<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      product: {
        name: "socks",
        quantity: 2,
        price: 10.0,
        image:
          "https://i5.walmartimages.ca/images/Enlarge/825/804/6000200825804.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      },
      cart: {
        products: [],
        total: 0,
      },
    };
  },
  methods: {
    addProductToCart() {
      if (this.product.quantity > 0) {
        this.product.quantity -= 1;
        this.cart.products.push({ ...this.product, quantity: 1 });
        this.cart.total += this.product.price;
      }
      console.log(this.cart);
    },
    removeProductFromCart() {
      if (this.cart.products.length != 0) {
        this.product.quantity++;
        this.cart.products.pop();
        this.cart.total -= this.product.price;
      }
      console.log(this.cart);
    },
  },
});
</script>

  <template>
  <div class="container">
    <div class="product">
      <div class="product-image">
        <img :src="product.image" />
      </div>

      <div class="product-info">
        <h1>Name: {{ product.name }}</h1>
        <h2>Price: {{ product.price }}</h2>
        <h2>Quantity: {{ product.quantity }}</h2>
      </div>
    </div>
    <hr />
    <div class="cart">
      <div class="cart-content">
        <h2>Quantity of products: {{ cart.products.length }}</h2>
        <h2>Total ($): {{ cart.total }}</h2>
      </div>
      <button @click="addProductToCart()">Add product</button>
      <button @click="removeProductFromCart()">Remove product</button>
    </div>
  </div>
</template>

<style scoped>
</style>
