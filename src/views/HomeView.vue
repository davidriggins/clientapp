<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <webix-ui :config="{ view: 'text' }" /> -->
  </div>
</template>

<script setup>
var grid1 = {
  view: "datatable",
  columns: [
    { id: "rank", header: "", css: "rank" },
    { id: "title", header: "Film title", fillspace: true },
    {
      id: "year",
      header: [
        "Outcome",
        {
          content: "multiSelectFilter",
          suggest: { fitMaster: false, width: 200 },
        },
      ],
    },
    { id: "votes", header: "Votes" },
  ],
  autoheight: true,
  scroll: "auto",
  url: "https://desktopqa/libs/webix-pro/8.0.1//samples/15_datatable/01_loading/data/data.json",
};

webix.ui({
  view: "scrollview",
  scroll: "y",
  body: {
    rows: [{ view: "label", label: "JSON" }, grid1],
  },
});
</script>
