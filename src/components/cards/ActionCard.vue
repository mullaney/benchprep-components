<template>
  <div class="action-card">
    <div
      class="action-card__img"
      :style="backgroundStyle"
    >
      <span
        v-show="noImage"
        class="action-card__placeholder"
      >
        image goes here
      </span>
    </div>
    <div class="action-card__content">
      <div class="action-card__title">
        {{ title }}
      </div>
      <div
        v-for="(item, index) in lineItems"
        :key="index"
        class="action-card__line-item"
      >
        {{ item }}
      </div>
      <div class="action-card__buttons">
        <ButtonSmall
          v-for="(button, index) in buttons"
          :key="index"
          :type="button.type"
        >
          <a :href="button.link">{{ button.text }}</a>
        </ButtonSmall>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSmall from "../buttons/ButtonSmall"

export default {
  name: 'ActionCard',
  components: {
    ButtonSmall
  },
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'The title of this card'
    },
    lineItems: {
      type: Array,
      default: () => {
        return ['The first line item', 'The second']
      }
    },
    buttons: {
      type: Array,
      default: () => {
        return [
          { link: '*', text: 'View insights', type: 'inverted'},
          { link: '*', text: 'Study Now', type: 'primary'}
        ]
      }
    }
  },
  computed: {
    noImage() {
      return this.imageUrl === ''
    },
    backgroundStyle() {
      return {
        backgroundImage: `url("${this.imageUrl}")`
      }
    }
  }
}
</script>

<style lang="scss">
.action-card {
  border-radius: 5px;
}

.action-card__img {
  height: 140px;
  background-color: #CFE4E9;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 5px 0 0;
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 140px;
  text-align: center;
  width: 100%;

}

.action-card__placeholder {
  color: #000000;
  opacity: 0.05;
  text-transform: uppercase;
}

.action-card__content {
  border-radius: 0 0 5px 5px;
  background: white;
  font-family: "Open Sans", sans-serif;
  padding: 16px;
}

.action-card__title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.action-card__line-item {
  color: #696969;
  font-size: 14px;
  font-weight: 600;
}

.action-card__buttons {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
}
</style>

<docs>
Action Card
```jsx
<div style="padding: 16px; background: #eeeeee">
  <div style="width: 300px">
    <ActionCard
      title="MCAT Official Prep Biology Question Pack, Vol 1"
      :lineItems="['Last active on Jan 06, 2020', 'Not started']"
      :buttons="[{ link: '*', text: 'View insights', type: 'inverted'}, { link: '*', text: 'Study Now', type: 'primary'}]"
    />
  </div>
  <hr>
  <p>Width of action cards can vary</p>
  <div style="width: 500px">
    <ActionCard/>
  </div>
  <hr>
  <p>With an image:</p>
  <div style="width: 300px">
    <ActionCard imageUrl="https://c.pxhere.com/photos/44/78/office_work_studying_office_working_computer_work_at_home_working_from_home_person-1224832.jpg!d"/>
  </div>
</div>
```
</docs>
