__d(
  "WAExternalInjectedSources",
  ["WAFPUtils", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.startsWith("data:");
    }
    function s(t) {
      return t === "" || e(t) ? !1 : !o("WAFPUtils").waUrlRegex.test(t);
    }
    function u(e) {
      var t = new Set(),
        n = new Set();
      return (
        e.forEach(function (e) {
          var r = e.match(/chrome-extension:\/\/([a-z0-9]+)\//i);
          r ? t.add(e) : n.add(e);
        }),
        [Array.from(t), Array.from(n)]
      );
    }
    function c() {
      var e = Array.from(document.querySelectorAll("link")),
        t = e.reduce(function (e, t) {
          return (t.href && s(t.href) && e.push(t.href), e);
        }, []);
      return u(t);
    }
    function d() {
      var e = Array.from(document.querySelectorAll("script")),
        t = e.reduce(function (e, t) {
          return (t.src && s(t.src) && e.push(t.src), e);
        }, []);
      return u(t);
    }
    function m() {
      try {
        var e = d(),
          t = e[0],
          n = e[1],
          o = c(),
          a = o[0],
          i = o[1];
        return {
          extensionIds: Array.from(new Set(t.concat(a))).join(","),
          externalSources: Array.from(new Set(n.concat(i))).join(","),
        };
      } catch (e) {
        return {
          extensionIds: "error",
          externalSources:
            Math.random() < 0.1 ? r("getErrorSafe")(e).stack : "",
        };
      }
    }
    l.default = m;
  },
  98,
);
