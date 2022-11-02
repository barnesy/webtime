<template>
  <Directory class="" bgColor="lightgrey" bgImage="url(/img/astronauts-close.png)">
    <template #page-header>
      <Header class="v2">
        <template>Make Contact</template>

      </Header>
    </template>

    <PageSection padding="3rem 3rem 0rem" class="center narrow">

      <iframe height="500px" width="300px" src="https://cdn.forms-content.sg-form.com/6a59ce8d-5553-11ed-a0e1-3ede4b1a4f07"/>

    </PageSection>

  </Directory>
</template>

<style lang="scss" scoped>
  iframe {
    border: none;
    width: 100%;
  }

  .directory {
    background-color: white;
    background-image: url('/img/orbit.svg');
    background-size: 6%;
  }

  form {
    width: 100% !important;
  }
</style>