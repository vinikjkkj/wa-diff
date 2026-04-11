__d(
  "WAWebDownloadAndDecryptCache",
  [
    "WALogger",
    "WAWebMediaDataUtils",
    "WAWebMediaStore",
    "WAWebSerializeError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t,
        n,
        r = (t = e.progressiveJpegOpts) == null ? void 0 : t.scanCount,
        o = (n = e.progressiveJpegOpts) == null ? void 0 : n.scanLengths;
      if (r != null && o)
        return e.filehash + "-" + r + "/" + o.length + "-scans";
      if (e.partialVideoOpts) {
        var a = e.partialVideoOpts.secondsToDownload;
        return e.filehash + "-" + a + "-seconds";
      }
      return e.filehash;
    }
    var c = (function () {
      function t() {}
      var a = t.prototype;
      return (
        (a.get = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              if (!o("WAWebMediaDataUtils").shouldUseLruMediaStore(n.type))
                return null;
              try {
                return yield o("WAWebMediaStore").LruMediaStore.get(u(n));
              } catch (t) {
                return (
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose(
                          ["downloadManager.asyncCache.get error:\n", ""],
                          ["downloadManager.asyncCache.get error:\\n", ""],
                        )),
                      r("WAWebSerializeError")(t),
                    )
                    .verbose(),
                  null
                );
              }
            },
          );
          function a(e, n) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.set = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              if (o("WAWebMediaDataUtils").shouldUseLruMediaStore(n.type))
                try {
                  yield o("WAWebMediaStore").LruMediaStore.put(u(n), t);
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose(
                          ["downloadManager.asyncCache.set error:\n", ""],
                          ["downloadManager.asyncCache.set error:\\n", ""],
                        )),
                      r("WAWebSerializeError")(e),
                    )
                    .verbose();
                }
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })();
    ((l.getLRUStoreKey = u), (l.DownloadAndDecryptCache = c));
  },
  98,
);
