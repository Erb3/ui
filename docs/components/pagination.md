# Pagination

A pagination is used to have multiple "pages", like search results.
An alternative design to this would be to lazily load the content as the user scrolls.

<script setup>
import { ref } from "vue";

const currentPage = ref(1)

function switchPage(page) {
  currentPage.value = page
}
</script>
<DemoContainer style="background-color: var(--color-bg)">
<Pagination :page="currentPage" :count="100" @switch-page="switchPage" />
</DemoContainer>

```vue
<script setup>
import { ref } from "vue";

const currentPage = ref(1);

function switchPage(page) {
  currentPage.value = page;
}
</script>

<Pagination :page="currentPage" :count="100" @switch-page="switchPage" />
```
