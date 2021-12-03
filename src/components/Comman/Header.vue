<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            
          </ul>
          <i class="fas fa-bars fa-2x" @click.prevent="showSidePanel = !showSidePanel"></i>
        </div>
      </div>
    </nav>
    <md-drawer 
      :md-right = "true"
      :md-active.sync = "showSidePanel">
      <md-list-item>
        <span class="md-list-item-text">Inbox</span>
      </md-list-item>
      <md-list-item>
        <span class="md-list-item-text">Sent Mail</span>
      </md-list-item>
      <md-list-item>
        <span class="md-list-item-text">Trash</span>
      </md-list-item>
      <md-list-item>
        <span class="md-list-item-text">Spam</span>
      </md-list-item>
    </md-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidePanel: false
    }
  }
}
</script>

<style scoped>
  md-list-item {
    font-size: 55px;
    padding: 37%;
  }

  md-list-item span {
    padding-left: 40px;
  }
</style>