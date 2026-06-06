__d(
  "WAWebDebugCallingGroupCalling",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "model-storage",
      d = "abpropConfigs",
      m = "20924";
    function p() {
      return new Promise(function (e, t) {
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
      });
    }
    function _(e) {
      return new Promise(function (t, n) {
        ((e.onsuccess = function () {
          return t(e.result);
        }),
          (e.onerror = function () {
            return n(e.error);
          }));
      });
    }
    function f(e) {
      return new Promise(function (t, n) {
        ((e.oncomplete = function () {
          return t();
        }),
          (e.onerror = function () {
            return n(e.error);
          }),
          (e.onabort = function () {
            return n(e.error);
          }));
      });
    }
    async function g() {
      var t = await p();
      try {
        var n = t.transaction(d, "readonly"),
          r = await _(n.objectStore(d).get(m)),
          a = r != null && typeof r == "object" ? r.configValue : void 0;
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[wgc] row: ",
                " ",
                "",
              ])),
            String(r != null ? JSON.stringify(r) : "(missing)"),
            r != null
              ? "\u2192 configValue=" +
                  String(a) +
                  " (" +
                  (a === "1" ? "enabled" : "disabled") +
                  ")"
              : "",
          ),
          r
        );
      } finally {
        t.close();
      }
    }
    g.doc =
      "Read enable_web_group_calling ABProp from IndexedDB. Shows the raw row and whether calling is enabled/disabled.";
    async function h(e) {
      var t = e ? "1" : "0",
        n = await p();
      try {
        var r,
          a,
          i,
          l = n.transaction(d, "readwrite"),
          u = l.objectStore(d),
          c = await _(u.get(m)),
          g = c != null && typeof c == "object" ? c : null,
          h = {
            configCode: m,
            configValue: t,
            configExpoKey:
              (r = g == null ? void 0 : g.configExpoKey) != null ? r : null,
            hasAccessed:
              (a = g == null ? void 0 : g.hasAccessed) != null ? a : !1,
            overriddenConfigValue:
              (i = g == null ? void 0 : g.overriddenConfigValue) != null
                ? i
                : null,
          };
        return (
          await _(u.put(h)),
          await f(l),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[wgc] set configValue='",
                "' (",
                ") \u2014 reload to apply",
              ])),
            t,
            e ? "enabled" : "disabled",
          ),
          h
        );
      } finally {
        n.close();
      }
    }
    h.doc =
      "Set enable_web_group_calling ABProp in IndexedDB. Pass true to enable the lobby (camera preview) on the call link page, false to show JoinCallLite. Reload to apply.";
    async function y() {
      var e = await p();
      try {
        var t = e.transaction(d, "readwrite");
        (await _(t.objectStore(d).delete(m)),
          await f(t),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[wgc] row deleted \u2014 reload to test missing-cache fallback",
              ])),
          ));
      } finally {
        e.close();
      }
    }
    y.doc =
      "Delete enable_web_group_calling ABProp row from IndexedDB. Reload to test the missing-cache fallback (blank screen bug).";
    var C = { set: h, read: g, clear: y },
      b = { callingGroupCallingABProp: C };
    l.default = b;
  },
  98,
);
