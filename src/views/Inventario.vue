<template>
  <div class="Inventario container px-5">
      <h2>Inventario</h2>
    <b-table striped hover :items="juguetes" :fields="juguetes"></b-table>
  </div>
</template>

<script>
import { mapState} from 'vuex'

  export default {
     name: "Inventario",
     data() {
      return {
        fields: ['Id', 'Nombre', 'Stock', 'Precio'],
      }
     },
     computed: {
        ...mapState(['juguetes'])
     }
  }
</script>