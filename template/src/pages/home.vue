<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>F7-Vue</f7-nav-title>
    </f7-navbar>
    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
    <f7-block-title>Cordova</f7-block-title>
    <f7-block strong>
      <p>{{token}}</p>
    </f7-block>
    <f7-block-title>Vuex</f7-block-title>
    <f7-block strong>
      <p>
        <f7-row>
          <f7-col><f7-button @click="handleDecrease">Decrease</f7-button></f7-col>
          <f7-col><h3 style="text-align: center; margin: 0">{{count}}</h3></f7-col>
          <f7-col><f7-button @click="handleIncrease">Increase</f7-button></f7-col>
        </f7-row>
      </p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/dynamic-route/blog/blogId_1/post/postId_2/" title="DynamicRoutePage"></f7-list-item>
    </f7-list>
    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { deviceReady } from '@workplus/codash';
import { IS_MOCK_MODE, getAccessToken } from '@/shared/cordova';

export default {
  data() {
    return {
      token: '',
    };
  },
  computed: {
    ...mapGetters('example', {
      count: 'getCount',
    }),
  },
  methods: {
    ...mapActions('example', ['decrease', 'increase']),
    handleIncrease() {
      this.$store.dispatch('example/increase');
    },
    handleDecrease() {
      this.$store.dispatch('example/decrease');
    },
  },
  mounted() {
    deviceReady({ isMock: IS_MOCK_MODE })
      .then(getAccessToken)
      .then((res) => {
        this.token = res.data;
      });
  },
}
</script>
