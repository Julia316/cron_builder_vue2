<template>
  <div>
    <div class="well">
      <div class="well_question_icon">
        <span
          title="For example: value '16' means 'execute at the 16th, 32nd, and 48th minute of every hour'."
          >?</span
        >
      </div>
      {{ $parent.translate("Every") }}
      <input
        type="Number"
        @input="onChange"
        :value="value[1].split('/')[1]"
        min="0"
        max="60"
      />
      {{ $parent.translate("minute(s) from 5 through 59") }}
    </div>
    <div class="error_tips">
      <span v-if="is_minutes_invalid"> Please set a value between 5~59.</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      is_minutes_invalid: false,
    };
  },
  props: ["value"],
  methods: {
    onChange(e) {
      if (
        (e.target.value > 0 && e.target.value < 60) ||
        e.target.value === ""
      ) {
        let val = this.value;
        val[1] = e.target.value ? `0/${e.target.value}` : val[1];
        this.$emit("change-val", val);
        if (e.target.value < 5) {
          this.is_minutes_invalid = true;
        } else {
          this.is_minutes_invalid = false;
        }
      }
    },
  },
};
</script>
