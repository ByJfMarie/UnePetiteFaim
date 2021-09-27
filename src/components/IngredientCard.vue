<template lang="fr">
    <div v-bind:class="{'w-auto min-w-20 min-h-16 h-auto': clicked}" v-if="last == false" class="ingredient flex flex-col justify-center items-center m-1 p-2 bg-red-50 rounded-xl w-20 h-16">
        <img :src="photo" alt="" class="w-10 rounded-full">
        <span class="ingredient-description text-xs">{{name}}</span>
        <span v-if="measure != ''" class="text-xs">{{measure}}</span>
    </div>
    <div v-else class="ingredient flex flex-col justify-center items-center m-1 p-2 bg-red-50 rounded-xl w-20 h-16">
        <span class="text-3xl text-red-400">+{{more}}</span>
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
        photo:{
            type: String,
            required: true
        },
        last: {
            type: Boolean,
            default: false
        },
        more: {
            type: Number,
        },
        clicked: {
            type: Boolean,
            default: false
        },
        measure: {
            type: String,
            default: ""
        }
    }

}
</script>
<style lang="">
    
</style>