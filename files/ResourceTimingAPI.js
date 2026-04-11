__d(
  "ResourceTimingAPI",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u = !1;
    function c() {
      return (
        s ||
          (typeof ((e || (e = r("performance"))) == null
            ? void 0
            : (e || (e = r("performance"))).getEntriesByName) != "function" ||
          typeof ((e || (e = r("performance"))) == null
            ? void 0
            : (e || (e = r("performance"))).getEntriesByType) != "function"
            ? ((u = !1), (s = !0))
            : (e || (e = r("performance"))).getEntriesByType("resource")
                .length > 0 && ((u = !0), (s = !0))),
        u
      );
    }
    function d(t) {
      if (typeof (e || (e = r("performance"))).getEntriesByName != "function")
        return null;
      var n = (e || (e = r("performance"))).getEntriesByName(t);
      return (
        n.length === 0 &&
          t.indexOf("#") >= 0 &&
          (n = (e || (e = r("performance"))).getEntriesByName(t.split("#")[0])),
        n && n[0]
      );
    }
    ((l.canUseResourceTimingAPI = c), (l.getResourceTiming = d));
  },
  98,
);
