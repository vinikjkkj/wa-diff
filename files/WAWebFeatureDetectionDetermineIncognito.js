__d(
  "WAWebFeatureDetectionDetermineIncognito",
  [
    "Promise",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebIndexedDB",
    "WAWebLocalStorage",
    "WAWebUA",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      var t = new (s || (s = n("Promise")))(function (e) {
        function t() {
          e(!1);
        }
        if (self.requestFileSystem)
          self.requestFileSystem(window.TEMPORARY, 1, t, function (t) {
            e(t.name === "SecurityError");
          });
        else if (r("WAWebIndexedDB")) {
          var n = r("WAWebIndexedDB").open("pb_detect");
          n
            ? ((n.onsuccess = t),
              (n.onerror = function (t) {
                (t.preventDefault(),
                  window.InvalidStateError
                    ? e(t instanceof window.InvalidStateError)
                    : e(!0));
              }))
            : t();
        } else o("WAWebUA").UA.isTrident ? e(!0) : t();
      }).then(function (e) {
        if (e) return e;
        if (!r("WAWebLocalStorage")) return !1;
        try {
          return (
            r("WAWebLocalStorage").setItem("INCOG", "0"),
            r("WAWebLocalStorage").removeItem("INCOG"),
            !1
          );
        } catch (e) {
          var t = r("getErrorSafe")(e);
          if (t.name === "QuotaExceededError") return !0;
          throw t;
        }
      });
      return o("WAPromiseTimeout")
        .promiseTimeout(t, 100, "detectIncognitoTimeout")
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WACustomError").TimeoutError,
            o("WAWebBoolFunc").returnFalse,
          ),
        )
        .catch(function (t) {
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "promiseUtil:determineIncognito failed check: ",
                    "",
                  ])),
                String(t),
              )
              .sendLogs("incog-throw"),
            !1
          );
        });
    }
    l.default = u;
  },
  98,
);
