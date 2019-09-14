<template>
	<div class="container">
		<div class="row">
			<input v-model="dataSource.name" type="text" placeholder="Lütfen İsim Giriniz..">
		</div>
		<div class="row">
			<input v-model="dataSource.surname" type="text" placeholder="Lütfen Soyisim Giriniz..">
		</div>
		<div class="row">
			<input v-model="dataSource.eMail" type="text" placeholder="Lütfen E-Posta Giriniz..">
		</div>
		<div class="row">
			<button @click="gonder" class="btn btn-primary">Verileri Gönder</button>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				dataSource : {
					name : '',
					surname : '',
					eMail : ''
				}
			}
		},
		methods :{
			gonder(){
				 this.$store.dispatch("addDataAction",this.dataSource)
			}
		}
		
	}
</script>

<style type="text/css">
	.row{
		margin-top:20px; 
	}
</style>




