<template>
  <div>
    <div class="row position" style="background-image: url('/background.jpg'); background-size: 100%; padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; width: 100%; position: relative; margin-top: 100px;" >
      <div class="position" style=" margin-top: 50px; padding-bottom: 0px; margin-bottom: 0px;">
        <h1 class="title" style="color: #ffffff;">Hi there, I'm Tinashe</h1>
      </div>
      <div class="position" style=" padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
        <h2 class="subtitle" style="color: #ffffff;">Welcome to my portfolio</h2>
      </div>
      <div class="profile-image position" style=" padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 100px;">
        <img class="image-circular" src="@/assets/tinashe.png">
      </div>
    </div>

    <div class="position" style="height: 50px;">
    </div>

    <div class="position div-spacing row nopadding">
      <div class="col-md-6">
        <p class="lead">
          Hello there, I'm Tinashe. Born in Marondera and grew up in Harare, I'm currently
          based in Izmir, Turkey. I like to write about my experiences, opinions and ideas.
          Interests and hobbies include, coding, sport, photography, making music, travelling,
          and writing. Last but not least, I like to taste and take pictures of different
          beers around the world.
        </p>
        <p class="lead">
          You probably guessed right already, Yes, I am a developer.  I have been learning
          JavaScript Frameworks lately so I decided to make this website as my first project in
          VueJS. If you are interested in how I made it,
          <router-link :to="'/how-i-developed-my-website'">Click Here</router-link>
        </p>
        <p class="lead">Have fun browsing through, and let me know if you find anything interesting!</p>
      </div>
      <div class="col-md-6 prof-container">
        <h2 class="subtitle">Profile</h2>
        <hr>
        <div class="row prof-blok">
          <div class="md-col-5" style="width: 20%; margin-left: 15px;">
            <p class="fonts-seven">Current</p>
          </div>
          <div class="md-col-6" style="width: 70%;">
            <p class="fonts-six">Support Engineer</p>
            <p class="fonts-six">Comstice Inc.</p>
            <p class="fonts-six">Izmir, Turkey</p>
            <p class="fonts-six">March 2018 - Present</p>
          </div>
        </div>
        <hr>
        <div class="row prof-blok">
          <div class="md-col-5" style="width: 20%; margin-left: 15px;">
            <p class="fonts-seven">Education</p>
          </div>
          <div class="md-col-6" style="width: 70%;">
            <p class="fonts-six">Bsc. in Computer Engineering</p>
            <p class="fonts-six">Izmir Institute of Technology</p>
            <p class="fonts-six">August 2018</p>
          </div>
        </div>
        <hr>
        <div class="row prof-blok">
          <div class="md-col-5" style="width: 20%; margin-left: 15px;">
            <p class="fonts-seven">Bio</p>
          </div>
          <div class="md-col-6" style="width: 70%;">
            <div class="row" style="margin-left: 0px;">
              <div style="width: 30%;">
                <p class="fonts-six">Full Name:</p>
              </div>
              <div style="width: 70%;">
                <p class="fonts-six">Tinashe Zvihwati</p>
              </div>
            </div>
            <div class="row" style="margin-left: 0px;">
              <div style="width: 30%;">
                <p class="fonts-six">Profession:</p>
              </div>
              <div style="width: 70%;">
                <p class="fonts-six">Computer Engineer</p>
              </div>
            </div>
            <div class="row" style="margin-left: 0px;">
              <div style="width: 30%;">
                <p class="fonts-six">Nationality:</p>
              </div>
              <div style="width: 70%;">
                <p class="fonts-six">Zimbabwean</p>
              </div>
            </div>
            <div class="row" style="margin-left: 0px;">
              <div style="width: 30%;">
                <p class="fonts-six">Current:</p>
              </div>
              <div style="width: 70%;">
                <p class="fonts-six">Izmir, Turkey</p>
              </div>
            </div>
            <div class="row" style="margin-left: 0px;">
              <div style="width: 30%;">
                <p class="fonts-six">Languages:</p>
              </div>
              <div style="width: 70%;">
                <p class="fonts-six">English, Shona, Turkish</p>
              </div>
            </div>
            <div class="row" style="margin-left: 0px;">
              <div style="width: 30%;">
                <p class="fonts-six">Travelled:</p>
              </div>
              <div style="width: 70%;">
                <p class="fonts-six">
                  South Africa,
                  United Arab Emirates,
                  Turkey,
                  Namibia,
                  Qatar,
                  Egypt,
                  Zambia,
                  Botswana,
                  Ethiopia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

