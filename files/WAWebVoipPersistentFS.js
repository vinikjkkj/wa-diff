__d(
  "WAWebVoipPersistentFS",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
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
      g = "/wa_voip_storage",
      h = 1e3,
      y = 10,
      C = !1,
      b = null,
      v = !1,
      S = null,
      R = 0,
      L = null,
      E = 5e3,
      k = 2;
    function I(e, t) {
      return new (f || (f = n("Promise")))(function (n, o) {
        var a = !1,
          i = window.setTimeout(function () {
            a ||
              ((a = !0),
              o(r("err")("[IDBFS] syncfs timed out after " + E + "ms")));
          }, E);
        e.syncfs(t, function (e) {
          a || ((a = !0), window.clearTimeout(i), e ? o(e) : n());
        });
      });
    }
    var T = r("once")(
      (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.FS;
          if (!a) throw r("err")("[IDBFS] FS not available in WASM module");
          try {
            a.mkdir(g);
          } catch (e) {}
          a.mount(a.filesystems.IDBFS, {}, g);
          for (
            var i = function* () {
                try {
                  return (
                    yield I(a, !0),
                    (C = !0),
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
                  if (u < k) {
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
                      yield new (f || (f = n("Promise")))(function (e) {
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
            u <= k;
            u++
          )
            if (((l = yield* i()), l)) return l.v;
        });
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
    );
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!C) throw r("err")("[IDBFS] Persistent FS not initialized");
          if (b != null) return b.promise;
          var t = new (o("WAResolvable").Resolvable)();
          b = t;
          try {
            var n = e.FS;
            if (!n) throw r("err")("[IDBFS] FS not available in WASM module");
            (yield I(n, !1), t.resolve());
          } catch (e) {
            throw (t.reject(e), e);
          } finally {
            b = null;
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return g;
    }
    function P() {
      !v ||
        S == null ||
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          var e = S;
          if (!(!v || e == null)) {
            var t = Date.now();
            D(e)
              .then(function () {
                var e = Date.now() - t;
                (R++,
                  R % y === 0 &&
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [IDBFS] Periodic sync #",
                          " completed in ",
                          "ms",
                        ])),
                      R,
                      e,
                    ));
              })
              .catch(function (e) {
                (R++,
                  o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [IDBFS] Periodic sync #",
                        " failed: ",
                        "",
                      ])),
                    R,
                    e,
                  ));
              })
              .finally(function () {
                v && window.setTimeout(P, h);
              });
          }
        });
    }
    function N() {
      v &&
        S != null &&
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] page unload, skipping final sync (last periodic sync #",
              ")",
            ])),
          R,
        );
    }
    function M(e) {
      if (v) {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Periodic sync already running, skipping start",
            ])),
        );
        return;
      }
      ((R = 0),
        (v = !0),
        (S = e),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Starting periodic sync (target interval: ",
              "ms)",
            ])),
          h,
        ),
        P(),
        typeof window != "undefined" &&
          (window.addEventListener("beforeunload", N),
          (L = function () {
            window.removeEventListener("beforeunload", N);
          })));
    }
    function w() {
      v &&
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Stopping periodic sync after ",
              " syncs",
            ])),
          R,
        ),
        (v = !1),
        (S = null),
        L != null && (L(), (L = null)));
    }
    ((l.initPersistentFS = T),
      (l.syncPersistentFS = D),
      (l.getVoipPersistentDirectoryPath = $),
      (l.startPeriodicVoipSync = M),
      (l.stopPeriodicVoipSync = w));
  },
  98,
);
