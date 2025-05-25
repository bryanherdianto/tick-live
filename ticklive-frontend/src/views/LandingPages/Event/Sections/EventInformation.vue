<template>
  <section class="py-5">
    <div class="container">
      <!-- Header -->
      <div class="row mb-4">
        <div class="col-lg-8">
          <h2>Available Events</h2>
          <p class="text-muted">See and take advantage of our limited-time offers to create unforgettable memories.</p>
        </div>
      </div>
      <!-- Mobile Filters (visible only on small screens) -->
      <div class="d-lg-none mb-4">
        <div class="card shadow-lg">
          <div class="card-header p-3 pb-0">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="mb-0">Filters</h5>
              <button class="btn btn-link text-gradient text-primary p-0 mb-0">Clear</button>
            </div>
            <p class="text-sm mb-0">Find your perfect event</p>
          </div>
          <div class="card-body p-3 pt-0">
            <!-- Mobile filters content -->
            <div class="row">
              <div class="col-6">
                <!-- Event Types -->
                <div class="mt-3 mb-4">
                  <h6 class="mb-3">Event Types</h6>
                  <div class="input-group input-group-outline">
                    <div v-for="type in eventTypes" :key="'mobile-' + type" class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" :id="'mobile-' + type" :value="type"
                        v-model="selectedTypes" />
                      <label class="form-check-label ms-2" :for="'mobile-' + type">{{ type }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <!-- Price Range -->
                <div class="mb-4">
                  <h6 class="mb-3">Price Range</h6>
                  <div class="input-group input-group-outline">
                    <div v-for="range in priceRanges" :key="'mobile-' + range.label" class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" :id="'mobile-' + range.label" :value="range"
                        v-model="selectedRanges" />
                      <label class="form-check-label ms-2" :for="'mobile-' + range.label">
                        {{ range.label }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <!-- Sort By -->
                <div>
                  <h6 class="mb-3">Sort By</h6>
                  <div class="input-group input-group-outline d-flex flex-wrap">
                    <div v-for="option in sortOptions" :key="'mobile-' + option.value" class="form-check mb-2 me-3">
                      <input class="form-check-input" type="radio" name="sort-mobile" :id="'mobile-' + option.value"
                        :value="option.value" v-model="selectedSort" />
                      <label class="form-check-label ms-2" :for="'mobile-' + option.value">
                        {{ option.label }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <button class="btn bg-gradient-success w-100">Apply Filters</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Listings -->
        <div class="col-lg-8">
          <router-link v-for="event in filteredEvents" :key="event.id" :to="`/events/${event.id}`"
            class="text-decoration-none text-dark">
            <div class="card card-plain mb-4 overflow-hidden hover-shadow">
              <div class="row g-0">
                <div class="col-md-5 position-relative">
                  <div class="position-absolute top-0 start-0 p-2">
                    <span class="badge bg-gradient-success">Available</span>
                  </div>
                  <img :src="event.location_image" class="w-100 rounded-start" alt="event.name"
                    style="height: 100%; object-fit: cover;" />
                </div>
                <div class="col-md-7">
                  <div class="card-body p-3 p-md-4">
                    <small class="text-uppercase text-muted">{{ event.location_name }}</small>
                    <h5 class="mt-2 mb-2 font-weight-bold">{{ event.name }}</h5>
                    <p class="text-muted small"><i class="fa fa-map-marker me-1"></i> {{ event.location_address
                      }}</p>
                    <div class="d-flex justify-content-end align-items-center mt-4">
                      <div class="btn bg-gradient-success btn-sm mb-0">View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- Desktop Sidebar Filters (visible only on large screens) -->
        <div class="col-lg-4 d-none d-lg-block">
          <div class="card shadow-lg">
            <div class="card-header p-3 pb-0">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Filters</h5>
                <button class="btn btn-link text-gradient text-primary p-0 mb-0">Clear</button>
              </div>
              <p class="text-sm mb-0">Find your perfect event</p>
            </div>
            <div class="card-body p-3 pt-0">
              <!-- Popular filters -->
              <div class="mt-3 mb-4">
                <h6 class="mb-3">Event Types</h6>
                <div class="input-group input-group-outline">
                  <div v-for="type in eventTypes" :key="type" class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" :id="type" :value="type" v-model="selectedTypes" />
                    <label class="form-check-label ms-2" :for="type">{{ type }}</label>
                  </div>
                </div>
              </div>
              <!-- Price Range -->
              <div class="mb-4">
                <h6 class="mb-3">Price Range</h6>
                <div class="input-group input-group-outline">
                  <div v-for="range in priceRanges" :key="range.label" class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" :id="range.label" :value="range"
                      v-model="selectedRanges" />
                    <label class="form-check-label ms-2" :for="range.label">
                      {{ range.label }}
                    </label>
                  </div>
                </div>
              </div>
              <!-- Sort By -->
              <div>
                <h6 class="mb-3">Sort By</h6>
                <div class="input-group input-group-outline">
                  <div v-for="option in sortOptions" :key="option.value" class="form-check mb-2">
                    <input class="form-check-input" type="radio" name="sort" :id="option.value" :value="option.value"
                      v-model="selectedSort" />
                    <label class="form-check-label ms-2" :for="option.value">
                      {{ option.label }}
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <button class="btn bg-gradient-success w-100">Apply Filters</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { fetchEvents } from '@/services/eventApi';

const event = ref(null);
const error = ref(null);

async function loadEvent() {
  try {
    event.value = await fetchEvents();
    console.log('Event loaded:', event.value);
  } catch (err) {
    error.value = 'Failed to fetch event';
    console.error(err);
  }
};

onMounted(async () => {
  await loadEvent();
});

// Filters state
const eventTypes = [
  'Concert',
  'Theater Performance',
  'Stand-up Comedy Show',
  'Film Screening',
  'Art Exhibition',
  'Dance Recital',
  'Cultural Festival',
  'Football Match',
  'Basketball Game',
  'Tennis Tournament',
  'Esports Competition',
  'Fitness Class',
  'Boxing Match',
  'Wedding Reception',
  'Birthday Party',
  'Graduation Party',
  'Reunion',
  'Baby Shower',
  'Conference',
  'Seminar',
  'Product Launch',
  'Workshop',
  'Corporate Meeting',
  'Award Ceremony',
  'Religious Service',
  'Community Meeting',
  'Fundraiser',
  'Book Club',
  'Food Festival',
  'Cooking Class',
  'Fashion Show',
  'Wellness Retreat',
  'Yoga Class',
  'Farmers Market',
  'Art & Craft Fair'
];
const selectedTypes = ref([]);
const priceRanges = [
  { label: '$0 to 500', min: 0, max: 500 },
  { label: '$500 to 1000', min: 500, max: 1000 },
  { label: '$1000 to 2000', min: 1000, max: 2000 },
  { label: '$2000 to 3000', min: 2000, max: 3000 },
];
const selectedRanges = ref([]);
const sortOptions = [
  { label: 'Price Low to High', value: 'low-high' },
  { label: 'Price High to Low', value: 'high-low' },
  { label: 'Newest First', value: 'newest' },
];
const selectedSort = ref('low-high');

const filteredEvents = computed(() => {
  if (!event.value || !event.value.payload) return [];

  let list = event.value.payload;

  // Filter by type
  if (selectedTypes.value.length) {
    list = list.filter(r => selectedTypes.value.includes(r.type));
  }

  // Filter by price
  if (selectedRanges.value.length) {
    list = list.filter(r =>
      selectedRanges.value.some(range => r.price >= range.min && r.price <= range.max)
    );
  }

  // Sort
  if (selectedSort.value === 'low-high') list = list.slice().sort((a, b) => a.price - b.price);
  if (selectedSort.value === 'high-low') list = list.slice().sort((a, b) => b.price - a.price);
  if (selectedSort.value === 'newest') list = list; // default order

  return list;
});
</script>

<style scoped>
.card img {
  object-fit: cover;
  height: 100%;
}

.hover-shadow:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  transform: translateY(-2px);
}

.badge {
  font-size: 0.65rem;
  font-weight: 600;
}

.font-weight-bold {
  font-weight: 600 !important;
}
</style>
