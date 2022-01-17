<template>

  <div>
    <h1>Test Ici</h1>
    <i class="fas fa-thumbs-up"></i>
    
    <span>{{ count }}</span>
    <i class="fas fa-thumbs-down"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
  count : this.likesarray.length,    
  
    };
  },
  props: ["likesarray"],
  
};
</script>
