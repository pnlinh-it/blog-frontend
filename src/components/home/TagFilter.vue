<template>
  <div class="flex flex-wrap ">
    <tag-selector @onSelectorChange="onSelectorChange"
                  v-for="tag in tags"
                  :key="tag.id"
                  v-bind="tag"/>
  </div>
</template>

<script>
  import TagSelector from "@/components/home/TagSelector";

  export default {
    components: {
      TagSelector
    },
    data() {
      return {
        tags: [
          {
            id: 44,
            name: "CI/CD",
            isSelect: false
          },
          {
            id: 66,
            name: "Kotlin",
            isSelect: false
          },
          {
            id: 88,
            name: "Android",
            isSelect: false
          },
          {
            id: 78,
            name: "Vue",
            isSelect: false
          }
        ]
      }
    },
    methods: {
      onSelectorChange(tagId) {
        const tagIndex = this.tags.find(element => element.id === tagId)
        tagIndex.isSelect = !tagIndex.isSelect
      }
    },
  }
</script>

<style scoped>

</style>
