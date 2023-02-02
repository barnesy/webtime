<template>
  <Directory class="" bgColor="lightgrey" bgImage="url(/img/astronauts-close.png)">
    <template #page-header>
      <Header class="v2">
        <template>Blog</template>

      </Header>
    </template>

    <PageSection padding="3rem">

      <CardGroup v-if="$page">
        <Card v-for="{ node } in $page.posts.edges" :key="node.id" :url="'/blog/' + node.slug">
          <template v-if="node.featuredImage" #image>
            <g-image :src="node.featuredImage.file.url" />
          </template>

          <template>
            {{ node.title }}
          </template>
        </Card>
      </CardGroup>

      <pager
        class="pager"
        linkClass="page-link"
        v-if="$page.posts.pageInfo.totalPages > 1"
        :info="$page.posts.pageInfo"
      />
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

<page-query>
  query Posts($page: Int) {
    posts: allContentfulBlogPost(sortBy: "date", order: DESC, perPage: 50, page: $page) @paginate {
      totalCount pageInfo {
        totalPages
        currentPage
      } edges {
        node {
          id
          title
          slug
          categories
          content
          publishedDate(format:"MMMM D, Y")
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }

    featured:allContentfulBlogPost(sortBy: "publishedDate", order: DESC, limit: 6, filter:{categories:{contains:"Featured"}}) {
    edges {
      node {
        id
        title
        slug
        categories
        publishedDate(format:"MMMM D, Y")
        featuredImage {
          description
          file {
            url
          }
        }
    	}
  	}
	}


  }


</page-query>

<script>
  import { Pager } from 'gridsome'

  export default {
     metaInfo() {
    return {
      title: "News",
      meta: [
        {
          name: 'description',
          content: ""
        },
        {
          property: 'og:title',
          content: ""
        },
        {
          property: 'og:description',
          content: ""
        },
        {
          property: 'og:image',
          content: ""
        },
        {
          property: 'og:url',
          content: ""
        },
      ],
    }
  },
    components: {
      Pager,
    },
  }
</script>