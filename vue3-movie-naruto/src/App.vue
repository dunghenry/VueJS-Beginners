<template>
  <main>
    <router-view/>
  </main>
  
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
  &::selection{
    background: transparent(#42B883, 0.5);

  }
}
body{
  background-color: #35495E;
}
a{
  text-decoration: none;
}

</style>
