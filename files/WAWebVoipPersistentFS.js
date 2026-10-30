__d(
  "WAWebVoipPersistentFS",
  [
    "Promise",
    "WALogger",
    "WAWebPonyfillsIdleCallback",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = "/wa_voip_storage",
      v = "call_stats_",
      S = 1e3,
      R = 10,
      L = !1,
      E = null,
      k = !1,
      I = null,
      T = 0,
      D = null,
      x = 5e3,
      $ = 2;
    function P(e, t) {
      return new (C || (C = n("Promise")))(function (n, o) {
        var a = !1,
          i = window.setTimeout(function () {
            a ||
              ((a = !0),
              o(r("err")("[IDBFS] syncfs timed out after " + x + "ms")));
          }, x);
        e.syncfs(t, function (e) {
          a || ((a = !0), window.clearTimeout(i), e ? o(e) : n());
        });
      });
    }
    function N(e) {
      return e == null || typeof e != "object"
        ? !1
        : e.name === "InvalidStateError";
    }
    function M(e) {
      var t = e.filesystems.IDBFS;
      t == null || t.quit == null || t.quit();
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield P(e, !1);
          } catch (t) {
            if (!N(t)) throw t;
            M(e);
            try {
              yield P(e, !1);
            } catch (e) {
              if (!N(e)) throw e;
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] sync skipped: IndexedDB connection closing (best-effort)",
                  ])),
              );
            }
          }
        })),
        A.apply(this, arguments)
      );
    }
    var F = r("once")(
      (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.FS;
          if (!a) throw r("err")("[IDBFS] FS not available in WASM module");
          try {
            a.mkdir(b);
          } catch (e) {}
          a.mount(a.filesystems.IDBFS, {}, b);
          for (
            var i = function* () {
                try {
                  return (
                    yield P(a, !0),
                    (L = !0),
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [IDBFS] syncfs succeeded on attempt ",
                          "",
                        ])),
                      u + 1,
                    ),
                    { v: void 0 }
                  );
                } catch (e) {
                  if (u < $) {
                    var t = (u + 1) * 1e4;
                    (o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [IDBFS] syncfs attempt ",
                          " failed, retry in ",
                          "ms",
                        ])),
                      u + 1,
                      t,
                    ),
                      yield new (C || (C = n("Promise")))(function (e) {
                        window.setTimeout(function () {
                          o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                            function () {
                              return e();
                            },
                          );
                        }, t);
                      }));
                  } else throw e;
                }
              },
              l,
              u = 0;
            u <= $;
            u++
          )
            if (((l = yield* i()), l)) return l.v;
        });
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
    );
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!L) throw r("err")("[IDBFS] Persistent FS not initialized");
          if (E != null) return E;
          var t = e.FS;
          if (!t) throw r("err")("[IDBFS] FS not available in WASM module");
          var n = w(t).finally(function () {
            E = null;
          });
          return ((E = n), n);
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      return b;
    }
    function q(e, t) {
      return t.startsWith(v) && !e.isDir(e.stat(b + "/" + t).mode);
    }
    function U(e) {
      if (!L)
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [IDBFS] stats files checked before the persistent FS loaded",
              ])),
          ),
          "failed"
        );
      var t = e.FS,
        n;
      try {
        n = t.readdir(b);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] listing the stats files failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          "failed"
        );
      }
      var a = "none";
      for (var i of n)
        try {
          if (q(t, i)) return "found";
        } catch (e) {
          (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] checking a stats file entry failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
            (a = "failed"));
        }
      return a;
    }
    function V() {
      !k ||
        I == null ||
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          var e = I;
          if (!(!k || e == null)) {
            var t = Date.now();
            O(e)
              .then(function () {
                var e = Date.now() - t;
                (T++,
                  T % R === 0 &&
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [IDBFS] Periodic sync #",
                          " completed in ",
                          "ms",
                        ])),
                      T,
                      e,
                    ));
              })
              .catch(function (e) {
                (T++,
                  o("WALogger").ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [IDBFS] Periodic sync #",
                        " failed: ",
                        "",
                      ])),
                    T,
                    e,
                  ));
              })
              .finally(function () {
                k && window.setTimeout(V, S);
              });
          }
        });
    }
    function H() {
      k &&
        I != null &&
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] page unload, skipping final sync (last periodic sync #",
              ")",
            ])),
          T,
        );
    }
    function G(e) {
      if (k) {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Periodic sync already running, skipping start",
            ])),
        );
        return;
      }
      ((T = 0),
        (k = !0),
        (I = e),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Starting periodic sync (target interval: ",
              "ms)",
            ])),
          S,
        ),
        V(),
        typeof window != "undefined" &&
          (window.addEventListener("beforeunload", H),
          (D = function () {
            window.removeEventListener("beforeunload", H);
          })));
    }
    function z() {
      k &&
        (o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Stopping periodic sync after ",
              " syncs",
            ])),
          T,
        ),
        (k = !1),
        (I = null),
        D != null && (D(), (D = null)));
    }
    ((l.initPersistentFS = F),
      (l.syncPersistentFS = O),
      (l.getVoipPersistentDirectoryPath = W),
      (l.checkForPersistedFieldstatsFiles = U),
      (l.startPeriodicVoipSync = G),
      (l.stopPeriodicVoipSync = z));
  },
  98,
);
