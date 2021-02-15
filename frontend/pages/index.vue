<template>
  <div class="container">
    <div>
      <div v-for="article in articles"
      v-bind:key="article.id">
        <div class="article">
          <h1 class="article__title">
            {{ article.title }}
          </h1>

          <p class="article__description">
            {{ article.description }}
          </p>

          <div class="article__cover">
            <img :src="'http://localhost:1337' + article.cover.url" alt="Cover image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articleQuery } from '~/graphql/query'

export default {
  data() {
    return {
      articles: [],
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articleQuery,
    }
  } 
}
</script>

<style>

.article {
  font-family: 'Avenir', Arial, sans-serif;
}

.article__title {
  font-size: 80px;
  font-weight: 900;
}

.article__description {
  font-size: 55px;
  font-weight: 500;
}

.article__image {

}

</style>
