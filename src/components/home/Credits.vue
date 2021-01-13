<template>
  <div>
    <div class="credits">
      Website maintained by
      <a href="https://github.com/ArunTeltia">Arun Teltia</a>
    </div>
    <div class="credits">
      Sponsored by
      <a href="">XSLTEL OU</a>
    </div>
  </div>
</template>
<script>
import Search from "../common/Search.vue";

export default {
  name: "Credits",
  components: {
    Search
  },
  data() {
    return {
      credits: [
        {
          title: "",
          value: "Arun Teltia",
          url: "https://github.com/ArunTeltia"
        }
      ]
    };
  }
};
</script>
