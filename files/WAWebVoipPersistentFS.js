__d(
  "WAWebVoipPersistentFS",
  ["WALogger", "WAWebPonyfillsIdleCallback", "err", "once"],
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
      return new Promise(function (n, o) {
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
    function T(e) {
      return e == null || typeof e != "object"
        ? !1
        : e.name === "InvalidStateError";
    }
    function D(e) {
      var t = e.filesystems.IDBFS;
      t == null || t.quit == null || t.quit();
    }
    async function x(t) {
      try {
        await I(t, !1);
      } catch (n) {
        if (!T(n)) throw n;
        D(t);
        try {
          await I(t, !1);
        } catch (t) {
          if (!T(t)) throw t;
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [IDBFS] sync skipped: IndexedDB connection closing (best-effort)",
              ])),
          );
        }
      }
    }
    var $ = r("once")(async function (e) {
      var t = e.FS;
      if (!t) throw r("err")("[IDBFS] FS not available in WASM module");
      try {
        t.mkdir(g);
      } catch (e) {}
      t.mount(t.filesystems.IDBFS, {}, g);
      for (
        var n = async function () {
            try {
              return (
                await I(t, !0),
                (C = !0),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [IDBFS] syncfs succeeded on attempt ",
                      "",
                    ])),
                  i + 1,
                ),
                { v: void 0 }
              );
            } catch (t) {
              if (i < k) {
                var e = (i + 1) * 1e4;
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [IDBFS] syncfs attempt ",
                      " failed, retry in ",
                      "ms",
                    ])),
                  i + 1,
                  e,
                ),
                  await new Promise(function (t) {
                    window.setTimeout(function () {
                      o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                        function () {
                          return t();
                        },
                      );
                    }, e);
                  }));
              } else throw t;
            }
          },
          a,
          i = 0;
        i <= k;
        i++
      )
        if (((a = await n()), a)) return a.v;
    });
    async function P(e) {
      if (!C) throw r("err")("[IDBFS] Persistent FS not initialized");
      if (b != null) return b;
      var t = e.FS;
      if (!t) throw r("err")("[IDBFS] FS not available in WASM module");
      var n = x(t).finally(function () {
        b = null;
      });
      return ((b = n), n);
    }
    function N() {
      return g;
    }
    function M() {
      !v ||
        S == null ||
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          var e = S;
          if (!(!v || e == null)) {
            var t = Date.now();
            P(e)
              .then(function () {
                var e = Date.now() - t;
                (R++,
                  R % y === 0 &&
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [IDBFS] Periodic sync #",
                        " failed: ",
                        "",
                      ])),
                    R,
                    e,
                  ));
              })
              .finally(function () {
                v && window.setTimeout(M, h);
              });
          }
        });
    }
    function w() {
      v &&
        S != null &&
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] page unload, skipping final sync (last periodic sync #",
              ")",
            ])),
          R,
        );
    }
    function A(e) {
      if (v) {
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Periodic sync already running, skipping start",
            ])),
        );
        return;
      }
      ((R = 0),
        (v = !0),
        (S = e),
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Starting periodic sync (target interval: ",
              "ms)",
            ])),
          h,
        ),
        M(),
        typeof window != "undefined" &&
          (window.addEventListener("beforeunload", w),
          (L = function () {
            window.removeEventListener("beforeunload", w);
          })));
    }
    function F() {
      v &&
        (o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Stopping periodic sync after ",
              " syncs",
            ])),
          R,
        ),
        (v = !1),
        (S = null),
        L != null && (L(), (L = null)));
    }
    ((l.initPersistentFS = $),
      (l.syncPersistentFS = P),
      (l.getVoipPersistentDirectoryPath = N),
      (l.startPeriodicVoipSync = A),
      (l.stopPeriodicVoipSync = F));
  },
  98,
);
