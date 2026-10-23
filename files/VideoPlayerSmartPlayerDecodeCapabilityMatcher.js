__d(
  "VideoPlayerSmartPlayerDecodeCapabilityMatcher",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 30,
      l = 1;
    function s(e) {
      switch (e.toLowerCase()) {
        case "avc":
        case "avc1":
        case "avc3":
          return "avc";
        case "vp9":
        case "vp09":
          return "vp9";
        case "av1":
        case "av01":
          return "av1";
        default:
          return null;
      }
    }
    function u(e, t) {
      var n = Math.min(e.width, e.height),
        r = Math.max(e.width, e.height),
        o = Math.min(t.width, t.height),
        a = Math.max(t.width, t.height),
        i = n * r,
        l = o * a;
      return i !== l
        ? i < l
        : r !== a
          ? r < a
          : n !== o
            ? n < o
            : e.frameRate !== t.frameRate
              ? e.frameRate < t.frameRate
              : e.bitrate < t.bitrate;
    }
    function c(t, n) {
      var r,
        o = s(n.codecFamily);
      if (o == null) return null;
      var a = Math.min(n.width, n.height),
        i = Math.max(n.width, n.height),
        c = (r = n.frameRate) != null ? r : e,
        d = null;
      for (var m of t) {
        var p = Math.min(m.width, m.height),
          _ = Math.max(m.width, m.height);
        m.codecFamily !== o ||
          p < a ||
          _ < i ||
          m.frameRate + l < c ||
          m.bitrate < n.bitrate ||
          ((d == null || u(m, d)) && (d = m));
      }
      return d;
    }
    i.getVideoPlayerSmartPlayerDecodeCapability = c;
  },
  66,
);
