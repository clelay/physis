<template>
  <nav>
    <router-link to="/" id="titre">
      <img src="../src/assets/logoVert.png" alt="Logo entreprise" width="100" height="100"/>
      <h1>Physis Solutions</h1>
    </router-link>
    <router-link to="/mon-entreprise" class="nav-link">Mon entreprise</router-link>
    <router-link to="/mes-projets" class="nav-link">Mes projets</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav{
  display: flex;
  flex-direction: row;
  align-items: center;
}

#titre{
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: flex-start;
  align-items: center;
  color: #2c3e50;

}

.nav-link{
  text-decoration: none;
  color: #2c3e50;
  transition-duration: 0.4s;
  font-weight: bold;
  font-size: large;
  width: 12%;
  margin-left: 3%;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  border-radius: 2px;
}

.nav-link:hover{
  background-color: #4CAF50; /* Green */
  color: white;
}

</style>
