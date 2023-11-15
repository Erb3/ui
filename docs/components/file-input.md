# File Input

A button you press to open the file explorer and make the user select a file.

<DemoContainer>
<FileInput
  :max-size="262144"
  accept="image/png,image/jpeg,image/gif,image/webp"
  class="btn"
  prompt="Upload icon"
>
  <UploadIcon />
</FileInput>
</DemoContainer>

```js
<FileInput
  :max-size="262144"
  accept="image/png,image/jpeg,image/gif,image/webp"
  class="btn"
  prompt="Upload icon"
>
  <UploadIcon />
</FileInput>
```
