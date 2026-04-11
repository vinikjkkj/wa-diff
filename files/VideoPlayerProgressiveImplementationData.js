__d(
  "VideoPlayerProgressiveImplementationData",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return /\.mpd(\?|$)/.test(e);
    }
    function s(t) {
      var n = t.hdSrc,
        o = t.hdSrcPreferred,
        a = t.mediaStream,
        i = t.sdSrc;
      if (a != null)
        return { hdSrc: null, hdSrcPreferred: o, mediaStream: a, sdSrc: null };
      if (n == null && i == null) {
        var l = r("err")(
          "Both HD and SD browser-native URLs are not available",
        );
        return ((l.name = "GotNoBrowserNativeURLs"), l);
      }
      var s = i != null && e(i),
        u = n != null && e(n);
      if (s || u) {
        var c = r("err")(
          "HD or SD browser-native URL points to a DASH manifest",
        );
        return ((c.name = "GotBrowserNativeURLsPointToDASH"), c);
      }
      return { hdSrc: n, hdSrcPreferred: o, mediaStream: null, sdSrc: i };
    }
    l.makeProgressiveImplementationData = s;
  },
  98,
);
