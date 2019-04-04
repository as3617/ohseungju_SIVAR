<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hi. c2w2m2 is lJC(이주창)

    </p>
    <h3>This blog is c2w2m2's blog</h3>
    <ul>
      <li><a href="http://c2w2m2.com" target="_blank" rel="noopener">BLooooog</a></li>
    </ul>
    <h3></h3>
    <ul>

    </ul>
    <h3></h3>
    <ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #09e281;
}
</style>
