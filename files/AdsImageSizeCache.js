__d(
  "AdsImageSizeCache",
  [
    "BackgroundImageDOMImageSizePool",
    "CachedDOMImageSizePool",
    "FBLogger",
    "Run",
    "SnappyCompress",
    "SnappyCompressUtil",
    "WebStorage",
    "getErrorSafe",
    "mapObject",
    "runOnce",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "am_image_size_cache",
      c = 0,
      d = 50,
      m = -1,
      p = !0,
      _ = new (r("CachedDOMImageSizePool"))(d, m, p);
    function f(e) {
      for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++)
        n[r] = e.charCodeAt(r);
      return n;
    }
    function g() {
      var t = (e || (e = r("WebStorage"))).getLocalStorageForRead();
      if (t) {
        var n = t.getItem(u);
        if (n != null) {
          var a = null;
          try {
            var i = new TextDecoder("ascii").decode(
              o("SnappyCompress").uncompress(f(atob(n))),
            );
            ((a = JSON.parse(i)), delete a.schemaVersion, _.loadCache(a));
          } catch (e) {
            var l, s;
            r("FBLogger")("ads_image_size_cache")
              .catching(r("getErrorSafe")(e))
              .warn(
                "Caught exception trying to restore from local storage. Schema version %d",
                (l = (s = a) == null ? void 0 : s.schemaVersion) != null
                  ? l
                  : -1,
              );
          }
        }
      }
    }
    var h = r("runOnce")(function () {
      var t = o("Run").onBeforeUnload(function () {
        try {
          var n = (e || (e = r("WebStorage"))).getLocalStorage(),
            a = (s || (s = r("mapObject")))(_.getCache(), function (e) {
              return { width: e.width, height: e.height };
            });
          if (((a.schemaVersion = c), n)) {
            var i = JSON.stringify(a),
              l = o("SnappyCompressUtil").compressStringToSnappy(i);
            l != null && n.setItem(u, l);
          }
        } catch (e) {
          r("FBLogger")("ads_image_size_cache")
            .catching(r("getErrorSafe")(e))
            .warn(
              "Caught exception trying to serialize to local storage. Schema version %d",
              c,
            );
        }
        t.remove();
      });
    });
    function y() {
      (g(), h(), o("BackgroundImageDOMImageSizePool").setCache(_));
    }
    function C() {
      return _;
    }
    ((l.init = y), (l.getSharedCache = C));
  },
  98,
);
