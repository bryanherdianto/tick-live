<script setup>
// example components
import TransparentBlogCard from "../../../../examples/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../examples/cards/blogCards/BackgroundBlogCard.vue";

//Vue Material Kit 2 components
import post1 from "@/assets/img/examples/testimonial-6-2.jpg";
import post2 from "@/assets/img/examples/testimonial-6-3.jpg";
import post3 from "@/assets/img/examples/blog-9-4.jpg";
import post4 from "@/assets/img/examples/blog2.jpg";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Discover the Hottest Events</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post1"
            title="Rover's Grand Opening Party"
            description="Experience the ultimate launch event with live music, great food, and an unforgettable atmosphere. Don't miss out!"
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post2"
            title="AI-Powered Ticketing Revolution"
            description="Learn how our app makes ticketing seamless and accessible, helping venues fill seats like never before."
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post3"
            title="Unleashing the Party Scene"
            description="Discover how our platform connects you to the craziest parties and events in your city with just a few clicks."
          />
        </div>
        <div class="col-lg-3 col-md-12 col-12">
          <BackgroundBlogCard
            :image="post4"
            title="Venue Spotlight: Flexible Spaces"
            description="Explore how venues are leveraging our app to offer flexible booking options and attract more attendees."
          />
        </div>
      </div>
    </div>
  </section>
</template>
