### vue2-cron-builder

Simple vue component to generate cron expression

Copy from https://www.npmjs.com/package/vue-cron-builder and modified to use vue v2.6.11

original author is Sojin antony

### how to use

install `npm install vue2-cron-builder`

```javascript
<template>
  <Cron showResultCron="true" :cron="cron" showResultText="true" @cron-change="valChanged"/>
</template>

<script>
import Cron from 'vue-cron-builder'
import 'vue-cron-builder/dist/cron.css';

export default {
  name: 'App',
  components: {
    Cron
  },
  data() {
    return {
      cron : '0 0 4 ? * MON *',
    }
  },
  methods: {
    valChanged(val) {
      this.cron = val
    }
  },
}
</script>
```

### Props
| Prop | Description | Default | Mandatory
| --- | --- | -- | -- |
| cron | cron expression  |  |  No |
| cron-change |  |  | Yes
| showResultText | show in readable text format | false | No
| showResultCron | show cron expression | false | No
| translation | translation object | default translation(en) | No
| locale | locale for cronstrue | en | No
| options | Options for Cron component, *Must pass a valid cron value for available headers | All available headers | No


**translation**

Expects a method. Use this prop for localization support. `vue-cron-builder` will use this values for every key. List of keys are available [here](https://github.com/sojinantony01/cron-generator-vue/tree/master/src/lib/localization/translation.json)

`locale` option should be set for correct `ResultText` translation. Please visit [cronstrue](https://github.com/bradymholt/cRonstrue) for supported locales.

## Options

**options.headers**

```
import HEADER  from 'vue-cron-builder/dist/header';

const options = {
  headers: [HEADER.MONTHLY, HEADER.WEEKLY, HEADER.MINUTES, HEADER.HOURLY, HEADER.DAILY, HEADER.CUSTOM]
};

for more info, please check: https://github.com/sojinantony01/cron-generator-vue




