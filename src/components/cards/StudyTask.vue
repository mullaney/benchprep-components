<template>
  <div class="study-task">
    <div class="study-task-icon">
      {{ icon }}
    </div>
    <div class="study-task-content">
      <div class="study-task-name">
        {{ name }}
      </div>
      <div class="study-task-knowledge-points">
        <span>{{ knowledgePoints }} knowledge points</span>
        <span class="study-task-clock-icons">
          <i
            class="fa fa-clock-o"
            aria-hidden="true"
            :class="{ muted: clocks < 1 }"
          />
          <i
            class="fa fa-clock-o"
            aria-hidden="true"
            :class="{ muted: clocks < 2 }"
          />
          <i
            class="fa fa-clock-o"
            aria-hidden="true"
            :class="{ muted: clocks < 3 }"
          />
          <i
            class="fa fa-clock-o"
            aria-hidden="true"
            :class="{ muted: clocks < 4 }"
          />
        </span>
      </div>
    </div>
    <div class="study-task-due-date">
      {{ formattedDueDate }}
    </div>
  </div>
</template>

<script>
const iconMap = {
  lesson: 'k',
  flashcard: 'g',
  practice: 'r',
  test: 'v'
}

export default {
  name: "StudyTask",
  props: {
    name: {
      type: String,
      default: 'A study task'
    },
    dueDate: {
      type: Date,
      default: new Date()
    },
    knowledgePoints: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'lesson'
    },
    clocks: {
      type: Number,
      default: 1
    }
  },
  computed: {
    formattedDueDate() {
      return "Due " + this.dueDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    },
    icon() {
      return iconMap[this.type]
    }
  }
}
</script>

<style lang="scss">
.study-task {
  align-items: center;
  background: var(--gray-00);
  border-radius: 5px;
  color: var(--gray-90);
  display: flex;
  font-family: "Open Sans", sans-serif;
  justify-content: space-between;
  margin: 6px 0;
  padding: 20px;

  &:hover {
    background: var(--gray-20);
  }
}

.study-task-name {
  font-weight: 600;
}

.study-task-content {
  width: 100%;
}

.study-task-due-date {
  font-size: 14px;
  margin-left: 14px;
  white-space: nowrap;
}

.study-task-icon {
  background: var(--gray-70);
  border-radius: 50%;
  color: var(--gray-00);
  font-family: 'benchprep-icon';
  height: 36px;
  line-height: 36px;
  margin-right: 14px;
  min-width: 36px;
  text-align: center;
  width: 36px;
}

.study-task-knowledge-points span:first-of-type {
  margin-right: 0.5em;
}

.study-task-clock-icons {
  i {
    margin-right: 3px;
  }

  .muted {
    color: var(--gray-70);
  }
}
</style>

<docs>
```jsx
<div style="padding: 16px; background: #eeeeee">
  <StudyTask name='Science Practice Questions' :dueDate="new Date('12/22/2020')" type="practice" knowledgePoint="27" clocks="2" />
  <StudyTask name='Some Lessons' :dueDate="new Date('12/2/2020')" type="lesson" knowledgePoint="5" clocks="1" />
  <StudyTask name='Some Flashcards' :dueDate="new Date('2/22/2020')" type="flashcard" knowledgePoint="5" clocks="4" />
</div>
```
</docs>
