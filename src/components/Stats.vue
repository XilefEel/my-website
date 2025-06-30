<script setup>
const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 55 },
  { name: 'Vue.js', level: 60 },
  { name: 'Python', level: 85 },
]

const statistics = [
  { name: 'Projects Completed', value: 25 },
  { name: 'Years of Experience', value: 3 },
  { name: 'GitHub Followers', value: 150 },
  { name: 'LinkedIn Connections', value: 200 },
  { name: 'Blogs Written', value: 10 },
  { name: 'Certifications', value: 5 },
  { name: 'Languages Spoken', value: 3 },
  { name: 'Hackathons Participated', value: 4 },
  { name: 'Open Source Contributions', value: 15 },
]

const getSkillLevelColor = (level) => {
  if (level >= 80) return 'bg-green-500'
  if (level >= 60) return 'bg-yellow-500'
  return 'bg-red-500'
}
</script>
<template>
  <section class="rounded-t-3xl bg-gray-100 px-4 py-12 sm:px-16">
    <h1 class="mb-6 ml-10 text-2xl font-bold sm:text-3xl">My Skills</h1>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="rounded-lg bg-blue-100 p-4 py-8 shadow-md"
      >
        <h2 class="text-lg font-bold sm:text-xl">{{ skill.name }}</h2>
        <div class="mt-2">
          <div class="h-4 rounded-full bg-blue-200">
            <div
              class="h-full rounded-full"
              :style="{ width: skill.level + '%' }"
              :class="getSkillLevelColor(skill.level)"
            ></div>
          </div>
          <p class="mt-1 text-sm text-gray-600">{{ skill.level }}%</p>
        </div>
      </div>
    </div>
    <div class="mt-16">
      <h1 class="m-10 mb-6 text-2xl font-bold sm:text-3xl">My Statistics</h1>
      <div class="grid grid-cols-1 gap-6 text-center md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="statistic in statistics"
          :key="statistic.name"
          class="rounded-lg bg-purple-100 p-4 py-8 shadow-md"
        >
          <h2 class="text-lg font-bold sm:text-xl">{{ statistic.name }}</h2>
          <div class="mt-2">
            <p class="mt-1 text-gray-600">{{ statistic.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
