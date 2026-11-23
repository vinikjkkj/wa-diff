__d(
  "AdsPEFilterLoggerHelper",
  ["AdsPETypeaheadSearchableEntryTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = { source: "unknown" },
        n = e.getEntryType();
      switch (n) {
        case o("AdsPETypeaheadSearchableEntryTypes").FIELD:
          t.source = "build_in";
          break;
        case o("AdsPETypeaheadSearchableEntryTypes").RECENTLY_USED:
          t.source = "recently_used";
          break;
        case o("AdsPETypeaheadSearchableEntryTypes").SAVED:
          t.source = "saved";
          break;
        case o("AdsPETypeaheadSearchableEntryTypes").NAME:
        case o("AdsPETypeaheadSearchableEntryTypes").AUTOSUGGESTED_NAME:
        case o("AdsPETypeaheadSearchableEntryTypes").ACTION_CATEGORIES:
        case o("AdsPETypeaheadSearchableEntryTypes").NAME_KEYWORD:
        case o("AdsPETypeaheadSearchableEntryTypes").DELIVERY_STATUS:
        case o("AdsPETypeaheadSearchableEntryTypes").ID:
        case o("AdsPETypeaheadSearchableEntryTypes").RB_NAME:
        case o("AdsPETypeaheadSearchableEntryTypes").RB_DELIVERY_STATUS:
        case o("AdsPETypeaheadSearchableEntryTypes").RB_ID:
        case o("AdsPETypeaheadSearchableEntryTypes").SUGGESTED_FIELD:
          t.source = "search";
          break;
      }
      return t;
    }
    l.createFilterAuxiliaryData = e;
  },
  98,
);
