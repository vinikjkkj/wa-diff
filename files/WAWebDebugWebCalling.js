__d(
  "WAWebDebugWebCalling",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseEach",
    "WAWebVoipStackInterface",
    "err",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "model-storage",
      m = "abpropConfigs",
      p = "15461",
      _ = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "#"],
      f = 500;
    function g() {
      return (
        r("vulture")("OBi7KLoO82MGzSBsQT_qr37AP90="),
        new Promise(function (e, t) {
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
    function h(e) {
      return (
        r("vulture")("xyRlUTMEz5lspuG5u42drayNDcA="),
        new Promise(function (t, n) {
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
    function y(e) {
      return (
        r("vulture")("6X12xeP4a_pv0mXoXepAuRFXoMA="),
        new Promise(function (t, n) {
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
    async function C() {
      r("vulture")("zPKDtzIV4_RC0VdXyTiml92o4KE=");
      var t = await g();
      try {
        var n = t.transaction(m, "readonly"),
          a = await h(n.objectStore(m).get(p)),
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
    }
    C.doc =
      "Read enable_web_calling ABProp from IndexedDB. Shows the raw row and whether calling is enabled/disabled.";
    async function b(e) {
      r("vulture")("uRYNObcKJV297xRsOjY20yJn4Ug=");
      var t = e ? "1" : "0",
        n = await g();
      try {
        var a,
          i,
          l,
          u = n.transaction(m, "readwrite"),
          c = u.objectStore(m),
          d = await h(c.get(p)),
          _ = d != null && typeof d == "object" ? d : null,
          f = {
            configCode: p,
            configValue: t,
            configExpoKey:
              (a = _ == null ? void 0 : _.configExpoKey) != null ? a : null,
            hasAccessed:
              (i = _ == null ? void 0 : _.hasAccessed) != null ? i : !1,
            overriddenConfigValue:
              (l = _ == null ? void 0 : _.overriddenConfigValue) != null
                ? l
                : null,
          };
        return (
          await h(c.put(f)),
          await y(u),
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
    }
    b.doc =
      "Set enable_web_calling ABProp in IndexedDB. Pass true to enable the lobby (camera preview) on the call link page, false to show JoinCallLite. Reload to apply.";
    async function v() {
      r("vulture")("ifqPBkwe-DBhdg9SDADqQ9dOfN4=");
      var e = await g();
      try {
        var t = e.transaction(m, "readwrite");
        (await h(t.objectStore(m).delete(p)),
          await y(t),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[webcalling] row deleted \u2014 reload to test missing-cache fallback",
              ])),
          ));
      } finally {
        e.close();
      }
    }
    v.doc =
      "Delete enable_web_calling ABProp row from IndexedDB. Reload to test the missing-cache fallback (blank screen bug).";
    var S = { set: b, read: C, clear: v };
    async function R(e, t) {
      t === void 0 && (t = f);
      var n = Array.from(e, L),
        a = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if ((a == null ? void 0 : a.type) !== "web")
        throw r("err")("sendCapiDtmfTones needs the web VoIP stack");
      var i = await o("WAPromiseEach").promiseEach(n, async function (e, n) {
        return (
          n > 0 && (await o("WAPromiseDelays").delayMs(t)),
          a.sendCapiDtmfTone(e)
        );
      });
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[webcalling] sendCapiDtmfTones statuses: ",
              "",
            ])),
          i.join(","),
        ),
        i
      );
    }
    R.doc =
      'Send DTMF tones on the active CAPI (business) call, e.g. "12#" (0-9, *, #), one every gapMs (default 500). Returns the stack status per tone: 0 sent, 670007 no active call, 70008 peer is not CAPI.';
    function L(e) {
      var t = _.find(function (t) {
        return t === e;
      });
      if (t == null) throw r("err")("Not a DTMF tone: " + e);
      return t;
    }
    var E = { webCallingABProp: S, sendCapiDtmfTones: R };
    l.default = E;
  },
  98,
);
