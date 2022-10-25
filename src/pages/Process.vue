<template>
  <Directory bgColor="lightgrey" bgImage="url(/img/roads.png)">
    <template #page-header>
      <Header class="v2">
        <template>Our Process</template>
        <template #support>Plan, deploy, plan, deploy</template>
      </Header>
    </template>

    <PageSection padding="8rem 3rem 8rem" class="center narrow">

        <h2>Information Architecture</h2>

        <p>In general we start the process reviewing unstructured content. This is usually information that is in long form documents that are largely unstructured or disconnected. We use Google's Zero Moment of Truth to structure the content into a heirarchy that supports the company's domain authority.</p>

        <g-image src="/img/process.png" />

        <h2>Establish Goals</h2>
        <p>During this phase we establish goals for the business that are concrete e.i.: How many people turned on a certain feature or signed up for a paid account. </p>

        <h2>Wireframes</h2>

        <p>We use our component library to piece together wireframes that accomidate the heirarchy we have defined. There are rules to follow for each kind of content: </p>

        <ul>
          <li>Broad to specific</li>
          <li>High-priority to low-priority</li>
          <li>Content of equal priority gets the same ui</li>
          <li>Directories link to terminal pages</li>
          <li>Terminal pages are long form</li>
          <li>No orphaned content</li>
        </ul>

        <g-image src="/img/structure.png" />

        <CardGroup>
          <Card>
            <template #image>
              <g-image src="/img/data-import.png" />
            </template>
            <template>Data Imports</template>
            <template #description>
              <p>Every company comes with data. We normalize and map legacy data to our system and existing models.</p>
            </template>
          </Card>
          <Card>
            <template #image>
              <g-image src="/img/integrations.png" />
            </template>
            <template>Integrations</template>
            <template #description>
              <p>Our system is set up to integrate from anywhere to anywhere. We build custom integrations to support any use case.</p>
            </template>
          </Card>
          <Card>
            <template #image>
              <g-image src="/img/automations.png" />
            </template>
            <template>Automations</template>
            <template #description>
              <p>We use automations to remove repetitive tasks like normilizations and scheduled messaging.</p>
            </template>
          </Card>
          <Card class="large">
            <template #image>
              <g-image src="/img/distrobution.png" />
            </template>
            <template>Deployment</template>
            <template #description>
              <p>With our CI/CD pipeline via Netlify deployment is seemless.</p>
            </template>
          </Card>
        </CardGroup>

        <h2>Measure Goal Completions</h2>
        <p>Measuring defined goals is essential for the feedback loop. We make adjustments, run A/B test, and try new ways of effecting our goal conversion rates.</p>

        <g-image src="/img/contextual-ui.png" />

    </PageSection>

    <PageSection class="narrow center dark" bgColor="black" padding="10rem 3rem">
      <template #title>Sounds like something you need?</template>
      <template><p>Great. We can build it. In fact, we're halfway done already.</p></template>
    </PageSection>
  </Directory>
</template>