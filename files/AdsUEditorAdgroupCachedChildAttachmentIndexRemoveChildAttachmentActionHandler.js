__d(
  "AdsUEditorAdgroupCachedChildAttachmentIndexRemoveChildAttachmentActionHandler",
  [
    "AdsUEditorAdgroupCachedChildAttachmentIndexMutators",
    "AdsUEditorAdgroupRemoveChildAttachmentDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorAdgroupRemoveChildAttachmentDataActionFlux")
          .actionType,
        mutate: function (t, n) {
          return t.index === t.childAttachmentCount - 1
            ? o(
                "AdsUEditorAdgroupCachedChildAttachmentIndexMutators",
              ).setIndexForAdgroupIDs(n, t.adgroupIDs, t.index - 1)
            : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
