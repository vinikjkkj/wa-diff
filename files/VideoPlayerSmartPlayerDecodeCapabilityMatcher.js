__d(
  "VideoPlayerSmartPlayerDecodeCapabilityMatcher",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 30;
    function l(e) {
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
    function s(e, t) {
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
    function u(t, n) {
      var r,
        o = l(n.codecFamily);
      if (o == null) return null;
      var a = Math.min(n.width, n.height),
        i = Math.max(n.width, n.height),
        u = (r = n.frameRate) != null ? r : e,
        c = null;
      for (var d of t) {
        var m = Math.min(d.width, d.height),
          p = Math.max(d.width, d.height);
        d.codecFamily !== o ||
          m < a ||
          p < i ||
          d.frameRate < u ||
          d.bitrate < n.bitrate ||
          ((c == null || s(d, c)) && (c = d));
      }
      return c;
    }
    i.getVideoPlayerSmartPlayerDecodeCapability = u;
  },
  66,
);
