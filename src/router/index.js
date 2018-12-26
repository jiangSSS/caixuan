import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Center from '@/components/center'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect:"/gameProject"
    },
    {
      path: "/gameProject",
      name: "project",
      component: () => import("@/views/join_game/game_project.vue"),
      meta: {
        title: "参赛管理"
      }
    },
    {
      path: "/comment",
      name: "comment",
      component: () => import("@/views/comment/comment.vue"),
      meta: {
        title: "专家评语"
      }
    },
    {
      path: "/release",
      name: "release",
      component: () => import("@/views/team/release/release.vue"),
      meta: {
        title: "发布风采"
      }
    },
    {
      path: "/teamDetail",
      name: "teamDetail",
      component: () => import("@/views/team/teamDetail/teamDetail.vue"),
      meta: {
        title: "团队风采"
      }
    },
    {
      path: "/invitedTeacher",
      name: "invitedTeacher",
      component: () => import("@/views/team/invitedTeacher/invitedTeacher.vue"),
      meta: {
        title: "邀请导师"
      }
    },
    
  ]
})
