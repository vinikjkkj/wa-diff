__d(
  "AdsUEditorAdgroupCachedChildAttachmentIndexStoreState",
  ["AdsUEditorHostIDs", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = r("immutable")).Record({
        selectedIDsForHost: s.Map(
          ((e = {}),
          (e[r("AdsUEditorHostIDs").CREATION] = s.Set()),
          (e[r("AdsUEditorHostIDs").EDITING] = s.Set()),
          e),
        ),
        indexMap: s.Map(),
      }),
      c = u;
    l.default = c;
  },
  98,
);
