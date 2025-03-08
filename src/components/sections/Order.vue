<template>
  <section id="order-section" ref="orderSection">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            <p>Получите скидку <span>10%</span> на ремонт, отправив заявку с сайта</p>
          </h2>
        </div>
        <div class="content__body flex jcc">
          <form action="https://formspree.io/f/xeqbagjv" method="POST" class="order-form" @submit.prevent="submit">
            <div class="order-form__field">
              <label class="label">Ваш город <span>*</span></label>
              <div 
                class="select" 
                id="city" 
                name="city"
                @click.stop="toggleOptions"
                v-click-outside="closeOptions"
              >
              <p>{{ $v.form.city.$model }}</p>
              <div class="arrow" style="color: #fff">
                <img v-if="isOpen" class="icon" src="../../assets/icons/arrow-up-s-line-white.svg" alt="arrow-up">
                <img v-if="!isOpen" class="icon" src="../../assets/icons/arrow-down-s-line-white.svg" alt="arror-down">
              </div>
              <div class="options" :class="{ 'active': isOpen }">
                <p 
                  v-for="city in cities" 
                  :key="city.id"  
                  class="option"
                  @click.stop="selectOption(city)"
                >
                  {{ city.value }}
                </p>
              </div>
            </div>  
            <span v-if="!$v.form.city.required && $v.form.city.$dirty" class="error-text">
              Заполните обязательное поле!
            </span>
            </div>
            <div class="order-form__field">
              <label class="label">Ваше имя <span>*</span></label>
              <input
                v-model.trim="$v.form.name.$model"
                class="input"
                id="name"
                type="text"
              >
              <span v-if="!$v.form.name.required && $v.form.name.$dirty" class="error-text">
                Заполните обязательное поле!
              </span>
            </div>
            <div class="order-form__field">
              <label class="label">Ваш телефон <span>*</span></label>
              <input
                v-model.trim="$v.form.phone.$model"
                class="input"
                id="phone"
                type="text"
                v-mask="'+7 (###) ###-##-##'"
              >
              <span v-if="!$v.form.phone.required && $v.form.phone.$dirty" class="error-text">
                Заполните обязательное поле!
              </span>
              <span v-if="!$v.form.phone.minLength && $v.form.phone.$dirty" class="error-text">
                Введите корректный номер телефона!
              </span>
            </div>
            <div class="order-form__field">
              <label class="label">Техника</label>
              <input v-model="form.technics" class="input" type="text">
            </div>
            <div class="order-form__field">
              <label class="label">Что сломалось?</label>
              <input v-model="form.problem" class="input" type="text">
            </div>
            <div class="order-form__field">
              <UIButton
                btn-name="Оформить заявку"
                :width="btnWidth"
                type="submit"
                :load="load"
                :style="{ padding: '10px 12px' }"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UIButton from '@/components/ui/Button.vue'
