__d(
  "WAWebClearFalcoBufferApi",
  [
    "WALogger",
    "WAWebCanonicalWamFalcoBufferConstants",
    "WAWebLocalStorage",
    "WAWebStorageErrorHandlingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 4194304;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.force;
          if (r("WAWebLocalStorage") != null) {
            var a =
              n ||
              m() > u ||
              (yield o(
                "WAWebStorageErrorHandlingUtils",
              ).isQuotaActuallyExceeded());
            if (a) {
              var i = p();
              if (i.length !== 0)
                try {
                  (i.forEach(function (e) {
                    r("WAWebLocalStorage").removeItem(e);
                  }),
                    o("WALogger")
                      .LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[falco] cleared ",
                            " keys",
                          ])),
                        i.length,
                      )
                      .sendLogs("wam_falco_buffer_cleared"));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[falco] error clearing falco buffer",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("wam_falco_buffer_clear_error");
                }
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      if (r("WAWebLocalStorage") == null) return 0;
      var e = 0;
      for (var t of Object.keys(r("WAWebLocalStorage"))) {
        var n,
          o = (n = r("WAWebLocalStorage")[t]) != null ? n : "";
        e += (t + o).length;
      }
      return e;
    }
    function p() {
      return r("WAWebLocalStorage") == null
        ? []
        : Object.keys(r("WAWebLocalStorage")).filter(function (e) {
            return (
              e.includes("falco_queue_log") ||
              e ===
                o("WAWebCanonicalWamFalcoBufferConstants")
                  .CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY
            );
          });
    }
    l.clearFalcoBuffer = c;
  },
  98,
);
