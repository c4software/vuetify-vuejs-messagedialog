# vuetify-vuejs-messagedialog

[![npm version](https://badge.fury.io/js/vuetify-vuejs-messagedialog.svg)](https://www.npmjs.com/package/vuetify-vuejs-messagedialog)

Vuetify VueJS message dialog Component.

## Installation

```sh
npm install vuetify-vuejs-messagedialog --save
```

## Usage

```vue
<template>
  <messageDialog
    v-model="showConfirm"
    title="Oh Snap !"
    text="Sorry but, an error as occured…"
    closeText="Close"
    v-on:closeAction="() => this.showConfirm = false"
  />
</template>

<script>
  import Vue from 'vue';
  import messageDialog from 'vuetify-vuejs-messagedialog';
  Vue.use(messageDialog);

  export default {
    name: 'example'
    data(){
      return {
        "showConfirm": true
      }
    }
  }
</script>
```
