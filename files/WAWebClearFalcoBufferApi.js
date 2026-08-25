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
      c = 4194304,
      d = 5;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.force;
          if (r("WAWebLocalStorage") != null) {
            var n =
              t ||
              f() > c ||
              (yield o(
                "WAWebStorageErrorHandlingUtils",
              ).isQuotaActuallyExceeded());
            if (n) {
              var a = h();
              if (a.length !== 0)
                try {
                  var i = 0,
                    l = new Map();
                  a.forEach(function (e) {
                    var t = r("WAWebLocalStorage")[e];
                    (typeof t == "string" && (i += g(e + t)),
                      r("WAWebLocalStorage").removeItem(e));
                    for (var n of _(e, t)) {
                      var o,
                        a = n.queue + ":" + n.event,
                        s =
                          (o = l.get(a)) != null
                            ? o
                            : {
                                count: 0,
                                event: n.event,
                                maxItemBytes: 0,
                                queue: n.queue,
                                totalItemBytes: 0,
                              };
                      (s.count++,
                        (s.maxItemBytes = Math.max(
                          s.maxItemBytes,
                          n.itemBytes,
                        )),
                        (s.totalItemBytes += n.itemBytes),
                        l.set(a, s));
                    }
                  });
                  var m = Array.from(l.values())
                    .sort(function (e, t) {
                      return t.totalItemBytes - e.totalItemBytes;
                    })
                    .slice(0, d);
                  o("WALogger")
                    .LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[falco] cleared ",
                          " keys (",
                          " estimated storage bytes); top event contributors by estimated item bytes: ",
                          "",
                        ])),
                      a.length,
                      i,
                      JSON.stringify(m),
                    )
                    .sendLogs("wam_falco_buffer_cleared");
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
        p.apply(this, arguments)
      );
    }
    function _(t, n) {
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
        var l = [],
          s = t.split("^$")[0];
        for (var u of i)
          if (u != null && typeof u == "object" && typeof u.name == "string") {
            var c = u.name;
            l.push({ event: c, itemBytes: g(JSON.stringify(u)), queue: s });
          }
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
    function f() {
      if (r("WAWebLocalStorage") == null) return 0;
      var e = 0;
      for (var t of Object.keys(r("WAWebLocalStorage"))) {
        var n,
          o = (n = r("WAWebLocalStorage")[t]) != null ? n : "";
        e += g(t + o);
      }
      return e;
    }
    function g(e) {
      return e.length * 2;
    }
    function h() {
      return r("WAWebLocalStorage") == null
        ? []
        : Object.keys(r("WAWebLocalStorage")).filter(function (e) {
            return (
              e.includes("falco_queue_log") ||
              e.includes("falco_queue_immediately") ||
              e.includes("falco_queue_critical") ||
              e ===
                o("WAWebCanonicalWamFalcoBufferConstants")
                  .CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY
            );
          });
    }
    l.clearFalcoBuffer = m;
  },
  98,
);
