<template>
<div>
    <div class="well">   
        {{$parent.translate('Cron Expression')}} <input type="text" @input="onChange" :value="this.value.toString().replace(/,/g,' ').replace(/!/g, ',')" />
    </div>
    <div class="cron_help_link">
        Please check <a href="http://www.quartz-scheduler.org/documentation/quartz-2.2.x/tutorials/tutorial-lesson-06.html" target="_blank">Cron reference</a> for formatting help
    </div>   
</div>
</template>
<script>

export default {
    props:['value'],
    methods: {
        onChange(e) {
            let val = e.target.value.replace(/,/g, '!').split(" ");
            this.$emit("change-val", val);
        },
    }
}
</script>
