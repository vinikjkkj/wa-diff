__d(
  "getToolForRouteOrCurrentWindowURI",
  ["AdsInterfacesNavTools", "castToEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a = ["AdsPEMainICERoute", "AdsPEErrorICERoute"];
      if (a.includes(e == null ? void 0 : e.routeName)) return "MANAGE_ADS";
      var i = t.getQueryData().tool;
      return r("castToEnum")(
        (n = e == null || (o = e.activeState) == null ? void 0 : o.tool) != null
          ? n
          : i,
        r("AdsInterfacesNavTools"),
      );
    }
    l.default = e;
  },
  98,
);
