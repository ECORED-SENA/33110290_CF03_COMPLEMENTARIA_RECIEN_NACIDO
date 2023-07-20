<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        .row.mb-3(data-aos="zoom-in")
          .col-12.bg-c1
            .p-3
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/intro/img1.svg', style="width: 110px" ,alt='').m-auto
                .col
                  p.mb-0 Según el Marco Normativo, los contenidos definidos en la Resolución 3280 de 2018 permiten fortalecer las competencias del talento humano en salud a cargo de las intervenciones que se brindan al recién nacido en el marco de la Ruta Integral en Salud Materno Perinatal (RIASMP), impactando directamente la salud neonatal desde lo preconcepcional hasta los primeros días de vida.
        p(data-aos="fade-in") En este sentido, la RIASMP define las intervenciones individuales y colectivas, así como las acciones de gestión en cumplimiento de la atención en salud a todos los recién nacidos y mujeres, durante la etapa antenatal, gestacional, perinatal y el posparto. Para la implementación adecuada de las Rutas se hace indispensable el desarrollo de capacidades en el talento humano en salud para favorecer el proceso de orientación a padres y cuidadores.
        p(data-aos="fade-in").mb-0 El siguiente video de introducción al componente formativo expone la relevancia de su contenido.
      .col-lg-4(data-aos="flip-right")
        figure
          img(src='@/assets/curso/intro/img2.svg', style="width: 400px" ,alt='').m-auto
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Título de video.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
