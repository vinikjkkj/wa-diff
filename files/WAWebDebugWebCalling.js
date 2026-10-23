__d(
  "WAWebDebugWebCalling",
  ["Promise", "WALogger", "asyncToGeneratorRuntime", "err", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "model-storage",
      m = "abpropConfigs",
      p = "15461";
    function _() {
      return (
        r("vulture")("OBi7KLoO82MGzSBsQT_qr37AP90="),
        new (c || (c = n("Promise")))(function (e, t) {
          r("vulture")("oKZC5xZyBJEfk1iVDhlcdyga1Zs=");
          var n = indexedDB.open(d);
          ((n.onsuccess = function () {
            return e(n.result);
          }),
            (n.onerror = function () {
              return t(n.error);
            }),
            (n.onblocked = function () {
              return t(r("err")("blocked"));
            }),
            (n.onupgradeneeded = function () {
              r("vulture")("nGbdg-j0PweYy7GTAtM5R6_7OAE=");
              try {
                var e;
                (e = n.transaction) == null || e.abort();
              } catch (e) {}
              t(
                r("err")(
                  "model-storage does not exist (have you logged in to WA Web in this browser?)",
                ),
              );
            }));
        })
      );
    }
    function f(e) {
      return (
        r("vulture")("xyRlUTMEz5lspuG5u42drayNDcA="),
        new (c || (c = n("Promise")))(function (t, n) {
          (r("vulture")("yC1I-GSpf89nj4W35-hE7NDXEXc="),
            (e.onsuccess = function () {
              return t(e.result);
            }),
            (e.onerror = function () {
              return n(e.error);
            }));
        })
      );
    }
    function g(e) {
      return (
        r("vulture")("6X12xeP4a_pv0mXoXepAuRFXoMA="),
        new (c || (c = n("Promise")))(function (t, n) {
          (r("vulture")("P99pXFmrV1AgqyIGndn1pt2_fhs="),
            (e.oncomplete = function () {
              return t();
            }),
            (e.onerror = function () {
              return n(e.error);
            }),
            (e.onabort = function () {
              return n(e.error);
            }));
        })
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("zPKDtzIV4_RC0VdXyTiml92o4KE=");
          var t = yield _();
          try {
            var n = t.transaction(m, "readonly"),
              a = yield f(n.objectStore(m).get(p)),
              i = a != null && typeof a == "object" ? a.configValue : void 0;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[webcalling] row: ",
                    " ",
                    "",
                  ])),
                String(a != null ? JSON.stringify(a) : "(missing)"),
                a != null
                  ? "\u2192 configValue=" +
                      String(i) +
                      " (" +
                      (i === "1" ? "enabled" : "disabled") +
                      ")"
                  : "",
              ),
              a
            );
          } finally {
            t.close();
          }
        })),
        y.apply(this, arguments)
      );
    }
    h.doc =
      "Read enable_web_calling ABProp from IndexedDB. Shows the raw row and whether calling is enabled/disabled.";
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("uRYNObcKJV297xRsOjY20yJn4Ug=");
          var t = e ? "1" : "0",
            n = yield _();
          try {
            var a,
              i,
              l,
              u = n.transaction(m, "readwrite"),
              c = u.objectStore(m),
              d = yield f(c.get(p)),
              h = d != null && typeof d == "object" ? d : null,
              y = {
                configCode: p,
                configValue: t,
                configExpoKey:
                  (a = h == null ? void 0 : h.configExpoKey) != null ? a : null,
                hasAccessed:
                  (i = h == null ? void 0 : h.hasAccessed) != null ? i : !1,
                overriddenConfigValue:
                  (l = h == null ? void 0 : h.overriddenConfigValue) != null
                    ? l
                    : null,
              };
            return (
              yield f(c.put(y)),
              yield g(u),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[webcalling] set configValue='",
                    "' (",
                    ") \u2014 reload to apply",
                  ])),
                t,
                e ? "enabled" : "disabled",
              ),
              y
            );
          } finally {
            n.close();
          }
        })),
        b.apply(this, arguments)
      );
    }
    C.doc =
      "Set enable_web_calling ABProp in IndexedDB. Pass true to enable the lobby (camera preview) on the call link page, false to show JoinCallLite. Reload to apply.";
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("ifqPBkwe-DBhdg9SDADqQ9dOfN4=");
          var e = yield _();
          try {
            var t = e.transaction(m, "readwrite");
            (yield f(t.objectStore(m).delete(p)),
              yield g(t),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[webcalling] row deleted \u2014 reload to test missing-cache fallback",
                  ])),
              ));
          } finally {
            e.close();
          }
        })),
        S.apply(this, arguments)
      );
    }
    v.doc =
      "Delete enable_web_calling ABProp row from IndexedDB. Reload to test the missing-cache fallback (blank screen bug).";
    var R = { set: C, read: h, clear: v },
      L = { webCallingABProp: R };
    l.default = L;
  },
  98,
);
