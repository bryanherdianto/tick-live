<script setup>
import { onMounted, onUnmounted } from "vue";

import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";
import Contact from "./Sections/PresentationContact.vue";

import vueMkHeader from "@/assets/img/vue-mk-header.jpg";

const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div class="page-header min-vh-75" :style="`background-image: url(${vueMkHeader})`" loading="lazy">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="text-white pt-3 mt-n5 me-2" :style="{ display: 'inline-block' }">
              Discover and Create Your Perfect Event Space
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Unparalleled luxury and comfort await at the world's most exclusive events and venues. Start your journey
              today.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <PresentationInformation />
    <PresentationExample :data="data" />
    <PresentationPages />
    <BuiltByDevelopers />

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
            <FilledInfoCard class="p-4" :color="{ text: 'white', background: 'bg-gradient-success' }"
            :icon="{ component: 'celebration', color: 'white' }" title="Plan Your Event"
            description="Explore the best tools and resources to plan your perfect event, from venues to decorations."
            :action="{
              route:
              'https://ticklive.vercel.app',
              label: { text: 'Start Planning', color: 'white' }
            }" />
          </div>
          <div class="col-lg-4">
            <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100"
            :icon="{ component: 'event', color: 'success' }" title="Venue Selection" description="Discover top-rated venues for your events and make your celebrations unforgettable." 
            :action="{
              route:
              'https://ticklive.vercel.app',
              label: { text: 'Explore Venues' }
            }" />
          </div>
          <div class="col-lg-4">
            <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" :icon="{ component: 'local_bar', color: 'success' }"
            title="Party Essentials" description="Find everything you need to host the ultimate party, from catering to entertainment." 
            :action="{
              route:
              'https://ticklive.vercel.app',
              label: { text: 'Learn More' }
            }" />
        </div>
      </div>
    </div>
    <PresentationTestimonials />
    <Contact />
  </div>
  <DefaultFooter />
</template>