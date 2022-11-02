<template>
  <Directory bgColor="lightgrey" bgImage="url(/img/roads.png)">
    <template #page-header>
      <Header class="v2">
        <template>Experimental</template>
        <template #support>SVG experiments.</template>
      </Header>
    </template>

    <PageSection padding="8rem 3rem 8rem" class="center">

      <Animation />

    </PageSection>

    <CallToAction />
  </Directory>
</template>