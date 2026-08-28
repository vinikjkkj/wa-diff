__d(
  "AdsPEAdgroupDraftSelectors",
  [
    "AdsAdgroupDraftFragmentStore",
    "adsCreateSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsAdgroupDraftFragmentStore")],
        function () {
          return r("AdsAdgroupDraftFragmentStore").getState();
        },
        { name: i.id + ".stateSelector" },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t.loadState;
        },
        { name: i.id + ".loadStateSelector" },
      ),
      u = r("adsCreateSelector")(
        [e],
        function (t) {
          return function (e) {
            return t.dirtyIDs.has(e);
          };
        },
        { name: i.id + ".getIsDirtySelector" },
      );
    ((l.loadStateSelector = s), (l.getIsDirtySelector = u));
  },
  98,
);
