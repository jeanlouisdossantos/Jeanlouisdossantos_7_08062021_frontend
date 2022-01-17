<template>
    <div>
        <span>{{test}}</span>
        <span>{{likesarray}}</span>
    </div>
</template>
<script>


export default {
data(){
    return{
        test : "test de likes"
    }
    
    },
    props : ["likesarray"]    
}
</script>