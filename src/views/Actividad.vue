<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar_Soltar.svg", alt="Actividad didáctica de relación de términos")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Identificación de signos de alarma en el recién nacido
        p.mb-4 Identificar los signos de alarma en el estado del recién nacido que permitan atención oportuna y orientación adecuada de acuerdo al plan de cuidados para el recién nacido y educación a padres y cuidadores.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Relación de términos
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
