__d(
  "CometPreloaderInit",
  ["RelayAPIConfig", "RelayPrefetchedStreamCache"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e && e.length)
        for (var t of e) {
          var n;
          o("RelayPrefetchedStreamCache").registerPreloader(
            t.preloaderID,
            t.queryID,
            t.variables,
            (n = t.actorID) != null ? n : r("RelayAPIConfig").actorID,
            t.queryName,
          );
        }
    }
    l.initPreloaders = e;
  },
  98,
);
