__d(
  "WAWebDownloadAndDecryptCache",
  ["WALogger", "WAWebMediaDataUtils", "WAWebMediaStore", "WAWebSerializeError"],
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
      var n = t.prototype;
      return (
        (n.get = async function (n, a) {
          var t = a.downloadQpl;
          if (!o("WAWebMediaDataUtils").shouldUseLruMediaStore(a.type))
            return null;
          var i = await o("WAWebMediaStore").LruMediaStore.getName();
          try {
            t.addPoint("lru_cache_read_start");
            var l = await o("WAWebMediaStore").LruMediaStore.get(u(a));
            return (
              t.addPoint(
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
          } catch (n) {
            return (
              t.addPoint("lru_cache_read_fail", {
                string: { lruCacheBackend: i, lruCacheReadResult: "error" },
              }),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose(
                      [
                        `downloadManager.asyncCache.get error:
`,
                        "",
                      ],
                      ["downloadManager.asyncCache.get error:\\n", ""],
                    )),
                  r("WAWebSerializeError")(n),
                )
                .verbose(),
              null
            );
          }
        }),
        (n.set = async function (t, n, a) {
          var e = a.downloadQpl;
          if (o("WAWebMediaDataUtils").shouldUseLruMediaStore(a.type)) {
            var i = await o("WAWebMediaStore").LruMediaStore.getName();
            try {
              (e.addPoint("lru_cache_write_start", {
                int: { byteLength: n.byteLength },
              }),
                await o("WAWebMediaStore").LruMediaStore.put(u(a), n),
                e.addPoint("lru_cache_write_end", {
                  string: {
                    lruCacheBackend: i,
                    lruCacheWriteResult: "completed",
                  },
                }));
            } catch (t) {
              (e.addPoint("lru_cache_write_fail", {
                string: { lruCacheBackend: i, lruCacheWriteResult: "error" },
              }),
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          `downloadManager.asyncCache.set error:
`,
                          "",
                        ],
                        ["downloadManager.asyncCache.set error:\\n", ""],
                      )),
                    r("WAWebSerializeError")(t),
                  )
                  .verbose());
            }
          }
        }),
        t
      );
    })();
    ((l.getLRUStoreKey = u), (l.DownloadAndDecryptCache = c));
  },
  98,
);
