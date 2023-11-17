# Avatars

An avatar is an image representing a user.

<DemoContainer class="columns">
<Avatar alt="green flame" size="lg" circle src="https://github.com/Erb3.png" />
<Avatar size="md" src="https://github.com/Erb3.png" />
<Avatar size="sm" />
<Avatar size="xs" circle src="https://github.com/Erb3.png" />
</DemoContainer>

```js
<Avatar size="lg" circle src="https://github.com/Erb3.png" />
<Avatar size="md" src="https://github.com/Erb3.png" />
<Avatar size="sm" />
<Avatar size="xs" circle src="https://github.com/Erb3.png" />
```

## Source and alternative text

The `src` and `alt` props will be passed the the underlaying `img` element.
The alternative text (`alt`) is displayed if the image could not be loaded, along with being used by screenreaders.

## Circle mode

The avatar can also be made a full circle instead of a square with some border radius,
by including the `circle` boolean attribute.
Behind the scenes this uses `border-radius: 50%;`.

## Sizes

You can optionally specify the size of the avatar in the `size` prop.
The motivation for having sizes, is to update the border radius properly.

Avatars come in the following sizes:

| Code name | Readable name | Size   |
| --------- | ------------- | ------ |
| `lg`      | Large         | 9rem   |
| `md`      | Medium        | 6rem   |
| `sm`      | Small         | 3rem   |
| `xs`      | Extra small   | 1.5rem |
