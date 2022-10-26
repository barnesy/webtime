<template>
  <Directory class="dark" bgColor="lightgrey" bgImage="url(/img/astronauts.png)">
    <template #page-header>
      <Header class="v2">
        <template>You could be<br/> our client</template>
      </Header>
    </template>

    <PageSection padding="8rem 3rem 8rem" class="center">
      <template #title>Our areas of focus</template>
      <CardGroup>
        <Card>
          <template #image>
            <g-image src="/img/scale.png" />
          </template>
          <template>Scale</template>
          <template #description>
            The ability to publish content across multiple large sites without sacrificing site speed or functionality.
          </template>
        </Card>
        <Card>
          <template #image>
            <g-image src="/img/multi-site.png" />
          </template>
          <template>Multi-Site</template>
          <template #description>
            Connecting style, functionality, and content accross multiple sights while maintaining a simple CMS.
          </template>
        </Card>
        <Card>
          <template #image>
            <g-image src="/img/multi-author.png" />
          </template>
          <template>Multi-Author</template>
          <template #description>
            Multiple authors can asynchronously update content with roles and permissions.
          </template>
        </Card>
        <Card>
          <template #image>
            <g-image src="/img/speed.png" />
          </template>
          <template>Speed and SEO</template>
          <template #description>
            Websites render as a hyprid of static and dynamic content to achieve high speeds at scale.
          </template>
        </Card>
        <Card>
          <template #image>
            <g-image src="/img/integrations.png" />
          </template>
          <template>Custom Integrations</template>
          <template #description>
            We can integrate with any platform you bring to the table, provided they have a documented API.
          </template>
        </Card>
        <Card>
          <template #image>
            <g-image src="/img/customization.png" />
          </template>
         <template>Customization at Scale</template>
         <template #description>
            We can ship braod sweeping style and content changes across the entire system with very little code.
          </template>
        </Card>
      </CardGroup>

    </PageSection>

    <PageSection bgColor="black" class="narrow dark center" padding="8rem 3rem 6rem">
      <template #title>Did we miss anything?</template>
      <p>We are a full service shop capable of building anything, however, the above are our key areas of focus.</p>
    </PageSection>

    <PageSection class="narrow center" padding="10rem 3rem">
      <template #title>Sounds like something you need?</template>
      <template><p>Great. We can build it. In fact, we're halfway done already.</p></template>
    </PageSection>
  </Directory>
</template>