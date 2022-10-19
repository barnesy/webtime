<template>
  <section>
    <div class="notification">
        <p>Prolly gonna have a line or two of text notifiying me of something, along with a close box or link.</p>
        <p><a href="#">Close</a></p>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss">
  .notification {
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: red;
    padding:1rem 2rem;

    a {
      color: white;
    }
  }
</style>
