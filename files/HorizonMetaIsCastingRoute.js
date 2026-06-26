__d(
  "HorizonMetaIsCastingRoute",
  [
    "FBXHorizonMetaCastingControllerRouteBuilder",
    "HorizonMetaCastingPaths",
    "URI",
    "isHorizonDotMetaDotComURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = (e || (e = r("URI"))).getRequestURI(),
        n = r("FBXHorizonMetaCastingControllerRouteBuilder").buildUri({});
      if (!r("isHorizonDotMetaDotComURI")(t)) return !1;
      var o = r("HorizonMetaCastingPaths").allPaths,
        a = [].concat(o, [n.getPath()]),
        i = t.addTrailingSlash().getPath();
      return a.includes(i);
    }
    var u = { getIsCastingRoute: s };
    l.default = u;
  },
  98,
);
