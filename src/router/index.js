import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChatRoom from "@/components/ChatRoom";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/ChatRoom',
      name: 'ChatRoom',
      component: ChatRoom
    }
  ]
})
