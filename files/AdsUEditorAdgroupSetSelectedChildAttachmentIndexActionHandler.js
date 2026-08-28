__d(
  "AdsUEditorAdgroupSetSelectedChildAttachmentIndexActionHandler",
  [
    "AdsUEditorAdgroupCachedChildAttachmentIndexMutators",
    "AdsUEditorAdgroupSetSelectedChildAttachmentIndexDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o(
          "AdsUEditorAdgroupSetSelectedChildAttachmentIndexDataActionFlux",
        ).actionType,
        mutate: function (t, n) {
          return o(
            "AdsUEditorAdgroupCachedChildAttachmentIndexMutators",
          ).setIndexForAdgroupIDs(n, t.adgroupIDs, t.nextIndex);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
