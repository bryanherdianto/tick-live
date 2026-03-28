<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
</script>

<template>
	<header
		class="bg-[#f5f0e8] border-b-4 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a] pb-1 sticky top-0 z-50"
	>
		<div
			class="max-w-360 mx-auto w-full px-6 py-4 flex items-center justify-between"
		>
			<RouterLink
				to="/"
				class="font-bold text-3xl tracking-tighter uppercase font-['Space_Grotesk'] cursor-pointer"
			>
				Tickify
			</RouterLink>

			<nav class="hidden md:flex items-center gap-8">
				<RouterLink
					to="/event"
					class="border-2 border-transparent hover:bg-[#fc0] hover:border-[#1a1a1a] px-4 py-1.5 font-bold text-base uppercase font-['Space_Grotesk'] transition-colors"
					>Events</RouterLink
				>
				<a
					href="#"
					class="border-2 border-transparent hover:bg-[#fc0] hover:border-[#1a1a1a] px-4 py-1.5 font-bold text-base uppercase font-['Space_Grotesk'] transition-colors"
					>Venues</a
				>
			</nav>

			<div class="flex items-center gap-4">
				<div
					class="hidden sm:flex bg-[#faf7f2] border-2 border-[#1a1a1a] items-center px-4 py-1.5 gap-2"
				>
					<MagnifyingGlassIcon class="w-5 h-5 text-[#1a1a1a]" />
					<input
						type="text"
						placeholder="Search events..."
						class="bg-transparent outline-none w-32 font-bold text-sm uppercase text-[#1a1a1a] placeholder:text-[#1a1a1a]/50 font-['Space_Grotesk']"
					/>
				</div>
				<button
					class="bg-[#e63b2e] border-2 border-[#1a1a1a] px-6 py-1.5 font-bold text-base text-white uppercase hover:bg-red-600 transition-colors font-['Space_Grotesk']"
				>
					Sign In
				</button>
			</div>
		</div>
	</header>
</template>
