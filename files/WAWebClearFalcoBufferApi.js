__d(
  "WAWebClearFalcoBufferApi",
  [
    "WALogger",
    "WAWebCanonicalWamFalcoBufferConstants",
    "WAWebLocalStorage",
    "WAWebStorageErrorHandlingUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 4194304,
      d = 5;
    async function m(t) {
      var n = t.force;
      if (r("WAWebLocalStorage") != null) {
        var a =
          n ||
          _() > c ||
          (await o("WAWebStorageErrorHandlingUtils").isQuotaActuallyExceeded());
        if (a) {
          var i = g();
          if (i.length !== 0)
            try {
              var l = 0,
                u = new Map();
              i.forEach(function (e) {
                var t = r("WAWebLocalStorage")[e];
                (typeof t == "string" && (l += f(e + t)),
                  r("WAWebLocalStorage").removeItem(e));
                for (var n of p(e, t)) {
                  var o,
                    a = n.queue + ":" + n.event,
                    i =
                      (o = u.get(a)) != null
                        ? o
                        : {
                            count: 0,
                            event: n.event,
                            maxItemBytes: 0,
                            queue: n.queue,
                            totalItemBytes: 0,
                          };
                  (i.count++,
                    (i.maxItemBytes = Math.max(i.maxItemBytes, n.itemBytes)),
                    (i.totalItemBytes += n.itemBytes),
                    u.set(a, i));
                }
              });
              var m = Array.from(u.values())
                .sort(function (e, t) {
                  return t.totalItemBytes - e.totalItemBytes;
                })
                .slice(0, d);
              o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[falco] cleared ",
                      " keys (",
                      " estimated storage bytes); top event contributors by estimated item bytes: ",
                      "",
                    ])),
                  i.length,
                  l,
                  JSON.stringify(m),
                )
                .sendLogs("wam_falco_buffer_cleared");
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
    }
    function p(e, t) {
      if (typeof t != "string") return [];
      try {
        var n = JSON.parse(t),
          a = null;
        if (
          (e ===
          o("WAWebCanonicalWamFalcoBufferConstants")
            .CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY
            ? (a = n)
            : n != null &&
              typeof n == "object" &&
              Array.isArray(n.items) &&
              (a = n.items),
          !Array.isArray(a))
        )
          return [];
        var i = [],
          l = e.split("^$")[0];
        for (var s of a)
          if (s != null && typeof s == "object" && typeof s.name == "string") {
            var c = s.name;
            i.push({ event: c, itemBytes: f(JSON.stringify(s)), queue: l });
          }
        return i;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] unable to read cleared event names",
                ])),
            )
            .catching(r("getErrorSafe")(e))
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
        e += f(t + o);
      }
      return e;
    }
    function f(e) {
      return e.length * 2;
    }
    function g() {
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
