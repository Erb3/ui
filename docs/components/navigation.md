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

There is also a navigation that stacks.

<DemoContainer>
  <NavStack>
  <h1>Components</h1>
  <NavStackItem label="Avatars" link="./avatar.md" />
  <NavStackItem label="Buttons" link="./buttons.md" />
  <NavStackItem label="Cards" link="./cards.md" />

  <h2>Checkboxes</h2>
  <NavStackItem label="Checkboxes" link="./checkboxes.md" />
  </NavStack>
</DemoContainer>
