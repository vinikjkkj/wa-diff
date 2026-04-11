__d(
  "ResourceDownloadLogger",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { JS: "js", CSS: "css", IMG: "img", TRANSLATIONS: "translations" };
    function u(e) {
      var t = e.indexOf("?");
      return t === -1 ? e : e.substring(0, t);
    }
    function c(e, t) {
      var n = t.substring(t.lastIndexOf(".") + 1);
      return n === "js"
        ? t.includes("rsrc-translations.php")
          ? s.TRANSLATIONS
          : s.JS
        : n === "css"
          ? s.CSS
          : e;
    }
    function d() {
      return Object.keys(s).reduce(function (e, t) {
        var n = s[t];
        return (
          (e[n] = {
            cacheCount: 0,
            cacheRate: 0,
            encodedBodySize: 0,
            decodedBodySize: 0,
            totalCount: 0,
            transferSize: 0,
          }),
          e
        );
      }, {});
    }
    function m(t, n) {
      if (typeof (e || (e = r("performance"))).getEntriesByType != "function")
        return new Map();
      var o = d(),
        a = (e || (e = r("performance")))
          .getEntriesByType("resource")
          .filter(function (e) {
            return e.startTime >= t && e.startTime <= n;
          })
          .map(function (e) {
            return {
              encodedBodySize: e.encodedBodySize,
              decodedBodySize: e.decodedBodySize,
              transferSize: e.transferSize,
              type: c(e.initiatorType, u(e.name)),
            };
          })
          .filter(function (e) {
            return o[e.type];
          });
      a.forEach(function (e) {
        var t = o[e.type];
        ((t.encodedBodySize += e.encodedBodySize),
          (t.decodedBodySize += e.decodedBodySize),
          (t.transferSize += e.transferSize),
          t.totalCount++,
          e.transferSize === 0 && t.cacheCount++);
      });
      var i = new Map();
      for (var l in o) {
        var s = o[l];
        s.totalCount > 0 &&
          (s.cacheRate = Math.round((s.cacheCount / s.totalCount) * 100));
        for (var m in s) i.set(l + "_" + m, s[m]);
      }
      return i;
    }
    l.default = m;
  },
  98,
);
