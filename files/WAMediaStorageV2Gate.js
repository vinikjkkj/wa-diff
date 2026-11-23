__d(
  "WAMediaStorageV2Gate",
  ["cr:17687"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        typeof ((e = self.caches) == null ? void 0 : e.open) == "function"
          ? n("cr:17687")
          : null,
      u = s == null ? "indexeddb" : "cache_storage";
    ((l.MediaStorageV2 = s), (l.mediaStorageLabel = u));
  },
  98,
);
