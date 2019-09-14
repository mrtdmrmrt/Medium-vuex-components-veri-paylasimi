<template>
	<div class="container">
		<h3>Gelen Veriler</h3>
		<ul v-for ="data in dataList" style="list-style-type:none;" class="list-group">
			<li  class="list-group-item">
				{{data.name}}
			</li>
			<li  class="list-group-item">
				{{data.surname}}
			</li>
			<li  class="list-group-item">
				{{data.eMail}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props  :{
			dataList : {
				required : false,
				type : Array

			}
		}
	}
</script>

