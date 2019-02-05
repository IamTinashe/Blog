<template>
  <header>
    <div class="navbar" style="background: #ffffff; z-index: 1; position: fixed; width: 100%;">
      <div class="container d-flex justify-content-center" style="margin-top: 50px; margin-bottom: 0px;">
        <router-link
          :to="'/'"
          class="navbar-brand d-flex align-items-center"
          style="font-size: 15px;" title="Home">
          Home
        </router-link>
        <router-link
          :to="'/profile'"
          class="navbar-brand d-flex align-items-center"
          style="font-size: 15px;" title="Profile">
          Profile
        </router-link>
        <router-link
          :to="'/blog'"
          class="navbar-brand d-flex align-items-center"
          style="font-size: 15px;" title="Profile">
          Blog
        </router-link>
        <router-link
          :to="'/photography'"
          class="navbar-brand d-flex align-items-center"
          style="font-size: 15px;" title="Photography">
          Photography
        </router-link>
        <router-link
          :to="'/videos'"
          class="navbar-brand d-flex align-items-center"
          style="font-size: 15px;" title="Videos">
          Videos
        </router-link>
        <router-link
          :to="'/music'"
          class="navbar-brand d-flex align-items-center"
          style="font-size: 15px;" title="Music">
          Music
        </router-link>
        <router-link
          :to="'/connect'"
          class="navbar-brand d-flex align-items-center"
          style="font-size: 15px;" title="Contact">
          Contact
        </router-link>
      </div>
    </div>
  </header>
</template>