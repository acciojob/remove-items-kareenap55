//your JS code here. If required.
<script>
  function removeSelectedColor() {
    const select = document.getElementById('colorSelect');
    const selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
      select.remove(selectedIndex);
    }
  }
</script>
