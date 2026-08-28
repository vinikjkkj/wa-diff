__d(
  "getToolForCurrentRoute",
  [
    "URI",
    "getAdFLEXConfigCurrentRouteClass",
    "getToolForRouteOrCurrentWindowURI",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = r("ifRequired")(
          "AdsCMMainController",
          function () {
            return null;
          },
          r("getAdFLEXConfigCurrentRouteClass"),
        ),
        n = new (e || (e = r("URI")))(window.location.href);
      return r("getToolForRouteOrCurrentWindowURI")(t, n);
    }
    l.default = s;
  },
  98,
);
