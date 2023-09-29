<script setup>
    import { ref } from 'vue'
    const UnitLevel1 = ref([
                "SIT101",
                "SIT102",
                "SIT103",
                "SIT104",
                "SIT105",
                "SIT113",
                "SIT172",
                "SIT182",
                "SIT192"
            ])
            const UnitLevel2 = ref([
                "SIT202",
                "SIT223",
                "SIT232",
                "SIT281",
                "SIT282",
                "SIT284"
            ])
            const UnitLevel3 = ref([
                "SIT321",
                "SIT374",
                "SIT378",
                "SIT379",
                "SIT382",
                "SIT384"
            ])


</script>


<template>
    <div>
        <h2>Units I have completed</h2>
            <table id="unitsCompleted">
                <tr>
                    <th>Level 1 Units</th>
                    <th>Level 2 Units</th>
                    <th>Level 3 Units</th>
                </tr>
                <tr>
                    <td><ul><li v-for="item in UnitLevel1">{{item}}</li></ul></td>
                    <td><ul><li v-for="item in UnitLevel2">{{item}}</li></ul></td>
                    <td><ul><li v-for="item in UnitLevel3">{{item}}</li></ul></td>
                </tr>
            </table>
    </div>

</template>

<style scoped>
    

</style>