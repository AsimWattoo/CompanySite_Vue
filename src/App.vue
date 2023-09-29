<template>
  <div class="main">
    <MenuBar/>
    <div class="content">
      <RouterView>
      </RouterView>
    </div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import './assets/sass/style.scss'

export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  font-family: Exo2;
}

.main {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}

.content {
  padding: 0em;
}

</style>
