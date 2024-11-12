Vue.component('recpatcha', {
  data: function () {
    return {
      show: false
    }
  },
  props: {
    showerror: Boolean,
  },
  template: `<div class="recaptcha-cover">
  <div class="recaptcha flex items-center px-3 py-2 pt-3 rounded-sm">
    <div class="w-3/4 text-sm">
      <div class="flex items-center cursor-pointer -mx-2" @click="show = !show">
        <div class="px-2">
          <div class="checkbox w-8 h-8 bg-white border-2 border-gray-400 rounded-sm hover:border-gray-600"></div>
        </div>
        <div class="px-2 punchline">
          <p>I'm not a robot</p>
        </div>
      </div>
    </div>
    <div class="recaptcha-info w-1/4 text-center text-gray-700">
      <div>
        <img class="w-2/4 mx-auto mb-1" src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="Recaptch logo">
        <p>reCAPTCHA</p>
      </div>
      <div>
        <a href="" class="hover:underline">Privacy</a> - <a href="" class="hover:underline">Terms</a>
      </div>
    </div>
  </div>
  <transition name="fade">
    <recpatcha-test v-if="show" :show="show"></recpatcha-test>
  </transition>
</div>`
});

Vue.component('recpatcha-test', {
  data: function () {
    return {
    }
  },
  props: {
    show: Boolean,
  },
  template: `<div class="recaptcha-test bg-white shadow m-2 p-2">
  <div class="bg-blue-600 text-white p-6">
    <p>Select the box with</p>
    <p class="sub font-bold">Correct captcha</p>
  </div>
  <div class="pt-2">
    <div class="flex flex-wrap">
      <div class="w-1/3 mb-2">
        <recpatcha class="nomargin"></recpatcha>
      </div>
      <div class="w-1/3 mb-2">
        <recpatcha class="nomargin"></recpatcha>
      </div>
      <div class="w-1/3 mb-2">
        <recpatcha class="nomargin"></recpatcha>
      </div>
      <div class="w-1/3 mb-2">
        <recpatcha class="nomargin"></recpatcha>
      </div>
      <div class="w-1/3 mb-2">
        <recpatcha class="nomargin"></recpatcha>
      </div>
      <div class="w-1/3 mb-2">
        <recpatcha class="nomargin"></recpatcha>
      </div>
      <div class="w-1/3">
        <recpatcha class="nomargin"></recpatcha>
      </div>
      <div class="w-1/3">
        <recpatcha class="nomargin"></recpatcha>
      </div>
      <div class="w-1/3">
        <recpatcha class="nomargin"></recpatcha>
      </div>
      <div class="w-full text-center">
         <p v-if="show" class="text-red-700 mt-2">Please check the correct captcha.</p>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between pt-2">
    <div class="flex">
      <div>
        <img src="https://www.gstatic.com/recaptcha/api2/refresh_black.png" alt="Refresh icon" class="w-10 h-10 cursor-pointer">
      </div>
      <div>
        <img src="https://www.gstatic.com/recaptcha/api2/audio_black.png" alt="Audio icon" class="w-10 h-10 cursor-pointer">
      </div>
      <div>
        <img src="https://www.gstatic.com/recaptcha/api2/info_black.png" alt="Info icon" class="w-10 h-10 cursor-pointer">
      </div>
    </div>
    <div>
      <button type="button" class="bg-blue-600 text-white px-6 py-3 uppercase rounded cursor-pointer">Verify</button>
    </div>
  </div>
</div>`
});

new Vue({ el: '#recaptcha-app' })