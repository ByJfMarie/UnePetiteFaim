<template lang="fr">
    <div v-if="last == false" class="ingredient flex flex-col justify-center items-center m-1 p-2 bg-red-50 rounded-xl w-20 h-16">
        <span class="text-lg">{{emoji}}</span>
        <span class="ingredient-description text-xs">{{name}}</span>
    </div>
    <div v-else class="ingredient flex flex-col justify-center items-center m-1 p-2 bg-red-50 rounded-xl w-20 h-16">
        <span class="text-3xl text-red-400">+3</span>
    </div>
</template>
<script>
export default {
    name: 'IngredientCard',
    props: {
        name:{
            type: String,
            required: true
        },
        emoji:{
            type: String,
            required: true
        },
        last: {
            type: Boolean,
            default: false
        }
    }

}
</script>
<style lang="">
    
</style>