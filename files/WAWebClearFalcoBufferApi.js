__d(
  "WAWebClearFalcoBufferApi",
  ["WALogger", "WAWebLocalStorage", "WAWebStorageErrorHandlingUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1048576;
    async function c(t) {
      var n = t.force,
        a = d(),
        i = a.keysToRemove,
        l = a.totalBytes;
      if (i.length !== 0 && r("WAWebLocalStorage") != null) {
        var c =
          n ||
          l > u ||
          (await o("WAWebStorageErrorHandlingUtils").isQuotaActuallyExceeded());
        if (c)
          try {
            (i.forEach(function (e) {
              r("WAWebLocalStorage").removeItem(e);
            }),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] Cleared ",
                    " falco keys, total size: ",
                    " bytes",
                  ])),
                i.length,
                l,
              ));
          } catch (e) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] Error during falco buffer clearing: ",
                  "",
                ])),
              e,
            );
          }
      }
    }
    function d() {
      if (r("WAWebLocalStorage") == null)
        return { totalBytes: 0, keysToRemove: [] };
      var e = Object.keys(r("WAWebLocalStorage")),
        t = [],
        n = 0;
      for (var o of e)
        if (o.includes("falco_queue_log") || o === "WAWebFalcoBuffer") {
          var a,
            i = (a = r("WAWebLocalStorage")[o]) != null ? a : "";
          ((n += (o + i).length), t.push(o));
        }
      return { totalBytes: n, keysToRemove: t };
    }
    l.clearFalcoBuffer = c;
  },
  98,
);
