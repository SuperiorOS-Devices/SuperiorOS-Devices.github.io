<template>
  <div>
    <div class="credits">
      Website maintained by
      <a href="https://github.com/ArunTeltia">Arun Teltia</a>
      and
      <a href="https://github.com/Sweeto143">Sipun Ku Mahanta</a>
    </div>
  </div>
</template>
<script>
import Search from "../common/Search.vue";

export default {
  name: "Credits",
  components: {
    Search,
  },
  data() {
    return {
      credits: [
        {
          title: "",
          value: "Arun Teltia",
          url: "https://github.com/ArunTeltia",
        },
      ],
    };
  },
};
</script>
