__d(
  "WAFindMostRecentMediaEntry",
  ["WAMediaUtils", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = null;
      for (var n of e) {
        var r,
          a,
          i = n[0],
          l = n[1],
          s = o("WAMediaUtils").decodeMediaEntryData(l);
        (((r = t) == null ? void 0 : r[1].mediaKeyTimestamp) == null ||
          (s.mediaKeyTimestamp != null &&
            s.mediaKeyTimestamp >
              ((a = t) == null ? void 0 : a[1].mediaKeyTimestamp))) &&
          (t = [i, s]);
      }
      return t != null
        ? o("WAResultOrError").makeResult(t)
        : o("WAResultOrError").makeError("no-media-entry");
    }
    l.findMostRecentMediaEntry = e;
  },
  98,
);
