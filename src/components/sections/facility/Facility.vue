<template>
  <section id="facility-section">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            Преимущества нашего Центра технического обслуживания <span>Dyson</span>
          </h2>
          <p class="section__subtitle subtitle tac">
            Центр технического обслуживания <span>Dyson</span> оснащен необходимым профильным оборудованием,
            что позволяет нашим специалистам устранять любые неполадки в работе устройств <span>Dyson</span>
          </p>
        </div>
        <div class="content__body">
          <div class="row">
            <div class="col-xxl-4 col-xl-4 col-md-6 col-sm-6 col-12">
              <FacilityItem 
                icon="tools"
                title="Бесплатная диагностика"
                text="Диагностика проводится на профессиональном оборудовании с выдачей Акта о техническом состоянии"
              />
            </div>
            <div class="col-xxl-4 col-xl-4 col-md-6 col-sm-6 col-12">
              <FacilityItem 
                icon="users"
                title="Квалифицированные мастера"
                text="Наши специалисты имеют специальное образование и многолетний опыт работы"
              />
            </div>
            <div class="col-xxl-4 col-xl-4 col-md-6 col-sm-6 col-12">
              <FacilityItem 
                icon="truck"
                title="Бесплатная доставка по всему Казахстану"
                text="ЦТО организовывает логистику Ваших устройств от Вашего дома до ЦТО и обратно"
              />
            </div>
            <div class="col-xxl-4 col-xl-4 col-md-6 col-sm-6 col-12">
              <FacilityItem 
                icon="file-shield"
                title="Гарантия до 1-го года"
                text="Мы уверены в качестве своей работы и устанавливаемых запчастях, поэтому мы даём гарантию до 12 месяцев"
              />
            </div>
            <div class="col-xxl-4 col-xl-4 col-md-6 col-sm-6 col-12">
              <FacilityItem 
                icon="settings"
                title="Собственный склад запчастей"
                text="Более 90% требуемых для ремонта запчастей есть на нашем складе"
              />
            </div>
            <div class="col-xxl-4 col-xl-4 col-md-6 col-sm-6 col-12">
              <FacilityItem 
                icon="money"
                title="Оплата по факту ремонта"
                text="Никаких предоплат и платных выездов. Мы починили, Вы проверили и оплатили удобным способом"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FacilityItem from './FacilityItem.vue'

export default {
  name: 'FacilitySection',
  components: {
    FacilityItem
  }
}
</script>

<style lang="scss" scoped>
#facility-section {
  .content {
    &__header {
      margin-bottom: 52px;
      .title {
        span {
          font-family: 'Open Sans', sans-serif;
          font-weight: 700;
          color: rgb(113, 13, 143);
        }
      }

      .subtitle {
        padding: 0 100px;

        span {
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
          color: rgb(113, 13, 143);
        }
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  #facility-section {
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

@media screen and (max-width: 992px) {
  #facility-section {
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
  #facility-section {
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
  #facility-section {
    .content {
      &__carousel {
        display: none;
      }
    }
  }
}
</style>
