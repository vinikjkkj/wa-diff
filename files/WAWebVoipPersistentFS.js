__d(
  "WAWebVoipPersistentFS",
  ["WALogger", "WAWebPonyfillsIdleCallback", "err", "getErrorSafe", "once"],
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
      C = "/wa_voip_storage",
      b = "call_stats_",
      v = 1e3,
      S = 10,
      R = !1,
      L = null,
      E = !1,
      k = null,
      I = 0,
      T = null,
      D = 5e3,
      x = 2;
    function $(e, t) {
      return new Promise(function (n, o) {
        var a = !1,
          i = window.setTimeout(function () {
            a ||
              ((a = !0),
              o(r("err")("[IDBFS] syncfs timed out after " + D + "ms")));
          }, D);
        e.syncfs(t, function (e) {
          a || ((a = !0), window.clearTimeout(i), e ? o(e) : n());
        });
      });
    }
    function P(e) {
      return e == null || typeof e != "object"
        ? !1
        : e.name === "InvalidStateError";
    }
    function N(e) {
      var t = e.filesystems.IDBFS;
      t == null || t.quit == null || t.quit();
    }
    async function M(t) {
      try {
        await $(t, !1);
      } catch (n) {
        if (!P(n)) throw n;
        N(t);
        try {
          await $(t, !1);
        } catch (t) {
          if (!P(t)) throw t;
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [IDBFS] sync skipped: IndexedDB connection closing (best-effort)",
              ])),
          );
        }
      }
    }
    var w = r("once")(async function (e) {
      var t = e.FS;
      if (!t) throw r("err")("[IDBFS] FS not available in WASM module");
      try {
        t.mkdir(C);
      } catch (e) {}
      t.mount(t.filesystems.IDBFS, {}, C);
      for (
        var n = async function () {
            try {
              return (
                await $(t, !0),
                (R = !0),
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
              if (i < x) {
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
        i <= x;
        i++
      )
        if (((a = await n()), a)) return a.v;
    });
    async function A(e) {
      if (!R) throw r("err")("[IDBFS] Persistent FS not initialized");
      if (L != null) return L;
      var t = e.FS;
      if (!t) throw r("err")("[IDBFS] FS not available in WASM module");
      var n = M(t).finally(function () {
        L = null;
      });
      return ((L = n), n);
    }
    function F() {
      return C;
    }
    function O(e, t) {
      return t.startsWith(b) && !e.isDir(e.stat(C + "/" + t).mode);
    }
    function B(e) {
      if (!R)
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [IDBFS] stats files checked before the persistent FS loaded",
              ])),
          ),
          "failed"
        );
      var t = e.FS,
        n;
      try {
        n = t.readdir(C);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
          if (O(t, i)) return "found";
        } catch (e) {
          (o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] checking a stats file entry failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
            (a = "failed"));
        }
      return a;
    }
    function W() {
      !E ||
        k == null ||
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          var e = k;
          if (!(!E || e == null)) {
            var t = Date.now();
            A(e)
              .then(function () {
                var e = Date.now() - t;
                (I++,
                  I % S === 0 &&
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [IDBFS] Periodic sync #",
                          " completed in ",
                          "ms",
                        ])),
                      I,
                      e,
                    ));
              })
              .catch(function (e) {
                (I++,
                  o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [IDBFS] Periodic sync #",
                        " failed: ",
                        "",
                      ])),
                    I,
                    e,
                  ));
              })
              .finally(function () {
                E && window.setTimeout(W, v);
              });
          }
        });
    }
    function q() {
      E &&
        k != null &&
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] page unload, skipping final sync (last periodic sync #",
              ")",
            ])),
          I,
        );
    }
    function U(e) {
      if (E) {
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Periodic sync already running, skipping start",
            ])),
        );
        return;
      }
      ((I = 0),
        (E = !0),
        (k = e),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Starting periodic sync (target interval: ",
              "ms)",
            ])),
          v,
        ),
        W(),
        typeof window != "undefined" &&
          (window.addEventListener("beforeunload", q),
          (T = function () {
            window.removeEventListener("beforeunload", q);
          })));
    }
    function V() {
      E &&
        (o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [IDBFS] Stopping periodic sync after ",
              " syncs",
            ])),
          I,
        ),
        (E = !1),
        (k = null),
        T != null && (T(), (T = null)));
    }
    ((l.initPersistentFS = w),
      (l.syncPersistentFS = A),
      (l.getVoipPersistentDirectoryPath = F),
      (l.checkForPersistedFieldstatsFiles = B),
      (l.startPeriodicVoipSync = U),
      (l.stopPeriodicVoipSync = V));
  },
  98,
);
