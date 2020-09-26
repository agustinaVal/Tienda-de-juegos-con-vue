<template>
	<div class="Inicio container">
    <h1 class="py-5">Busca los juguetes disponibles</h1>
		<label class="etiqueta">ID:</label>
		<b-form-input id="input-compra" v-model="id" placeholder="Codigo del producto"></b-form-input>

		<label class="etiqueta">Nombre:</label>
		<b-form-input id="input-compra" :disabled="true" v-model="juguete.nombre" placeholder="Nombre"></b-form-input>

		<label class="etiqueta">Precio:</label>
		<b-form-input id="input-compra" :disabled="true" v-model="juguete.precio" placeholder="Precio"></b-form-input>

		<label class="etiqueta">Stock:</label>
		<b-form-input id="input-compra" :disabled="true" v-model="juguete.stock" placeholder="Stock"></b-form-input>
		<b-button type="submit" @click="Descontar" variant="danger" class="btnComprar my-4">Comprar</b-button>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'Inicio',
	methods: {
		Descontar() {
			this.$store.dispatch('descontar', this.id);
		},
	},
	data() {
		return {
			id: '',
		};
	},
  components: {},
  computed:{
    ...mapState(['juguetes']),
    juguete(){
       let juguete = {
         nombre : "",
         precio : "", 
         stock : ""
       }
      return this.juguetes.find(j => j.id == this.id) || juguete
    },
  }
};
</script>
