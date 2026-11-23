__d(
  "toMAIBAComposerContextChip",
  ["rankMAIBAContextSuggestions"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        display_name: e.name,
        entity_id: e.id,
        entity_type: e.type,
        type_label: o(
          "rankMAIBAContextSuggestions",
        ).getMAIBAContextAssetTypeLabel(e),
      };
    }
    l.default = e;
  },
  98,
);
