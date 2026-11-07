__d(
  "WAWebDebugWebCalling",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseEach",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "err",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = "model-storage",
      p = "abpropConfigs",
      _ = "15461",
      f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "#"],
      g = 500;
    function h() {
      return (
        r("vulture")("OBi7KLoO82MGzSBsQT_qr37AP90="),
        new (d || (d = n("Promise")))(function (e, t) {
          r("vulture")("oKZC5xZyBJEfk1iVDhlcdyga1Zs=");
          var n = indexedDB.open(m);
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
    function y(e) {
      return (
        r("vulture")("xyRlUTMEz5lspuG5u42drayNDcA="),
        new (d || (d = n("Promise")))(function (t, n) {
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
    function C(e) {
      return (
        r("vulture")("6X12xeP4a_pv0mXoXepAuRFXoMA="),
        new (d || (d = n("Promise")))(function (t, n) {
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
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("zPKDtzIV4_RC0VdXyTiml92o4KE=");
          var t = yield h();
          try {
            var n = t.transaction(p, "readonly"),
              a = yield y(n.objectStore(p).get(_)),
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
        v.apply(this, arguments)
      );
    }
    b.doc =
      "Read enable_web_calling ABProp from IndexedDB. Shows the raw row and whether calling is enabled/disabled.";
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("uRYNObcKJV297xRsOjY20yJn4Ug=");
          var t = e ? "1" : "0",
            n = yield h();
          try {
            var a,
              i,
              l,
              u = n.transaction(p, "readwrite"),
              c = u.objectStore(p),
              d = yield y(c.get(_)),
              m = d != null && typeof d == "object" ? d : null,
              f = {
                configCode: _,
                configValue: t,
                configExpoKey:
                  (a = m == null ? void 0 : m.configExpoKey) != null ? a : null,
                hasAccessed:
                  (i = m == null ? void 0 : m.hasAccessed) != null ? i : !1,
                overriddenConfigValue:
                  (l = m == null ? void 0 : m.overriddenConfigValue) != null
                    ? l
                    : null,
              };
            return (
              yield y(c.put(f)),
              yield C(u),
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
              f
            );
          } finally {
            n.close();
          }
        })),
        R.apply(this, arguments)
      );
    }
    S.doc =
      "Set enable_web_calling ABProp in IndexedDB. Pass true to enable the lobby (camera preview) on the call link page, false to show JoinCallLite. Reload to apply.";
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("ifqPBkwe-DBhdg9SDADqQ9dOfN4=");
          var e = yield h();
          try {
            var t = e.transaction(p, "readwrite");
            (yield y(t.objectStore(p).delete(_)),
              yield C(t),
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
        E.apply(this, arguments)
      );
    }
    L.doc =
      "Delete enable_web_calling ABProp row from IndexedDB. Reload to test the missing-cache fallback (blank screen bug).";
    var k = { set: S, read: b, clear: L };
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = g);
          var a = Array.from(e, D),
            i = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((i == null ? void 0 : i.type) !== "web")
            throw r("err")("sendCapiDtmfTones needs the web VoIP stack");
          var l = yield o("WAPromiseEach").promiseEach(
            a,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, n) {
                  return (
                    n > 0 && (yield o("WAPromiseDelays").delayMs(t)),
                    i.sendCapiDtmfTone(e)
                  );
                },
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
          );
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[webcalling] sendCapiDtmfTones statuses: ",
                  "",
                ])),
              l.join(","),
            ),
            l
          );
        })),
        T.apply(this, arguments)
      );
    }
    I.doc =
      'Send DTMF tones on the active CAPI (business) call, e.g. "12#" (0-9, *, #), one every gapMs (default 500). Returns the stack status per tone: 0 sent, 670007 no active call, 70008 peer is not CAPI.';
    function D(e) {
      var t = f.find(function (t) {
        return t === e;
      });
      if (t == null) throw r("err")("Not a DTMF tone: " + e);
      return t;
    }
    var x = { webCallingABProp: k, sendCapiDtmfTones: I };
    l.default = x;
  },
  98,
);
