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