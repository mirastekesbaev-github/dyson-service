<template>
  <section id="contact-section">
    <div class="container">
      <div class="content">
        <div class="content__body">
          <div class="row">
            <div class="body-left col-xxl-6 col-xl-6 col-lg-6">
              <h2 class="section__title title">
                    Контакты
              </h2>
              <p class="section__subtitle subtitle">
                Центр технического обслуживания Dyson работает с 9:00 до 18:00 часов ежедневно, выходной Воскресенье
              </p>
              <div class="body-left__item">
                <p class="address" style="margin-bottom: 8px;">
                  Наши адреса:
                </p>
                <p class="address" style="margin-bottom: 6px;">
                  <span>г. Астана: </span>
                  <a
                    href="https://2gis.kz/astana/inside/70030076157502414/firm/70000001089388327?m=71.447307%2C51.09649%2F16.57"
                    target="_blank"
                  >
                    ул. Бухар Жырау, 40 п7
                  </a>
                </p>
                <p class="address" style="margin-bottom: 6px">
                  <span>г. Алматы: </span>
                  <a
                    href="https://2gis.kz/almaty/inside/9430047374966873/firm/70000001033672885/76.925452%2C43.248111?m=76.925633%2C43.248124%2F19.28"
                    target="_blank"
                  >
                    ул. Кабанбай батыра, 150
                  </a>
                </p>
                <p class="address">
                  <span>г. Шымкент: </span>
                  <a
                    href="https://2gis.kz/shymkent/inside/22659371323491004/firm/70000001092460421?m=69.633381%2C42.361711%2F12.57"
                    target="_blank"
                  >
                    мкр. Нурсат, 165
                  </a>
                </p>
              </div>
              <div class="body-left__item">
                <div class="box">
                  <p class="address" style="margin-bottom: 4px;">
                    Наши социальные сети:
                  </p>
                  <div class="item__icons flex">
                    <div class="item__icon">
                      <a href="https://wa.me/+77075553027?text=Здравствуйте!%20Пишу%20из%20города" target="_blank">
                        <UIIcon icon="whatsapp" :size="30" color="#444" />
                      </a>
                    </div>
                    <div class="item__icon">
                      <a href="https://t.me/+77075553027?text=Здравствуйте!%20Пишу%20из%20города" target="_blank">
                        <UIIcon icon="telegram" :size="30" color="#444" />
                      </a>
                    </div>
                    <div class="item__icon">
                      <a href="https://www.instagram.com/dservice.kz" target="_blank">
                        <UIIcon icon="instagram" :size="30" color="#444" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="body-left__item">
                <p class="address" style="margin-bottom: 8px;">
                  Наша почта:
                </p>
                <p class="address">
                  <a href="mailto:info@dysoncentre.kz">
                    info@dysoncentre.kz
                  </a>
                </p>
              </div>
            </div>
            <div class="body-right col-xxl-6 col-xl-6 col-lg-6">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Affc7dc87fae4228efbcb4777cfe25d42a84c80602415c44deb1b4b7af7efe2c6&amp;source=constructor"
                width="100%"
                height="432"
                frameborder="0"
              />
            </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UIIcon from "@/components/ui/Icon.vue";

export default {
  name: 'ContactSection',
  components: {
    UIIcon
  },
  methods: {
    showModal() {
      this.$modal.show('order-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
#contact-section {
  background: #f7f7f7;
  .content {
    &__body {
      .body-left {
        .subtitle {
          margin-bottom: 38px;
        }

        &__item {
          font-family: 'Open Sans', sans-serif;
          font-weight: 300;
          padding: 18px 0;
          border-top: 1px solid $gray300;

          &:last-child {
            border-top: 1px solid $gray300;
          }

          p {
            a {
              color: $gray900;

              &:hover {
                text-decoration: none;
              }
            }

            span {
              font-weight: 700;
            }
          }

          .item__icons {
            margin-top: 8px;
            .item__icon {
              margin-right: 8px;
              width: 28px;
              height: 28px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  #contact-section {
    .content {
      &__body {
        .body-right {
          margin-top: 24px;
          padding: 12px;
        }
      }
    }
  }
}
</style>
