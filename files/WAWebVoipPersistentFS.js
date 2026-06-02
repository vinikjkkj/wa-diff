__d(
  "WAWebVoipPersistentFS",
  ["WALogger", "WAResolvable", "WAWebPonyfillsIdleCallback", "err", "once"],
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
      f = "/wa_voip_storage",
      g = 1e3,
      h = 10,
      y = !1,
      C = null,
      b = !1,
      v = null,
      S = 0,
      R = null,
      L = 5e3,
      E = 2;
    function k(e, t) {
      return new Promise(function (n, o) {
        var a = !1,
          i = window.setTimeout(function () {
            a ||
              ((a = !0),
              o(r("err")("[IDBFS] syncfs timed out after " + L + "ms")));
          }, L);
        e.syncfs(t, function (e) {
          a || ((a = !0), window.clearTimeout(i), e ? o(e) : n());
        });
      });
    }
    var I = r("once")(async function (t) {
      var n = t.FS;
      if (!n) throw r("err")("[IDBFS] FS not available in WASM module");
      try {
        n.mkdir(f);
      } catch (e) {}
      n.mount(n.filesystems.IDBFS, {}, f);
      for (
        var a = async function () {
            try {
              return (
                await k(n, !0),
                (y = !0),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [IDBFS] syncfs succeeded on attempt ",
                      "",
                    ])),
                  l + 1,
                ),
                { v: void 0 }
              );
            } catch (e) {
              if (l < E) {
                var t = (l + 1) * 1e4;
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [IDBFS] syncfs attempt ",
                      " failed, retry in ",
                      "ms",
                    ])),
                  l + 1,
                  t,
                ),
                  await new Promise(function (e) {
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
          i,
          l = 0;
        l <= E;
        l++
      )
        if (((i = await a()), i)) return i.v;
    });
    async function T(e) {
      if (!y) throw r("err")("[IDBFS] Persistent FS not initialized");
      if (C != null) return C.promise;
      var t = new (o("WAResolvable").Resolvable)();
      C = t;
      try {
        var n = e.FS;
        if (!n) throw r("err")("[IDBFS] FS not available in WASM module");
        (await k(n, !1), t.resolve());
      } catch (e) {
        throw (t.reject(e), e);
      } finally {
        C = null;
      }
    }
    function D() {
      return f;
    }
    function x() {
      !b ||
        v == null ||
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          var e = v;
          if (!(!b || e == null)) {
            var t = Date.now();
            T(e)
              .then(function () {
                var e = Date.now() - t;
                (S++,
                  S % h === 0 &&
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [IDBFS] Periodic sync #",
                          " completed in ",
                          "ms",
                        ])),
                      S,
                      e,
                    ));
              })
              .catch(function (e) {
                (S++,
                  o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [IDBFS] Periodic sync #",
                        " failed: ",
                        "",
                      ])),
                    S,
                    e,
                  ));
              })
              .finally(function () {
                b && window.setTimeout(x, g);
              });
          }
        });
    }
    function $() {
      b &&
        v != null &&
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] page unload, skipping final sync (last periodic sync #",
              ")",
            ])),
          S,
        );
    }
    function P(e) {
      if (b) {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Periodic sync already running, skipping start",
            ])),
        );
        return;
      }
      ((S = 0),
        (b = !0),
        (v = e),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Starting periodic sync (target interval: ",
              "ms)",
            ])),
          g,
        ),
        x(),
        typeof window != "undefined" &&
          (window.addEventListener("beforeunload", $),
          (R = function () {
            window.removeEventListener("beforeunload", $);
          })));
    }
    function N() {
      b &&
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Stopping periodic sync after ",
              " syncs",
            ])),
          S,
        ),
        (b = !1),
        (v = null),
        R != null && (R(), (R = null)));
    }
    ((l.initPersistentFS = I),
      (l.syncPersistentFS = T),
      (l.getVoipPersistentDirectoryPath = D),
      (l.startPeriodicVoipSync = P),
      (l.stopPeriodicVoipSync = N));
  },
  98,
);
