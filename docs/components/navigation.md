# Navigation

Navigation is used to navigate around the website.

<script setup>
import { ref } from "vue";

const navRoutes = ref([
        {
          label: 'Avatars',
          href: './avatar.md',
        },
        {
          label: 'Buttons',
          href: './button.md',
        },
        {
          label: 'Cards',
          href: './card.md',
        },
        {
          label: 'Checkboxes',
          href: './checkbox.md',
        },
]);
</script>

<DemoContainer>
  <NavRow :links="navRoutes"/>
</DemoContainer>
