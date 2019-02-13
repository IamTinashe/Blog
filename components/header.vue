<template>
  <div>
    <Slide right noOverlay>
      <router-link :to="'/'" title="Home">
        <span>Home</span>
      </router-link>
      <router-link :to="'/profile'" title="Profile">
        <span>Profile</span>
      </router-link>
      <router-link :to="'/blog'" title="Blog">
        <span>Blog</span>
      </router-link>
      <router-link :to="'/photography'" title="Photography">
        <span>Photography</span>
      </router-link>
      <router-link :to="'/social'" title="Social">
        <span>Social</span>
      </router-link>
      <router-link :to="'/connect'" title="Contact">
        <span>Contact</span>
      </router-link>
    </Slide>
  </div>
</template>
