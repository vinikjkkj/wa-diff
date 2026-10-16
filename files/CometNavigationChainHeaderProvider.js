__d(
  "CometNavigationChainHeaderProvider",
  ["CometTimeSpentNavigation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "X-FB-Navigation-Chain";
    function s() {
      var t,
        n = r("CometTimeSpentNavigation").getPathInfo();
      if ((n == null ? void 0 : n.should_remove_navigation) === !0) return {};
      var o = n == null || (t = n.extraData) == null ? void 0 : t.pav2;
      if (o != null && o !== "") {
        var a;
        return ((a = {}), (a[e] = o), a);
      }
      return {};
    }
    l.default = s;
  },
  98,
);
