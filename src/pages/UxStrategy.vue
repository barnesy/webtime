<template>
  <Directory bgColor="lightgrey" bgImage="url(/img/roads.png)">
    <template #page-header>
      <Header class="v2">
        <template>Design for Scale</template>
        <template #support>Designing the user experience requires us to be the glue between design and development, and requires deep knowledge of the consequenses of our decisions.</template>
      </Header>
    </template>

    <PageSection padding="8rem 3rem 8rem" class="center">
        <template #title>System Design</template>
        <p>We are creating something dynamic. The work must also be dynamic. We must have in mind how each decision cascades to create our final product and what affects our ability to scale. We can accomplish this through aligning on guiding principles and creating flexible systems.</p>

        <g-image src="/img/components.png" />

        <p>We can scale this system to support a set of websites that share a common design, a hierarchy of content, and goals for the user. This allows us to affect change across sites in a way that is extremely streamlined.</p>

        <g-image src="/img/structure.png" />

        <p>We can use this system to build contextual UIs. While the development can be more complex, we gain a simplified design and easier pathways for the user.</p>

        <g-image src="/img/contextual-ui.png" />
    </PageSection>

    <PageSection class="center" bgColor="lightgrey" padding="6rem 3rem 6rem">
      <template #title>Design Guide Stones</template>
      <template>
        <ul>
          <li>Beautiful is better than ugly.</li>
          <li>Explicit is better than implicit.</li>
          <li>Simple is better than complex.</li>
          <li>Complex is better than complicated.</li>
          <li>Sparse is better than dense.</li>
          <li>Readability counts.</li>
          <li>Special cases aren't special enough to break the rules.</li>
          <li>In the face of ambiguity, refuse the temptation to guess.</li>
          <li>If the implementation is hard to explain, it's a bad idea.</li>
          <li>If the implementation is easy to explain, it may be a good idea.</li>
        </ul>
      </template>
    </PageSection>

    <PageSection class="narrow center dark" bgColor="black">
      <template #title>Broad to Specific</template>
      <template>
        <p>We organize information from broad to specific, from high priority to low priority. Google tells us that structured internet content should start broad in directories of information that lead us into more dense (long form) destinations of content.</p>

        <g-image src="/img/ux-flow.png" />
      </template>
    </PageSection>

    <CallToAction/>
  </Directory>
</template>
