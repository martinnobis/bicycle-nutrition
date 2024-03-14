<template>
  <main class="container">
    <h1 class="title">Bicycle Nutrition Recipe Generator</h1>
    <h2 class="title">A.K.A <i>Rocket Fuel</i> - A.K.A <i>Bonk Buster</i></h2>
    <section class="inputs container">
      <form>
        <label for="workouthours">Workout time</label>
        <div class="slider workout-time">
          <input type="range" min="1" max="8" id="workouthours" v-model="workoutHours" />
          <span class="slider-value">{{ workoutHoursLabel }}</span>
        </div>
        <label for="carbGoal">Carb intake goal</label>
        <div class="slider carb-goal">
          <input type="range" min="50" max="120" step="10" id="carbGoal" v-model="carbGoal" />
          <span class="slider-value">{{ carbGoal }}g / hour</span>
        </div>
        <label for="sodiumGoal">Sodium intake goal</label>
        <div class="slider sodium-goal">
          <input type="range" min="500" max="2000" step="250" id="sodiumGoal" v-model="sodiumGoal" />
          <span class="slider-value">{{ Math.round(sodiumGoal).toLocaleString() }}mg / hour</span>
        </div>
        <label for="sugarRatio">Glucose-Fructose ratio</label>
        <div class="slider sugar-ratio">
          <input type="range" min="0" max="2" id="sugarRatio" v-model="sugarRatio" />
          <span class="slider-value">{{ sugarRatioLabel }}</span>
        </div>
        <label for="poweradeScoops">Powerade scoops</label>
        <div class="slider powerade-scoops">
          <input type="range" min="0" max="4" id="poweradeScoops" v-model="poweradeScoops" />
          <span class="slider-value">{{ poweradeScoopsLabel }}</span>
        </div>
      </form>
    </section>
    <section class="recipe container">
      <h2>Recipe</h2>
      <table>
        <tbody>
          <tr>
            <th>Table Sugar</th>
            <td>{{ Math.round(recipeSugar) }}g</td>
          </tr>
          <tr>
            <th>Maltodextrin</th>
            <td>{{ Math.round(recipeMalt) }}g</td>
          </tr>
          <tr>
            <th>Sodium Citrate</th>
            <td>{{ recipeSodium.toLocaleString() }}mg</td>
          </tr>
          <tr>
            <th>Powerade</th>
            <td>{{ poweradeScoopsLabel }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="requirements container">
      <h3>Breakdown</h3>
      <table>
        <tbody>
          <tr>
            <th>Carbohydrates</th>
            <td>{{ Math.round(carbReq) }}g</td>
          </tr>
          <tr>
            <th>Glucose</th>
            <td>{{ Math.round(glucoseReq) }}g</td>
          </tr>
          <tr>
            <th>Fructose</th>
            <td>{{ Math.round(fructoseReq) }}g</td>
          </tr>
          <tr>
            <th>Sodium</th>
            <td>{{ sodiumReq.toLocaleString() }}mg</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="constants container">
      <h3>Constants</h3>
      <table>
        <tbody>
          <tr>
            <th>Sodium in Sodium Citrate</th>
            <td>25%</td>
          </tr>
          <tr>
            <th>Sugar in Powerade</th>
            <td>14g / scoop</td>
          </tr>
          <tr>
            <th>Sodium in Powerade</th>
            <td>138mg / scoop</td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2 class="title">FAQ</h2>
    <section class="container faq">
      <details>
        <summary>What is this?</summary>
        A recipe generator for a homemade sports drink. Simply mix all ingredients into a bottle and shake well. To
        reduce lumps you can first dissolve the sugar and maltodextrin in water over a stove.
      </details>
      <details>
        <summary>Why make this?</summary>
        It's cheaper, customisable and more convenient than store-bought sports drinks and gels. You can also alter the
        taste and sweetness to your liking and add extra ingredients like caffeine pills.
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/vT-PBsSLX3U?si=8WfTtkEIhZhShuLN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/jU5tl7xFgp8?si=K756qJNdlyF5Ct9t"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/-6SUru4BnIc?si=yFe7OVjvRim0JM9i"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </details>
      <details>
        <summary>Is this doping?</summary>
        Yes. Yes it is.
      </details>
      <details>
        <summary>What should my carb intake goal be?</summary>
        If you're a beginner, start with 50-60g/hour. Increase if you're doing more than 3 hours of intense exercise or
        if you're fit and doing an intense workout.
      </details>
      <details>
        <summary>Is this really doping?</summary>
        No.
      </details>
      <details>
        <summary>Why add Powerade?</summary>
        Mainly for flavour, but also for the extra salts in contains.
      </details>
      <details>
        <summary>Where did I get all this info from?</summary>
        Where everyone else gets all their information from. Youtube.
      </details>
      <details>
        <summary>What should my Glucose-Fructose ratio be?</summary>
        If you're a beginner, start with 2:1. It's not as sweet and is easier on the stomach. Research suggests that 1:1
        and 1:0.8 is better for performance as more carbohydrates can be absorbed by the body for faster energy
        delivery.
      </details>
      <details>
        <summary>What is sodium citrate?</summary>
        An alternative to table salt which has been shown to improve performance in endurance sports. Sodium citrate in
        addition to the salts in Powerade will help you maintain your electrolyte balance and prevent cramps.
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/1gV5ImU8nYE?si=T8qqp-FTCxKRF0jp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </details>
      <details>
        <summary>How do I contact the webmaster?</summary>
        <button type="button" class="btn btn-outline-primary" @click="() => (showContactForm = true)">Contact</button>
      </details>
      <Teleport to="body">
        <Transition name="fade">
          <div v-if="showContactForm" class="modal-bg"></div>
        </Transition>
        <Transition name="slide-fade">
          <ContactForm v-if="showContactForm" @close="showContactForm = false" />
        </Transition>
      </Teleport>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ContactForm from '@/components/ContactForm.vue';

const showContactForm = ref(false);

const workoutHours = ref(3);
const carbGoal = ref(60);
const sodiumGoal = ref(500);
const sugarRatio = ref('0'); // 0 == 2:1, 1 == 1:0.8, 2 == 1:1
const poweradeScoops = ref(3);

const workoutHoursLabel = computed(() => {
  if (workoutHours.value == 1) return `${workoutHours.value} hour`;
  return `${workoutHours.value} hours`;
});

const poweradeScoopsLabel = computed(() => {
  if (poweradeScoops.value == 1) return `${poweradeScoops.value} scoop`;
  return `${poweradeScoops.value} scoops`;
});

const sugarRatioLabel = computed(() => {
  switch (sugarRatio.value) {
    case '0':
      return '2:1';
    case '1':
      return '1:0.8';
    case '2':
      return '1:1';
  }
});

const carbReq = computed(() => carbGoal.value * workoutHours.value);
const glucoseReq = computed(() => {
  switch (sugarRatio.value) {
    case '0':
      return carbReq.value * (2 / 3);
    case '1':
      return carbReq.value * (10 / 18);
    case '2':
      return carbReq.value * 0.5;
    default:
      return 0;
  }
});
const fructoseReq = computed(() => carbReq.value - glucoseReq.value);
const sodiumReq = computed(() => sodiumGoal.value * workoutHours.value);

const poweradeGlucose = computed(() => poweradeScoops.value * 14 * 0.5);
const poweradeFructose = computed(() => poweradeScoops.value * 14 * 0.5);
const poweradeSodium = computed(() => poweradeScoops.value * 138);

const recipeSugar = computed(() => {
  const ans = (fructoseReq.value - poweradeFructose.value) * 2;
  return ans;
});
const recipeMalt = computed(() => glucoseReq.value - 0.5 * recipeSugar.value - poweradeGlucose.value);
const recipeSodium = computed(() => Math.round((sodiumReq.value - poweradeSodium.value) / 0.25));
</script>

<style>
html,
body {
  overflow-x: hidden;
}

html {
  height: 100vh;
}

body {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

form {
  min-width: 300px;
}

h3 {
  font-weight: 600;
}

.slider {
  margin: 0.5rem;
  margin-left: 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
}

@media (min-width: 576px) {
  .container {
    width: 540px;
  }
}
/* @media (min-width: 768px) {
  .container {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container {
    width: 600px;
  }
} */

section:not(.faq) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  &.recipe {
    border: 5px solid var(--color-border);
  }
}

table {
  border-collapse: collapse;
  margin: 1rem;
  padding: 1rem;
  table-layout: fixed;
}

table th {
  text-align: left;
}

table tr:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}

table td {
  padding: 0.25rem;
  min-width: 90px;
  text-align: right;
}

table th {
  padding: 0.25rem;
}

.slider-value {
  padding: 0 0.25rem;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
  cursor: pointer;
}

details {
  padding: 0.5rem;
}

.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
}

.btn {
  margin: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: #1fa3e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn:hover {
  background-color: #4eadda;
}

.btn:active {
  background-color: #046490;
}

.btn.cancel {
  background-color: white;
  border: 1px solid grey;
  color: grey;
}

.btn.cancel:hover {
  background-color: #efefef;
}
</style>
