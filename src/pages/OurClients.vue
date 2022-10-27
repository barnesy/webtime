<template>
  <Directory class="dark" bgColor="lightgrey" bgImage="url(/img/astronauts.png)">
    <template #page-header>
      <Header class="v2">
        <template>You could be<br/> our client</template>
      </Header>
    </template>

    <PageSection padding="8rem 3rem 8rem" class="center">
      <template #title>Are these important to you?</template>
      <p>This is what we do best:</p>
      <CardGroup>
        <Card>
          <template #image>
            <g-image src="/img/scale.png" />
          </template>
          <template>Scale</template>
          <template #description>
            The ability to publish content across multiple sites without sacrificing speed.
          </template>
        </Card>
        <Card>
          <template #image>
            <g-image src="/img/multi-site.png" />
          </template>
          <template>Multi-Site</template>
          <template #description>
            Style, functionality, and content across multiple sites with a simple CMS.
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
            Site speed trumps theatrics and code that cause heavy page loads.
          </template>
        </Card>
        <Card>
          <template #image>
            <g-image src="/img/integrations.png" />
          </template>
          <template>Custom Integrations</template>
          <template #description>
            We can integrate with any platform with an API.
          </template>
        </Card>
        <Card>
          <template #image>
            <g-image src="/img/customization.png" />
          </template>
         <template>Customization at Scale</template>
         <template #description>
            We can ship style and content changes across all sites simultaneosly.
          </template>
        </Card>
      </CardGroup>

    </PageSection>

    <PageSection bgColor="black" class="narrow dark center" padding="8rem 3rem 6rem">
      <template #title>Did we miss anything?</template>
      <p>We are a full service shop capable of building anything, however, the above are our key areas of focus.</p>
    </PageSection>

    <CallToAction/>
  </Directory>
</template>