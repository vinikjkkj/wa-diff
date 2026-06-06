__d(
  "WAWebDebugCallingGroupCalling",
  ["Promise", "WALogger", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "model-storage",
      m = "abpropConfigs",
      p = "20924";
    function _() {
      return new (c || (c = n("Promise")))(function (e, t) {
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
    function f(e) {
      return new (c || (c = n("Promise")))(function (t, n) {
        ((e.onsuccess = function () {
          return t(e.result);
        }),
          (e.onerror = function () {
            return n(e.error);
          }));
      });
    }
    function g(e) {
      return new (c || (c = n("Promise")))(function (t, n) {
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
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield _();
          try {
            var n = t.transaction(m, "readonly"),
              r = yield f(n.objectStore(m).get(p)),
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
        })),
        y.apply(this, arguments)
      );
    }
    h.doc =
      "Read enable_web_group_calling ABProp from IndexedDB. Shows the raw row and whether calling is enabled/disabled.";
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e ? "1" : "0",
            n = yield _();
          try {
            var r,
              a,
              i,
              l = n.transaction(m, "readwrite"),
              u = l.objectStore(m),
              c = yield f(u.get(p)),
              d = c != null && typeof c == "object" ? c : null,
              h = {
                configCode: p,
                configValue: t,
                configExpoKey:
                  (r = d == null ? void 0 : d.configExpoKey) != null ? r : null,
                hasAccessed:
                  (a = d == null ? void 0 : d.hasAccessed) != null ? a : !1,
                overriddenConfigValue:
                  (i = d == null ? void 0 : d.overriddenConfigValue) != null
                    ? i
                    : null,
              };
            return (
              yield f(u.put(h)),
              yield g(l),
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
        })),
        b.apply(this, arguments)
      );
    }
    C.doc =
      "Set enable_web_group_calling ABProp in IndexedDB. Pass true to enable the lobby (camera preview) on the call link page, false to show JoinCallLite. Reload to apply.";
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield _();
          try {
            var t = e.transaction(m, "readwrite");
            (yield f(t.objectStore(m).delete(p)),
              yield g(t),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[wgc] row deleted \u2014 reload to test missing-cache fallback",
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
      "Delete enable_web_group_calling ABProp row from IndexedDB. Reload to test the missing-cache fallback (blank screen bug).";
    var R = { set: C, read: h, clear: v },
      L = { callingGroupCallingABProp: R };
    l.default = L;
  },
  98,
);
