__d(
  "TrustedTypes",
  ["Env", "TrustedTypesUtils", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (
        o("TrustedTypesUtils").isBrowser &&
        typeof window.trustedTypes != "undefined"
      );
    }
    var u = s() ? window.trustedTypes : null,
      c = new Map(),
      d = {
        createHTML: o("TrustedTypesUtils").noop,
        createScriptURL: o("TrustedTypesUtils").noop,
        createScript: o("TrustedTypesUtils").noop,
      };
    function m(t, n) {
      return function (a) {
        for (
          var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), s = 1;
          s < i;
          s++
        )
          l[s - 1] = arguments[s];
        if ((e || (e = r("Env"))).isTrustedTypesReportOnly)
          try {
            return n.apply(void 0, [a].concat(l));
          } catch (e) {
            return (
              o("TrustedTypesUtils").logError(
                "Exception in policy " +
                  t +
                  ": " +
                  r("getErrorSafe")(e).message +
                  ", returning original string.",
              ),
              t === "default" ? !1 : a
            );
          }
        return n.apply(void 0, [a].concat(l));
      };
    }
    function p(t, n) {
      if (u == null || !(e || (e = r("Env"))).useTrustedTypes) return d;
      var a = c.get(t);
      if (a != null)
        return (
          o("TrustedTypesUtils").logWarning(
            "A policy with name " +
              t +
              " already exists, returning existing policy.",
          ),
          a
        );
      try {
        var i = u.createPolicy(t, n),
          l = {
            createHTML: m(t, function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              return i.createHTML.apply(i, [e].concat(n));
            }),
            createScriptURL: m(t, function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              return i.createScriptURL.apply(i, [e].concat(n));
            }),
            createScript: m(t, function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              return i.createScript.apply(i, [e].concat(n));
            }),
          };
        return (c.set(t, l), l);
      } catch (e) {
        o("TrustedTypesUtils").logError(
          "Error creating Trusted Types policy: " +
            r("getErrorSafe")(e).message,
        );
      }
      return d;
    }
    function _() {
      return c.get("default");
    }
    function f(e) {
      var t;
      return (t = u == null ? void 0 : u.isHTML(e)) != null ? t : !1;
    }
    function g(e) {
      var t;
      return (t = u == null ? void 0 : u.isScriptURL(e)) != null ? t : !1;
    }
    function h(e) {
      var t;
      return (t = u == null ? void 0 : u.isScript(e)) != null ? t : !1;
    }
    function y(t) {
      u == null ||
        !(e || (e = r("Env"))).useTrustedTypes ||
        ((e || (e = r("Env"))).enableDefaultTrustedTypesPolicy &&
          p("default", t.policy));
    }
    var C = {
      isSupportedNatively: s,
      isHTML: f,
      isScript: h,
      isScriptURL: g,
      createPolicy: p,
      getDefaultPolicy: _,
      createDefaultPolicy: y,
    };
    l.default = C;
  },
  98,
);
