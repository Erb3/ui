# Home

## Overview

`Erb3/ui` is Erb3's personal bag of Vue components! It is forked from Modrinth's [Omorphia], and the main differences are:

- No typesafety
- Less border radius

## Getting started

Follow the instructions on the [➜ **setup page** 🛠️](/setup).

## Documentation

The code highlighter used on the documentation has an issue where codeblocks aren't properly highlighter when using `vue`.
This is why some codeblocks are labeled as `javascript`, but it is actually just Vue code!

## Planned components

- Timeline

---

<VPTeamMembers size="small" :members="members" />

Modrinth created [Omorphia], which Erb3/ui is forked from.
Modrinth is in no way shape or form, affiliated with Erb3/ui.

[Omorphia]: https://github.com/modrinth/omorphia

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Erb3.png',
    name: 'Erb3',
    title: 'Creator of Erb3/ui',
    links: [
      { icon: 'github', link: 'https://github.com/Erb3' },
    ]
  },
  {
    avatar: 'https://www.github.com/modrinth.png',
    name: 'Modrinth®',
    title: 'Creator of Omorphia',
    links: [
      { icon: 'github', link: 'https://github.com/modrinth' },
    ]
  },
];
</script>
