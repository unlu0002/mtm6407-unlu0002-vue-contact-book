
<template>

  <div class="app">

    <header>

      <h1>Contact Book</h1>

      <nav>

        <router-link to="/">Home</router-link> |

        <router-link to="/contact/new">Add New Contact</router-link>
        
      </nav>

    </header>


    <main>
      <router-view></router-view>
    </main>

  </div>

</template>



<style>

  .app {
    max-width: 1200px;

    margin: 0 auto;

    padding: 20px;
  }

  header {
    text-align: center;
    
    margin-bottom: 30px;
  }

  nav {
    margin-top: 15px;
  }

  nav a {
    color: #AAA;
    text-decoration: none;
    margin: 0 10px;
  }

  nav a.router-link-active {
    color: #00B300;
  }

  main {
    background: #E8F9FD;

    padding: 20px;
    
    border-radius: 8px;
  }
</style>