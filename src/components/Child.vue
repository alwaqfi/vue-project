<template>
<div></div>
</template>

<script setup lang="ts">

function print(){
    console.warn('printed')
}

defineExpose({
    print
})

</script>