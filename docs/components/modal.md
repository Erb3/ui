# Modal

A modal is that shitty thing that pops above all your content to invite you to the mailing list.

<DemoContainer>
  <Button :action="() => this.$refs.confirmModal.show()">Show Confirm Modal</Button>
  <ConfirmModal
    ref="confirmModal"
    title="Are you sure you want to delete this project?"
    description="This will remove this project forever (a long time)."
    :has-to-type="true"
    proceed-label="Delete"
    confirmationText="I am stupid"
  />
</DemoContainer>

```vue
<Button :action="() => this.$refs.confirmModal.show()">Show Confirm Modal</Button>
<ConfirmModal
  ref="confirmModal"
  title="Are you sure you want to delete this project?"
  description="This will remove this project forever (a long time)."
  :has-to-type="true"
  proceed-label="Delete"
  confirmationText="I am stupid"
/>
```
