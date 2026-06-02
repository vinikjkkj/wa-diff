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
          if (!o("WAWebMediaDataUtils").shouldUseLruMediaStore(a.type))
            return null;
          try {
            return await o("WAWebMediaStore").LruMediaStore.get(u(a));
          } catch (t) {
            return (
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
                  r("WAWebSerializeError")(t),
                )
                .verbose(),
              null
            );
          }
        }),
        (n.set = async function (t, n, a) {
          if (o("WAWebMediaDataUtils").shouldUseLruMediaStore(a.type))
            try {
              await o("WAWebMediaStore").LruMediaStore.put(u(a), n);
            } catch (e) {
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
                  r("WAWebSerializeError")(e),
                )
                .verbose();
            }
        }),
        t
      );
    })();
    ((l.getLRUStoreKey = u), (l.DownloadAndDecryptCache = c));
  },
  98,
);
