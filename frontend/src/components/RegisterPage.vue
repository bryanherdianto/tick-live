<script setup>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>

<template>
	<div class="min-h-screen bg-[#f5f0e8] flex flex-col font-sans">
		<Header />

		<main class="flex-grow flex flex-col lg:flex-row relative">
			<!-- Left Side: Aesthetic/Brand Section -->
			<div
				class="w-full lg:w-1/2 bg-[#ffcc00] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[#1a1a1a] p-8 md:p-16 xl:p-24 flex flex-col relative overflow-hidden"
			>
				<!-- Abstract Background Graphics -->
				<div
					class="absolute bottom-[-10%] right-[15%] w-[80%] h-[120%] border-[8px] border-[#1a1a1a] opacity-[0.08] pointer-events-none transform rotate-[15deg]"
				></div>

				<!-- Content -->
				<div class="relative z-10 w-full xl:w-4/5 pt-8 font-['Space_Grotesk']">
					<div
						class="inline-block bg-[#f5f0e8] border-[2px] border-[#1a1a1a] text-[#1a1a1a] text-[10px] font-bold px-3 py-1.5 mb-14 tracking-widest uppercase"
					>
						REGISTRATION_MODULE.V01
					</div>

					<h1
						class="text-6xl md:text-[92px] font-black text-[#1a1a1a] leading-[0.9] tracking-tighter"
					>
						JOIN THE<br />
						COLLECTIVE
					</h1>
				</div>
			</div>

			<!-- Right Side: Form Section -->
			<div
				class="w-full lg:w-1/2 bg-[#f5f0e8] p-8 md:p-16 xl:p-24 flex flex-col justify-center font-['Space_Grotesk']"
			>
				<div class="mb-14">
					<h2
						class="text-4xl md:text-[40px] font-bold text-[#1a1a1a] tracking-tighter mb-2 uppercase"
					>
						CREATE ACCOUNT
					</h2>
					<div class="w-20 h-1.5 bg-[#e63b2e] border-y border-[#e63b2e]"></div>
				</div>

				<form action="#" method="POST" class="space-y-6 w-full max-w-xl">
					<div>
						<label
							for="fullName"
							class="block text-[#1a1a1a] text-[10px] font-bold tracking-widest uppercase mb-2"
							>FULL NAME</label
						>
						<div class="border-[1.5px] border-[#1a1a1a] bg-transparent p-0.5">
							<input
								type="text"
								id="fullName"
								name="fullName"
								placeholder="FIRST_LAST"
								class="w-full px-3 py-2.5 bg-transparent text-[#1a1a1a] placeholder-gray-400 text-sm focus:outline-none focus:ring-0 font-mono tracking-wider"
							/>
						</div>
					</div>

					<div>
						<label
							for="email"
							class="block text-[#1a1a1a] text-[10px] font-bold tracking-widest uppercase mb-2"
							>EMAIL ADDRESS</label
						>
						<div class="border-[1.5px] border-[#1a1a1a] bg-transparent p-0.5">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="NAME@DOMAIN.COM"
								class="w-full px-3 py-2.5 bg-transparent text-[#1a1a1a] placeholder-gray-400 text-sm focus:outline-none focus:ring-0 font-mono tracking-wider"
							/>
						</div>
					</div>

					<div class="flex flex-col sm:flex-row gap-6">
						<div class="flex-1">
							<label
								for="password"
								class="block text-[#1a1a1a] text-[10px] font-bold tracking-widest uppercase mb-2"
								>PASSWORD</label
							>
							<div class="border-[1.5px] border-[#1a1a1a] bg-transparent p-0.5">
								<input
									type="password"
									id="password"
									name="password"
									placeholder="••••••••"
									class="w-full px-3 py-2.5 bg-transparent text-[#1a1a1a] placeholder-gray-400 text-sm focus:outline-none focus:ring-0 font-mono tracking-wider"
								/>
							</div>
						</div>

						<div class="flex-1">
							<label
								for="confirmPassword"
								class="block text-[#1a1a1a] text-[10px] font-bold tracking-widest uppercase mb-2"
								>CONFIRM</label
							>
							<div class="border-[1.5px] border-[#1a1a1a] bg-transparent p-0.5">
								<input
									type="password"
									id="confirmPassword"
									name="confirmPassword"
									placeholder="••••••••"
									class="w-full px-3 py-2.5 bg-transparent text-[#1a1a1a] placeholder-gray-400 text-sm focus:outline-none focus:ring-0 font-mono tracking-wider"
								/>
							</div>
						</div>
					</div>

					<div class="pt-2">
						<label class="flex items-start space-x-3 cursor-pointer group">
							<div
								class="mt-[2px] w-5 h-5 shrink-0 border-[1.5px] border-[#1a1a1a] bg-transparent flex items-center justify-center transition-colors relative"
							>
								<input
									type="checkbox"
									class="peer opacity-0 absolute w-full h-full cursor-pointer"
								/>
								<svg
									class="w-3.5 h-3.5 text-[#1a1a1a] hidden peer-checked:block pointer-events-none"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="square"
										stroke-linejoin="miter"
										stroke-width="3"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
							</div>
							<span
								class="text-[#1a1a1a] text-[11px] font-medium uppercase tracking-widest leading-tight mt-0.75"
							>
								I ACCEPT THE
								<a href="#" class="underline decoration-[#1a1a1a]"
									>TERMS OF UTILITY</a
								>
								AND
								<a href="#" class="underline decoration-[#1a1a1a]"
									>PRIVACY PROTOCOL</a
								>.
							</span>
						</label>
					</div>

					<button
						type="submit"
						class="w-full bg-[#ffcc00] text-[#1a1a1a] text-[16px] font-bold py-4 uppercase tracking-widest hover:bg-[#e6b800] transition-colors mt-8 border-[3px] border-[#1a1a1a] shadow-[6px_6px_0px_0px_#1a1a1a] active:translate-y-1.5 active:translate-x-1.5 active:shadow-none"
					>
						INITIATE_ACCOUNT
					</button>
				</form>

				<div
					class="mt-14 border-t border-[#1a1a1a]/20 pt-8 flex items-center justify-between w-full max-w-xl"
				>
					<span
						class="text-[#1a1a1a] text-[10px] font-semibold uppercase tracking-widest opacity-60 font-['Inter']"
						style="opacity: 0.6"
						>EXISTING MEMBER?</span
					>
					<a
						href="/login"
						class="text-[#0055ff] hover:text-[#003399] text-[12px] font-bold uppercase tracking-widest inline-flex items-center"
					>
						RETURN_TO_LOGIN
					</a>
				</div>
			</div>
		</main>

		<Footer />
	</div>
</template>
