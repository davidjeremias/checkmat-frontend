import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/Login.vue'
import CadastroEmpresa from '../views/modulos/empresa/CadastroEmpresa.vue'
import CadastroOperador from '../views/modulos/operador/CadastroOperador.vue'
import CadastroAluno from '../views/modulos/aluno/CadastroAluno.vue'
import Configuracao from '../views/configuracoes/Configuracao.vue'
import CancelarVenda from '../views/operacoes/CancelarVenda.vue'
import ConsultarVenda from '../views/operacoes/ConsultarVenda.vue'
import PagarMatricula from '../views/operacoes/PagarMatricula.vue'
import CadastroModalidade from '../views/modulos/modalidade/CadastroModalidade.vue'

Vue.use(VueRouter)

  const router = new VueRouter({
    mode:'hash',
    routes: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
      },
      {
        path: '/cadastroEmpresa',
        name: 'CadastroEmpresa',
        component: CadastroEmpresa,
        meta: { requiresAuth: true }
      },
      {
        path: '/cadastroOperador',
        name: 'CadastroOperador',
        component: CadastroOperador,
        meta: { requiresAuth: true }
      },
      {
        path: '/cadastroAluno',
        name: 'CadastroAluno',
        component: CadastroAluno,
        meta: { requiresAuth: true }
      },
      {
        path: '/configuracoes',
        name: 'Configuracao',
        component: Configuracao,
        meta: { requiresAuth: true }
      },
      {
        path: '/cancelarVenda',
        name: 'CancelarVenda',
        component: CancelarVenda,
        meta: { requiresAuth: true }
      },
      {
        path: '/consultarVenda',
        name: 'ConsultarVenda',
        component: ConsultarVenda,
        meta: { requiresAuth: true }
      },
      {
        path: '/pagarMatricula',
        name: 'PagarMatricula',
        component: PagarMatricula,
        meta: { requiresAuth: true }
      },
      {
        path: '/cadastroModalidade',
        name: 'CadastroModalidade',
        component: CadastroModalidade,
        meta: { requiresAuth: true }
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  })

  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        let auth = sessionStorage.getItem('token')
        if ((auth === null || auth === 'false') && to.path !== '/login') {
            console.log("Usuário não autenticado");
            next('/login')
        }else {
          next()
      }
    } else {
        next()
    }
  })

export default router
