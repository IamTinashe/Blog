<template>
  <div style="width: 100%;">
    <!--
      https://vuejsexamples.com/tag/menu/
      https://vuejsexamples.com/animated-menu-with-vue-js/
    -->
    <div class="container">
      <header class="header" style="float: right; z-index: 1;">
        <nav class="header__nav" style="z-index: 1;">
          <ul class="header__navbar">
            <li class="header__item">
              <a href="#" class="header__link">
                <transition name="slide-fade">
                  <button class="header--btn" v-if="show" key="on" @click="show = false">
                    <svg viewBox="0 0 24 24" class="header--icon">
                      <title>Close</title>
                      <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                      ></path>
                    </svg>
                  </button>
                  <button class="header--btn" v-else key="off" @click="show = true">
                    <svg viewBox="0 0 24 24" class="header--icon">
                      <title>Navigation Menu</title>
                      <path
                        d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
                      ></path>
                    </svg>
                  </button>
                </transition>
              </a>
              <transition name="dropdown">
                <div
                  class="header__dropdown-menu"
                  v-bind:class="{ active: show }"
                  v-if="show"
                  style="height: 500px;"
                >
                  <ul class="header__dropdown-menu-nav">
                    <li class="header__dropdown-menu-item">
                      <router-link :to="'/'" title="Home" class="header__dropdown-menu-link">
                        <div class="header__dropdown-menu-svg">
                          <i class="fa fa-home fa-2x"></i>
                        </div>
                        <div class="header__dropdown-menu-text">Home</div>
                      </router-link>
                    </li>
                    <li class="header__dropdown-menu-item">
                      <router-link
                        :to="'/profile'"
                        title="Profile"
                        class="header__dropdown-menu-link"
                      >
                        <div class="header__dropdown-menu-svg">
                          <i class="fa fa-id-card fa-1x"></i>
                        </div>
                        <div class="header__dropdown-menu-text">Profile</div>
                      </router-link>
                    </li>
                    <li class="header__dropdown-menu-item">
                      <router-link :to="'/blog'" title="Blog" class="header__dropdown-menu-link">
                        <div class="header__dropdown-menu-svg">
                          <i class="fa fa-book fa-1x"></i>
                        </div>
                        <div class="header__dropdown-menu-text">Blog</div>
                      </router-link>
                    </li>
                    <li class="header__dropdown-menu-item">
                      <router-link
                        :to="'/photography'"
                        title="Photography"
                        class="header__dropdown-menu-link"
                      >
                        <div class="header__dropdown-menu-svg">
                          <i class="fa fa-camera fa-1x"></i>
                        </div>
                        <div class="header__dropdown-menu-text">Photography</div>
                      </router-link>
                    </li>
                    <li class="header__dropdown-menu-item">
                      <router-link
                        :to="'/social'"
                        title="Social"
                        class="header__dropdown-menu-link"
                      >
                        <div class="header__dropdown-menu-svg">
                          <i class="fa fa-users fa-1x"></i>
                        </div>
                        <div class="header__dropdown-menu-text">Social</div>
                      </router-link>
                    </li>
                    <li class="header__dropdown-menu-item">
                      <router-link
                        :to="'/connect'"
                        title="Contact"
                        class="header__dropdown-menu-link"
                      >
                        <div class="header__dropdown-menu-svg">
                          <i class="fa fa-paper-plane fa-1x"></i>
                        </div>
                        <div class="header__dropdown-menu-text">Contact</div>
                      </router-link>
                    </li>
                    <hr>
                    <li class="header__dropdown-menu-item">
                      <router-link
                        :to="'/privacy-policy'"
                        title="Privacy Policy"
                        class="header__dropdown-menu-link"
                      >
                        <div class="header__dropdown-menu-svg">
                          <svg viewBox="0 0 512 512" class="header--icon">
                            <path
                              d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z"
                            ></path>
                          </svg>
                        </div>
                        <div class="header__dropdown-menu-text">Privacy Policy</div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>


<style>
</style>

