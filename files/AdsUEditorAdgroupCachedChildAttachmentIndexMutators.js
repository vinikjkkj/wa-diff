__d(
  "AdsUEditorAdgroupCachedChildAttachmentIndexMutators",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = e.indexMap.withMutations(function (e) {
        t.forEach(function (t) {
          return e.set(t, n);
        });
      });
      return e.set("indexMap", r);
    }
    i.setIndexForAdgroupIDs = e;
  },
  66,
);
