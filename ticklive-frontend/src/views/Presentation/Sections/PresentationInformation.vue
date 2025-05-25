<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 my-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="event"
              title="Host Amazing <br /> Events"
              description="Easily manage and promote your events with our intuitive platform, designed to make every event unforgettable."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Boost Your Venue"
              description="Attract more attendees and make your venue the talk of the town with our seamless ticketing system."
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Comprehensive Documentation"
              description="Learn how to maximize your event's potential with our detailed guides and resources. Visit ticklive.vercel.app for more."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Effortless Ticketing"
              description="Our platform integrates seamlessly with your workflow, making ticket sales and management a breeze."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Maximize Revenue"
              description="Sell tickets faster and reach a wider audience, saving time and increasing your profits."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Accessible Anywhere"
              description="Our fully responsive platform ensures your events are accessible on any device, anytime, anywhere."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
