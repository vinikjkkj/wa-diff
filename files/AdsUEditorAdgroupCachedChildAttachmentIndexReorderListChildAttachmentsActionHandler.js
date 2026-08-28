__d(
  "AdsUEditorAdgroupCachedChildAttachmentIndexReorderListChildAttachmentsActionHandler",
  [
    "AdsUEditorAdgroupCachedChildAttachmentIndexMutators",
    "AdsUEditorAdgroupReorderListChildAttachmentsDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorAdgroupReorderListChildAttachmentsDataActionFlux")
          .actionType,
        mutate: function (t, n) {
          var e = t.adgroupIDs,
            r = t.selectedIndex;
          return o(
            "AdsUEditorAdgroupCachedChildAttachmentIndexMutators",
          ).setIndexForAdgroupIDs(n, e, r);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
