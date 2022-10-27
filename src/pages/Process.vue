<template>
  <Directory class="dark" bgColor="lightgrey" bgImage="url(/img/rainbow-ladies.png)">
    <template #page-header>
      <Header class="v2">
        <template>Our Process</template>
        <template #support>Plan, build, deploy, repeat.</template>
      </Header>
    </template>

    <PageSection padding="8rem 3rem 8rem" class="center narrow">

        <h2>Information Architecture</h2>

        <p>In general, we start the process reviewing unstructured content. This is usually information that is in long form documents that are largely unstructured or disconnected. We use <a href="https://www.thinkwithgoogle.com/marketing-strategies/micro-moments/zero-moment-truth/">Google's Zero Moment of Truth</a> to structure the content into a hierarchy that supports the company's domain authority.</p>

        <g-image src="/img/process.png" />

        <h2>Establish Goals</h2>
        <p>During this phase we establish goals for the business that are concrete, like, "How many people turned on a certain feature?" or "How many customers signed up for a paid account?" </p>

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
              Every company collects data. We normalize and map legacy data to our system.
            </template>
          </Card>
          <Card>
            <template #image>
              <g-image src="/img/integrations.png" />
            </template>
            <template>Integrations</template>
            <template #description>
              Our system is set up to integrate from anywhere to anywhere. We build custom integrations to support any use case.
            </template>
          </Card>
          <Card>
            <template #image>
              <g-image src="/img/automations.png" />
            </template>
            <template>Automations</template>
            <template #description>
              We use automations to remove repetitive tasks like normilizations and scheduled messaging.
            </template>
          </Card>
          <Card class="large">
            <template #image>
              <g-image src="/img/distrobution.png" />
            </template>
            <template>Deployment</template>
            <template #description>
              With our CI/CD pipeline via Netlify deployment is seamless. Every code commit and change of content triggers deploys.
            </template>
          </Card>
        </CardGroup>

        <h2>Measure Goal Completions</h2>
        <p>Measuring defined goals is essential for the feedback loop. We make adjustments, run A/B tests, and try new ways to impact our goal conversion rates.</p>

        <g-image src="/img/contextual-ui.png" />

    </PageSection>

    <CallToAction/>
  </Directory>
</template>