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
      var a = n.width >= n.height,
        i = (r = n.frameRate) != null ? r : e,
        c = null;
      for (var d of t)
        d.codecFamily !== o ||
          d.width >= d.height !== a ||
          d.width < n.width ||
          d.height < n.height ||
          d.frameRate + l < i ||
          d.bitrate < n.bitrate ||
          ((c == null || u(d, c)) && (c = d));
      return c;
    }
    i.getVideoPlayerSmartPlayerDecodeCapability = c;
  },
  66,
);
