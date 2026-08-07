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
              var a = n.downloadQpl;
              if (!o("WAWebMediaDataUtils").shouldUseLruMediaStore(n.type))
                return null;
              var i = yield o("WAWebMediaStore").LruMediaStore.getName();
              try {
                a.addPoint("lru_cache_read_start");
                var l = yield o("WAWebMediaStore").LruMediaStore.get(u(n));
                return (
                  a.addPoint(
                    "lru_cache_read_end",
                    babelHelpers.extends(
                      {},
                      l == null ? {} : { int: { byteLength: l.byteLength } },
                      {
                        string: {
                          lruCacheBackend: i,
                          lruCacheReadResult: l != null ? "hit" : "miss",
                        },
                      },
                    ),
                  ),
                  l
                );
              } catch (t) {
                return (
                  a.addPoint("lru_cache_read_fail", {
                    string: { lruCacheBackend: i, lruCacheReadResult: "error" },
                  }),
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
              var a = n.downloadQpl;
              if (o("WAWebMediaDataUtils").shouldUseLruMediaStore(n.type)) {
                var i = yield o("WAWebMediaStore").LruMediaStore.getName();
                try {
                  (a.addPoint("lru_cache_write_start", {
                    int: { byteLength: t.byteLength },
                  }),
                    yield o("WAWebMediaStore").LruMediaStore.put(u(n), t),
                    a.addPoint("lru_cache_write_end", {
                      string: {
                        lruCacheBackend: i,
                        lruCacheWriteResult: "completed",
                      },
                    }));
                } catch (e) {
                  (a.addPoint("lru_cache_write_fail", {
                    string: {
                      lruCacheBackend: i,
                      lruCacheWriteResult: "error",
                    },
                  }),
                    o("WALogger")
                      .WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose(
                            ["downloadManager.asyncCache.set error:\n", ""],
                            ["downloadManager.asyncCache.set error:\\n", ""],
                          )),
                        r("WAWebSerializeError")(e),
                      )
                      .verbose());
                }
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
