__d(
  "VideoPlayerProgressiveImplementationData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new Error(t);
      return ((n.name = e), (n.messageFormat = t), (n.messageParams = []), n);
    }
    function l(e) {
      return /\.mpd(\?|$)/.test(e);
    }
    function s(t) {
      var n = t.hdSrc,
        r = t.hdSrcPreferred,
        o = t.mediaStream,
        a = t.sdSrc;
      if (o != null)
        return { hdSrc: null, hdSrcPreferred: r, mediaStream: o, sdSrc: null };
      if (n == null && a == null)
        return e(
          "GotNoBrowserNativeURLs",
          "Both HD and SD browser-native URLs are not available",
        );
      var i = a != null && l(a),
        s = n != null && l(n);
      return i || s
        ? e(
            "GotBrowserNativeURLsPointToDASH",
            "HD or SD browser-native URL points to a DASH manifest",
          )
        : { hdSrc: n, hdSrcPreferred: r, mediaStream: null, sdSrc: a };
    }
    i.makeProgressiveImplementationData = s;
  },
  66,
);
