<template>
  <Directory class="dark" bgColor="lightgrey" bgImage="url(/img/yarn.png)">
    <template #page-header>
      <Header class="v2">
        <template>Multi-site management<br/> made for scale</template>
        <template #support><Button url="/make-contact">Get Started</Button></template>

      </Header>
    </template>


    <PageSection padding="8rem 3rem 8rem" class="narrow center">
        <template #title>A set of systems</template>
        <p>All you have to do is add content and pick where to publish.</p>
    </PageSection>

    <PageSection padding="0rem 3rem 3rem">
      <Split>
        <template>
          <h2>Consistency</h2>
          <p>A component-based design system quickly creates consistent design accross all sites and applications you own.</p>
        </template>
        <template #image>
          <g-image src="/img/components.png" />
        </template>
      </Split>

      <Split class="flip" padding="6rem 0">
        <template>
          <h2>Accessibility</h2>
          <p>User Experience should not be an afterthought. We have designed a system to keep your information both searchable and accessible.</p>
          <p><strong>Did you know: </strong><a href="https://www.wsj.com/articles/lawsuits-over-digital-accessibility-for-people-with-disabilities-are-rising-11626369056">lawsuits for websites that fail accessibility requirements</a> are on the rise?</p>
        </template>
        <template #image>
          <g-image src="/img/accessibility.png" />
        </template>
      </Split>


      <Split>
        <template>
          <h2>Structured Content</h2>
          <p>We process your content and architect it for accessibility and search.</p>
          <p>This structure is mapped to our component library, wireframed in Figma, and deployed in code.</p>
        </template>
        <template #image>
          <g-image src="/img/process.png" />
        </template>
      </Split>

      <Split class="flip" padding="6rem 0">
        <template>
          <h2>Speed</h2>
          <p>
            Pages load fast, respond fast, and avoid the technical debt created by heavy systems.
          </p>
        </template>
        <template #image>
          <g-image src="/img/speed.png" />
        </template>
      </Split>
    </PageSection>

    <PageSection class="narrow center">
      <template #title>Customized with any content type</template>

      <template>
        <p>Don't let your CMS dictate your content. Deploy anything you can imagine: blog posts, evergreen articles, video posts, video series, data visualization, interactive media, maps.</p>

        <g-image src="/img/content.png" />
      </template>

    </PageSection>

    <PageSection class="narrow center dark" bgColor="black">
      <template #title>Distributed to one or more sites you own.</template>

      <template>
        <p>Multi-site content distribution: create once, syndicate to multiple sites.</p>

        <g-image src="/img/distrobution.png" />
      </template>

    </PageSection>


    <PageSection class="narrow center">
      <template #title>Built on top of</template>

      <GridRow>
        <GridItem>
          <img src="/img/figma.svg" />
        </GridItem>
        <GridItem>
          <img src="/img/contentful.svg" />
        </GridItem>
        <GridItem>
          <img src="/img/vuejs.svg" />
        </GridItem>
        <GridItem>
          <img src="/img/gridsome.svg" />
        </GridItem>
        <GridItem>
          <img src="/img/twilio.svg" />
        </GridItem>
        <GridItem>
          <img src="/img/sendgrid.svg" />
        </GridItem>
        <GridItem>
          <img src="/img/netlify.png" />
        </GridItem>
        <GridItem>
          <img src="/img/github.png" />
        </GridItem>
      </GridRow>

    </PageSection>

    <PageSection class="center">
      <template #title>Sounds like something you need?</template>
      <template>
        <p>
          Great. We can build it. In fact, we're halfway done already.
        </p>
        <Button url="/make-contact">Get Started</Button>
      </template>
    </PageSection>
  </Directory>
</template>

<style lang="scss" scoped>
  .page-header {
    background-position: 0 88%;
  }
</style>