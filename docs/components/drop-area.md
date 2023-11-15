# Drop Area

An area where you can drag files onto. Well used in conjunction with the [file input](./file-input)

<script setup>
import { ref } from "vue";

const files = ref([])
</script>

<DemoContainer>
<DropArea accept="*" @change="files">
    <InfoIcon /> Drag a file onto this page
</DropArea>
</DemoContainer>

```vue
<InfoIcon />
Drag a file onto this page
<DropArea accept="*" />
```
