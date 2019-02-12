<template>
  <Slide>
    <router-link
      :to="'/'"
      class="navbar-brand d-flex align-items-center"
      style="font-size: 15px;"
      title="Home"
      id="Home"
    >
      <span>Home</span>
    </router-link>
    <router-link
      :to="'/profile'"
      class="navbar-brand d-flex align-items-center"
      style="font-size: 15px;"
      title="Profile"
      id="Profile"
    >
      <span>Profile</span>
    </router-link>
    <router-link
      :to="'/blog'"
      class="navbar-brand d-flex align-items-center"
      style="font-size: 15px;"
      title="Blog"
      id="Blog"
    >
      <span>Blog</span>
    </router-link>
    <router-link
      :to="'/photography'"
      class="navbar-brand d-flex align-items-center"
      style="font-size: 15px;"
      title="Photography"
      id="Photography"
    >
      <span>Photography</span>
    </router-link>
    <router-link
      :to="'/social'"
      class="navbar-brand d-flex align-items-center"
      style="font-size: 15px;"
      title="Social"
      id="Social"
    >
      <span>Social</span>
    </router-link>
    <router-link
      :to="'/connect'"
      class="navbar-brand d-flex align-items-center"
      style="font-size: 15px;"
      title="Contact"
      id="Contact"
    >
      <span>Contact</span>
    </router-link>
  </Slide>
</template>

<style>
    .bm-burger-button {
      position: absolute;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-button.hidden {
      display: none;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-cross-button.hidden {
      display: none;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>