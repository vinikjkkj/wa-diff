__d(
  "WAWebVoipPersistentFS",
  [
    "Promise",
    "WALogger",
    "WAWebPonyfillsIdleCallback",
    "asyncToGeneratorRuntime",
    "err",
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
      h = "/wa_voip_storage",
      y = 1e3,
      C = 10,
      b = !1,
      v = null,
      S = !1,
      R = null,
      L = 0,
      E = null,
      k = 5e3,
      I = 2;
    function T(e, t) {
      return new (g || (g = n("Promise")))(function (n, o) {
        var a = !1,
          i = window.setTimeout(function () {
            a ||
              ((a = !0),
              o(r("err")("[IDBFS] syncfs timed out after " + k + "ms")));
          }, k);
        e.syncfs(t, function (e) {
          a || ((a = !0), window.clearTimeout(i), e ? o(e) : n());
        });
      });
    }
    function D(e) {
      return e == null || typeof e != "object"
        ? !1
        : e.name === "InvalidStateError";
    }
    function x(e) {
      var t = e.filesystems.IDBFS;
      t == null || t.quit == null || t.quit();
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield T(e, !1);
          } catch (t) {
            if (!D(t)) throw t;
            x(e);
            try {
              yield T(e, !1);
            } catch (e) {
              if (!D(e)) throw e;
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] sync skipped: IndexedDB connection closing (best-effort)",
                  ])),
              );
            }
          }
        })),
        P.apply(this, arguments)
      );
    }
    var N = r("once")(
      (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.FS;
          if (!a) throw r("err")("[IDBFS] FS not available in WASM module");
          try {
            a.mkdir(h);
          } catch (e) {}
          a.mount(a.filesystems.IDBFS, {}, h);
          for (
            var i = function* () {
                try {
                  return (
                    yield T(a, !0),
                    (b = !0),
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
                  if (u < I) {
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
                      yield new (g || (g = n("Promise")))(function (e) {
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
            u <= I;
            u++
          )
            if (((l = yield* i()), l)) return l.v;
        });
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
    );
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!b) throw r("err")("[IDBFS] Persistent FS not initialized");
          if (v != null) return v;
          var t = e.FS;
          if (!t) throw r("err")("[IDBFS] FS not available in WASM module");
          var n = $(t).finally(function () {
            v = null;
          });
          return ((v = n), n);
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return h;
    }
    function F() {
      !S ||
        R == null ||
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          var e = R;
          if (!(!S || e == null)) {
            var t = Date.now();
            M(e)
              .then(function () {
                var e = Date.now() - t;
                (L++,
                  L % C === 0 &&
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [IDBFS] Periodic sync #",
                          " completed in ",
                          "ms",
                        ])),
                      L,
                      e,
                    ));
              })
              .catch(function (e) {
                (L++,
                  o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [IDBFS] Periodic sync #",
                        " failed: ",
                        "",
                      ])),
                    L,
                    e,
                  ));
              })
              .finally(function () {
                S && window.setTimeout(F, y);
              });
          }
        });
    }
    function O() {
      S &&
        R != null &&
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] page unload, skipping final sync (last periodic sync #",
              ")",
            ])),
          L,
        );
    }
    function B(e) {
      if (S) {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Periodic sync already running, skipping start",
            ])),
        );
        return;
      }
      ((L = 0),
        (S = !0),
        (R = e),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Starting periodic sync (target interval: ",
              "ms)",
            ])),
          y,
        ),
        F(),
        typeof window != "undefined" &&
          (window.addEventListener("beforeunload", O),
          (E = function () {
            window.removeEventListener("beforeunload", O);
          })));
    }
    function W() {
      S &&
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Stopping periodic sync after ",
              " syncs",
            ])),
          L,
        ),
        (S = !1),
        (R = null),
        E != null && (E(), (E = null)));
    }
    ((l.initPersistentFS = N),
      (l.syncPersistentFS = M),
      (l.getVoipPersistentDirectoryPath = A),
      (l.startPeriodicVoipSync = B),
      (l.stopPeriodicVoipSync = W));
  },
  98,
);
