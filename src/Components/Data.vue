<template>
  <div class="container">
  	<div class="row">
  		<DataSource />
  	</div>
  	<hr>
  	<div class="row">
  		<DataTarget :dataList = "vuexGetDataList"/>
  	</div>
  </div>
</template>

<script>
import DataSource from "./DataSource"
import DataTarget from "./DataTarget"

export default {
    computed: {
      vuexGetDataList(){
        return this.$store.getters.getAddedDataList
    }
      
  },
   components : {
   	  DataSource,
   	  DataTarget
   }
  
}
</script>


