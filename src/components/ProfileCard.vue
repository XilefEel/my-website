<script setup>
import Card from '@/components/Card.vue'
</script>

<template>
  <section class="py-4 mb-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg">
        <Card bg="bg-blue-200">
          <h2 class="text-2xl font-bold">What I'm Not</h2>
          <p class="mt-2 mb-4">
            I am not just a programmer; I am a lifelong learner and a problem solver. I do not
            confine myself to a single technology or framework. Instead, I embrace challenges and
            constantly seek new opportunities to expand my skill set and explore different
            programming languages, libraries, and frameworks.
          </p>
        </Card>
        <Card bg="bg-blue-100">
          <h2 class="text-2xl font-bold">What I Do</h2>
          <p class="mt-2 mb-4">
            I specialize in web development, focusing on building responsive and user-friendly
            applications. My expertise includes front-end technologies like Vue.js and back-end
            frameworks such as Vue.js and Node.js. I enjoy collaborating with teams to bring ideas
            to life and solve complex problems.
          </p>
        </Card>
        <Card bg="bg-blue-200">
          <h2 class="text-2xl font-bold">What I Can Bring</h2>
          <p class="mt-2 mb-4">
            I bring a unique blend of technical skills and creativity to every project. My
            commitment to continuous learning ensures that I stay updated with the latest trends and
            technologies. I am dedicated to delivering high-quality work that exceeds expectations
            and contributes to the success of my team and clients.
          </p>
        </Card>
      </div>
    </div>
  </section>
</template>
