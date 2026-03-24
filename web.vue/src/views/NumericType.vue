<!-------------------------------------------------- script -------------------------------------------------->
<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { NumericTypeStore } from '../store';

/************************* properties *************************/
const apiClient = inject('apiClient');
const route = useRoute()
const model = ref({
  // smallintType: null,
  // integerType: null,
  // bigintType: null
});
/************************* functions *************************/

onMounted(async () => {
  await loadData();
})

const onSubmit = async () => {
  await new NumericTypeStore(apiClient).put(model.value);
}
const onReset = async () => {
  await loadData();
}

async function loadData() {
  var result =  await new NumericTypeStore(apiClient).get(route.params.id);
  if(result.length > 0){
    model.value = result[0];
  }
  else{
    model.value = {}
  }
}

</script>

<!-------------------------------------------------- template -------------------------------------------------->
<template>
  <Card title="Numeric Type" @onSubmit="onSubmit" @onCancel="onReset">
    <Number label="Smallint Type" type="number" v-model="model.smallintType" />
    <Number label="Integer Type" type="number" v-model="model.integerType" />
    <Number label="Bigint Type" type="number" v-model="model.bigintType" />
  </Card>
</template>

<!-------------------------------------------------- style -------------------------------------------------->
<style scoped></style>
