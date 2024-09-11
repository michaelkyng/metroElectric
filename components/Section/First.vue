<template>
  <div class="flex flex-col items-center justify-center gap-20">
    <div
      class="flex flex-col md:flex-row py-20 justify-between items-center gap-28"
      :class="container"
    >
      <div class="flex flex-1 flex-col gap-y-2.5">
        <h3
          v-motion
          :initial="{ opacity: 1, y: 20 }"
          :enter="{ opacity: 1, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="500"
          class="font-main text-[#1C6220]"
        >
          About Us
        </h3>
        <p
          v-motion
          :initial="{ opacity: 1, y: 50 }"
          :enter="{ opacity: 1, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="500"
          class="font-main text-2xl lg:text-3xl text-[#113912]"
        >
          Leading The Electric Vehicle Revolution
        </p>
        <p
          v-motion
          :initial="{ opacity: 1, y: 150 }"
          :enter="{ opacity: 1, y: 150 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="600"
          class="font-noto text-base lg:text-lg text-[#505050] tracking-wide"
        >
          Metropolitan Electric Limited is at the forefront of revolutionizing
          the Electric Vehicle (EV) industry across Africa. Established in
          Nigeria, our company is committed to leading the adoption of Electric
          Vehicles in Nigeria and promoting sustainable mobility throughout the
          continent. We are dedicated to providing innovative and sustainable
          transportation solutions tailored for the African market.
        </p>
        <NuxtLink
          v-motion
          :initial="{ opacity: 1, y: 20 }"
          :enter="{ opacity: 1, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="700"
          to="#"
          class="font-main text-sm text-[#505050] underline font-semibold hover:no-underline"
        >
          Discover Our Story
        </NuxtLink>
      </div>
      <div v-motion-fade-visible-once :duration="1200" class="flex-1">
        <img src="/sectionImage1.png" alt="Gear Image" />
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-y-2.5 pb-20" :class="container">
      <h3
        v-motion
        :initial="{ opacity: 1, y: 20 }"
        :enter="{ opacity: 1, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="400"
        :delay="500"
        class="font-main text-[#1C6220]"
      >
        Our Core Values
      </h3>
      <p
        v-motion
        :initial="{ opacity: 1, y: 50 }"
        :enter="{ opacity: 1, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="400"
        :delay="500"
        class="font-main text-2xl lg:text-3xl text-[#113912]"
      >
        The principles that guide us
      </p>
      <p
        v-motion
        :initial="{ opacity: 1, y: 150 }"
        :enter="{ opacity: 1, y: 150 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="400"
        :delay="600"
        class="font-noto text-base lg:text-lg text-[#505050] tracking-wide"
      >
        At Metropolitan Electric Limited, our core values are encapsulated in
        the acronym SUSTAIN, reflecting our commitment to sustainability and
        excellence in all our endeavors.
      </p>
      <div
        class="flex flex-wrap gap-y-10 mt-5 justify-center md:justify-around lg:justify-center gap-x-8 md:gap-x-0 lg:gap-x-8"
      >
        <div class="flex flex-col gap-10 md:w-4/12 lg:w-3/12">
          <SectionValuesCard
            title="Sustainability"
            description="We are dedicated to promoting and implementing sustainable practices in every aspect of our business, from vehicle production to service delivery. Our commitment to the environment drives our innovation and operational strategies."
          />
          <SectionValuesCard
            title="Transparency"
            description="We conduct our business with the highest standards of integrity, ensuring transparency, honesty, and fairness in all our dealings with customers, partners, and stakeholders."
          >
            <template>
              <IconsTransparency />
            </template>
          </SectionValuesCard>
        </div>

        <div class="flex flex-col gap-10 md:w-4/12 lg:w-3/12">
          <SectionValuesCard
            title="Unity"
            description="We believe in the power of partnerships and work closely with governments, businesses, and communities to promote the adoption of Electric Vehicles and sustainable mobility solutions."
          >
            <template>
              <IconsUnity />
            </template>
          </SectionValuesCard>

          <SectionValuesCard
            title="Adaptability"
            description="We are agile and responsive to the dynamic needs of the market. Our ability to adapt quickly to changing circumstances enables us to stay ahead and provide relevant and effective solutions."
          >
            <template>
              <IconsAdaptation />
            </template>
          </SectionValuesCard>
          <SectionValuesCard
            title="Nurturing"
            description="Our customers are at the heart of everything we do. We are committed to understanding their needs and delivering exceptional service and products that exceed their expectations."
          >
            <template>
              <IconsNurturing />
            </template>
          </SectionValuesCard>
        </div>

        <div class="flex flex-col gap-10 md:w-4/12 lg:w-3/12">
          <SectionValuesCard
            title="Safety"
            description="Safety is a top priority in all our operations. We ensure that our vehicles and services meet the highest safety standards to protect our customers and the communities we serve."
            ><template> <IconsSafety /> </template
          ></SectionValuesCard>
          <SectionValuesCard
            title="Innovation"
            description="We believe in continuous improvement and embrace cutting-edge technologies to provide state-of-the-art Electric Vehicle solutions. Our goal is to lead the market with forward-thinking ideas and advanced mobility solutions."
          >
            <template>
              <IconsInnovation />
            </template>
          </SectionValuesCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AcademicCapIcon, LifebuoyIcon } from "@heroicons/vue/24/outline";
const { container } = useTailwindConfig();
</script>