import { mask } from 'vue-the-mask'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'OrderSection',
  directives: { mask },
  components: { UIButton },
  data() {
    return {
      load: false,
      form: {
        city: '',
        name: '',
        phone: '',
        technics: '',
        problem: ''
      },
      cities: [
        {
          id: 1,
          value: 'Астана'
        },
        {
          id: 2,
          value: 'Алматы'
        },
        {
          id: 3,
          value: 'Шымкент'
        }
      ],
      isOpen: false,
      width: document.documentElement.clientWidth,
      btnWidth: null
    }
  },
  validations: {
    form: {
      city: { required },
      name: { required },
      phone: {
        required,
        minLength: minLength(18)
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    submit(e) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
        const data = new FormData()
        data.append('Город', this.form.city)
        data.append('Заявка с сайта (Скидка 10%)', 'Да')
        data.append('Имя', this.form.name)
        data.append('Телефон', this.form.phone)
        data.append('Техника', this.form.technics || '-')
        data.append('Что случилось?', this.form.problem || '-')
        fetch(e.target.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: data
        })
          .then((response) => {
            if (response.ok) {
              this.$modal.show('order-success-modal')
            } else {
              this.$modal.show('order-error-modal')
            }
          })
          .finally(() => {
            this.load = false
            this.form = {
              city: '',
              name: '',
              phone: '',
              technics: '',
              problem: ''
            }
            this.$v.$reset()
          })
      }
    },
    onResize() {
      this.width = document.documentElement.clientWidth
      if (this.width >= 1400) {
        this.btnWidth = '219px'
      } else if (this.width >= 1200 && this.width < 1400) {
        this.btnWidth = '204px'
      } else {
        this.btnWidth = '100%'
      }
    },
    toggleOptions() {
      this.isOpen = !this.isOpen; 
    },
    closeOptions() {
      this.isOpen = false;
    },
    selectOption(city) {
      this.$v.form.city.$model = city.value;
      if (this.$v.form.city.$model) {
        this.closeOptions()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#order-section {
  background: url('@/assets/img/order-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: $primary50;

  .content {
    &__header {
      margin-bottom: 72px;
      .title {
        color: $gray100;
        padding: 0 282px;

        span {
          font-family: 'Open Sans', sans-serif !important;
          color: #fff;
        }
      }
    }

    &__body {
      .order-form {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 24px;
        grid-row-gap: 28px;

        &__field:nth-child(6) {
          grid-area: 2 / 1 / 3 / 6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        &__field {
          position: relative;

          .label {
            color: #fff;
            position: absolute;
            top: -24px;
            font-size: 16px;

            span {
              color: $error500;
            }
          }

          .input, .select {
            width: 100%;
            color: #fff;
            background: rgba(150, 150, 150, 0.3);
            padding: 12px 12px;
            font-size: 16px;
            border: none;
            outline: none;
            border-radius: 4px;
            transition: .3s ease;
            height: 42px;

            &:focus {
              background: rgba(202, 202, 202, 0.3);
            }
          }

          span.error-text {
            position: absolute;
            display: block;
            margin-top: 2px;
            z-index: 0;
            font-size: 13px;
            color: $error500;
            animation: myAni 1s linear forwards;
          }

          & .select {
            position: relative;
            cursor: pointer;

            .arrow {
              position: absolute;
              top: 50%;
              right: 12px;
              transform: translateY(-50%);
              z-index: 100;

              .icon {
                display: block;
                width: 24px;
                height: 24px;
              }
            }

            .options {
              display: none;

              &.active {
                display: block;
                border: 1px solid $gray600;
                border-radius: 4px;
                z-index: 100;
                background: #353671;
                position: absolute;
                top: 46px;
                left: 0;
                width: 100%;
              }

              .option {
                padding: 12px 12px
              }

              .option:hover {
                background: rgba(150, 150, 150, 0.3);
                border-radius: 2px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  #order-section {
    .content {
      &__header {
        .title {
          padding: 0 162px;
        }

        .subtitle {
          padding: 0 172px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  #order-section {
    .content {
      &__body {
        .order-form {
          width: 500px;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(6, 1fr);
          grid-row-gap: 48px;
        
          &__field:nth-child(6) {
            grid-area: 6 / 1 / 6 / 1;
          }

          &__field {
            & .select {
              .options {
                &.active {
                  border: none;
                  background: #5B5C97;
                }

                .option:hover {
                  background: rgba(150, 150, 150, 0.3);
                  border-radius: 4px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  #order-section {
    .content {
      &__header {
        .title {
          padding: 0 52px;
        }

        .subtitle {
          padding: 0 72px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #order-section {
    .content {
      &__header {
        .title {
          padding: 0 2px;
        }

        .subtitle {
          padding: 0 32px;
        }
      }
    }
  }
}

@media screen and (min-width: 576px) {
  #order-section {
    .content {
      &__carousel {
        display: none;
      }
    }
  }
}
</style>
