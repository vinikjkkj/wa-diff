__d(
  "AdsPageSelectorInitDataReducerPlugin",
  ["DefaultSettingsValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return {
            bookmarkedPageIDs: n.bookmarkedPageIDs || [],
            searchQuery: t.searchQuery,
            selectedBusinessID: n.businessID,
            selectedPageID: n.pageID || "",
            selectedSectionType:
              n.section || r("DefaultSettingsValues").ASSET_SECTION_TYPE,
          };
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
