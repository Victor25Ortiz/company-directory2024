<script setup>
import { faker } from '@faker-js/faker'
const fullname = faker.person.fullname()
</script>

<template>
    {{ fullname }} <br />
</template>