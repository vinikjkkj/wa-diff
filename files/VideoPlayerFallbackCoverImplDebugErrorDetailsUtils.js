__d(
  "VideoPlayerFallbackCoverImplDebugErrorDetailsUtils",
  ["Actor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = null;
      try {
        var t = o("Actor").useActor(),
          n = t[0];
        e = n;
      } catch (e) {}
      return e;
    }
    function s(e, t, n) {
      return e === t ? 0 : n.has(e) ? -1 : n.has(t) ? 1 : 0;
    }
    function u(e, t) {
      var n,
        r,
        o = new Set();
      return (
        o.add("ACTOR_ID"),
        o.add("VIDEO_ID"),
        ((n =
          e == null || (r = e.metadata) == null || (r = r.getAll()) == null
            ? void 0
            : r.slice()) != null
          ? n
          : []
        )
          .filter(function (e) {
            var t = e[0],
              n = e[1];
            return n !== "ERROR_URL";
          })
          .concat(t != null ? [["", "ACTOR_ID", t]] : [])
          .sort(function (e, t) {
            var n = e[0],
              r = e[1],
              a = t[0],
              i = t[1];
            return n.localeCompare(a) || s(r, i, o) || r.localeCompare(i);
          })
          .map(function (e) {
            var t = e[0],
              n = e[1],
              r = e[2];
            return (
              (t === "" || t === "COMET_VIDEO" ? "" : t + ":") + n + ":" + r
            );
          })
      );
    }
    ((l.useActorIDIfAvailable = e),
      (l.prepareErrorMetadataForErrorDetailsDisplay = u));
  },
  98,
);
