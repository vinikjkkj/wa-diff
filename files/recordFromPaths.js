__d(
  "recordFromPaths",
  ["DeepRecord", "expandPaths", "getObjectValuesRecursive", "mapObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = r("getObjectValuesRecursive")(t),
        o = r("expandPaths")(n, !0);
      function a(t, n) {
        if ({}.toString.call(t) === "[object Object]")
          return r("DeepRecord")((e || (e = r("mapObject"))).untyped(t, a));
      }
      return r("DeepRecord")((e || (e = r("mapObject"))).untyped(o, a));
    }
    l.default = s;
  },
  98,
);
