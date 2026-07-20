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
      u,
      c = 4194304;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.force;
          if (r("WAWebLocalStorage") != null) {
            var n =
              t ||
              _() > c ||
              (yield o(
                "WAWebStorageErrorHandlingUtils",
              ).isQuotaActuallyExceeded());
            if (n) {
              var a = f();
              if (a.length !== 0)
                try {
                  var i = new Set();
                  (a.forEach(function (e) {
                    var t = r("WAWebLocalStorage")[e];
                    r("WAWebLocalStorage").removeItem(e);
                    for (var n of p(e, t)) i.add(n);
                  }),
                    o("WALogger")
                      .LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[falco] cleared ",
                            " keys; lost event names: ",
                            "",
                          ])),
                        a.length,
                        Array.from(i).join(","),
                      )
                      .sendLogs("wam_falco_buffer_cleared"));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[falco] error clearing falco buffer",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("wam_falco_buffer_clear_error");
                }
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, n) {
      if (typeof n != "string") return [];
      try {
        var a = JSON.parse(n),
          i = null;
        if (
          (t ===
          o("WAWebCanonicalWamFalcoBufferConstants")
            .CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY
            ? (i = a)
            : a != null &&
              typeof a == "object" &&
              Array.isArray(a.items) &&
              (i = a.items),
          !Array.isArray(i))
        )
          return [];
        var l = [];
        for (var s of i)
          s != null &&
            typeof s == "object" &&
            typeof s.name == "string" &&
            l.push(s.name);
        return l;
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] unable to read cleared event names",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("wam_falco_buffer_clear_count_error"),
          []
        );
      }
    }
    function _() {
      if (r("WAWebLocalStorage") == null) return 0;
      var e = 0;
      for (var t of Object.keys(r("WAWebLocalStorage"))) {
        var n,
          o = (n = r("WAWebLocalStorage")[t]) != null ? n : "";
        e += (t + o).length;
      }
      return e;
    }
    function f() {
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
    l.clearFalcoBuffer = d;
  },
  98,
);
