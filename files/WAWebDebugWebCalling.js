__d(
  "WAWebDebugWebCalling",
  ["WALogger", "err", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "model-storage",
      d = "abpropConfigs",
      m = "15461";
    function p() {
      return (
        r("vulture")("OBi7KLoO82MGzSBsQT_qr37AP90="),
        new Promise(function (e, t) {
          r("vulture")("oKZC5xZyBJEfk1iVDhlcdyga1Zs=");
          var n = indexedDB.open(c);
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
    function _(e) {
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
    function f(e) {
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
    async function g() {
      r("vulture")("zPKDtzIV4_RC0VdXyTiml92o4KE=");
      var t = await p();
      try {
        var n = t.transaction(d, "readonly"),
          a = await _(n.objectStore(d).get(m)),
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
    g.doc =
      "Read enable_web_calling ABProp from IndexedDB. Shows the raw row and whether calling is enabled/disabled.";
    async function h(e) {
      r("vulture")("uRYNObcKJV297xRsOjY20yJn4Ug=");
      var t = e ? "1" : "0",
        n = await p();
      try {
        var a,
          i,
          l,
          u = n.transaction(d, "readwrite"),
          c = u.objectStore(d),
          g = await _(c.get(m)),
          h = g != null && typeof g == "object" ? g : null,
          y = {
            configCode: m,
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
          await _(c.put(y)),
          await f(u),
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
    }
    h.doc =
      "Set enable_web_calling ABProp in IndexedDB. Pass true to enable the lobby (camera preview) on the call link page, false to show JoinCallLite. Reload to apply.";
    async function y() {
      r("vulture")("ifqPBkwe-DBhdg9SDADqQ9dOfN4=");
      var e = await p();
      try {
        var t = e.transaction(d, "readwrite");
        (await _(t.objectStore(d).delete(m)),
          await f(t),
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
    y.doc =
      "Delete enable_web_calling ABProp row from IndexedDB. Reload to test the missing-cache fallback (blank screen bug).";
    var C = { set: h, read: g, clear: y },
      b = { webCallingABProp: C };
    l.default = b;
  },
  98,
);
