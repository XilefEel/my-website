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
  { name: 'Workshops Conducted', value: 2 },
]

const getSkillLevelColor = (level) => {
  if (level >= 80) return 'bg-green-500'
  if (level >= 60) return 'bg-yellow-500'
  return 'bg-red-500'
}
</script>
<template>
  <section class="py-12 px-16 bg-gray-100">
    <h1 class="text-3xl font-bold mb-6 ml-10">My Skills</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="bg-blue-100 p-4 py-8 rounded-lg shadow-md"
      >
        <h2 class="text-xl font-bold">{{ skill.name }}</h2>
        <div class="mt-2">
          <div class="bg-blue-200 h-4 rounded-full">
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
      <h1 class="text-3xl font-bold mb-6 m-10">My Statistics</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-xl">
        <div
          v-for="statistic in statistics"
          :key="statistic.name"
          class="bg-purple-100 p-4 py-8 rounded-lg shadow-md"
        >
          <h2 class="font-bold">{{ statistic.name }}</h2>
          <div class="mt-2">
            <p class="mt-1 text-gray-600">{{ statistic.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
