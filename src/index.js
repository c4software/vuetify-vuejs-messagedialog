import VuetifyMessageDialog from './component/VuetifyMessageDialog';

export default {
    install(Vue) {
        Vue.component('messageDialog', VuetifyMessageDialog);
    },
};

export { VuetifyMessageDialog };