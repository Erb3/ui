# Text Inputs

You write text into it.

<script setup>
import { ref } from "vue";
const inputText = ref(null)
</script>

<DemoContainer>
<input
    type="text"
    placeholder="Text input"
/>
</DemoContainer>

```vue
<input type="text" placeholder="Text input" />
```

<DemoContainer>
<div class="iconified-input">
  <SearchIcon/>
  <input
      v-model="inputText"
      type="text"
      placeholder="Text input"
  />
  <Button class="r-btn" @click="() => inputText = ''">
    <XIcon/>
  </Button>
</div>
</DemoContainer>

```js
<script setup>
import { ref } from "vue";
const inputText = ref(null);
</script>

<div class="iconified-input">
  <SearchIcon/>
  <input
    v-model="inputText"
    type="text"
    placeholder="Text input"
  />
  <Button @click="() => inputText = ''">
    <XIcon/>
  </Button>
</div>
```

<DemoContainer>
<div class="dropdown-input">
  <DropdownSelect
    v-model="value"
    :options="['Daily', 'Weekly', 'Monthly', 'Tomorrow', 'Yesterday', 'Today', 'Biweekly', 'Tuesday', 'January']"
    placeholder="Choose Frequency"
  />
  <div class="iconified-input">
    <SearchIcon/>
    <input
        v-model="inputText"
        type="text"
        placeholder="Text input"
    />
    <Button class="r-btn" @click="() => inputText = ''">
      <XIcon/>
    </Button>
  </div>
</div>
</DemoContainer>

```js
<script setup>
import { ref } from "vue";
const inputText = ref(null)
const value = ref(null)
</script>

<div class="dropdown-input">
  <DropdownSelect
    v-model="value"
    :options="['Daily', 'Weekly', 'Monthly', 'Tomorrow', 'Yesterday', 'Today', 'Biweekly', 'Tuesday', 'January']"
    placeholder="Choose Frequency"
  />
  <div class="iconified-input">
    <SearchIcon/>
    <input
      v-model="inputText"
      type="text"
      placeholder="Text input"
    />
    <Button class="r-btn" @click="() => inputText = ''">
      <XIcon/>
    </Button>
  </div>
</div>
```
