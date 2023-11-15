# Dropdown

Thing expands downwards and you can choose one of the options.

<script setup>
import { ref } from "vue";

const value = ref(null);
const value2 = ref(null);
const value3 = ref(null);
</script>

<DemoContainer>
  <DropdownSelect
    v-model="value1"
    :options="['Daily', 'Weekly', 'Monthly', 'Tomorrow', 'Yesterday', 'Today', 'Biweekly', 'Tuesday', 'January']"
    placeholder="Choose Frequency"
  />
  <DropdownSelect
    v-model="value2"
    :options="['Daily', 'Weekly', 'Monthly', 'Tomorrow', 'Yesterday', 'Today', 'Biweekly', 'Tuesday', 'January']"
    placeholder="Choose Frequency"
    render-up
  />
  <DropdownSelect
    v-model="value3"
    :options="['Daily', 'Weekly', 'Monthly', 'Tomorrow', 'Yesterday', 'Today', 'Biweekly', 'Tuesday', 'January']"
    placeholder="Choose Frequency"
    disabled
  />
</DemoContainer>

```vue
<DropdownSelect
  v-model="value"
  :options="[
    'Daily',
    'Weekly',
    'Monthly',
    'Tomorrow',
    'Yesterday',
    'Today',
    'Biweekly',
    'Tuesday',
    'January',
  ]"
  placeholder="Choose Frequency"
  render-up
/>
```
