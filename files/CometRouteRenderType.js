__d(
  "CometRouteRenderType",
  ["CometRouterRenderTypeContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      return s(r("CometRouterRenderTypeContext"));
    }
    function c() {
      var e;
      return ((e = u()) == null ? void 0 : e.renderType) === "pushView";
    }
    function d() {
      var e;
      return ((e = u()) == null ? void 0 : e.renderType) === "hosted";
    }
    function m() {
      var e;
      return ((e = u()) == null ? void 0 : e.renderType) === "main";
    }
    ((l.useCometRouteRenderingLocation = u),
      (l.useIsPushView = c),
      (l.useIsHosted = d),
      (l.useIsMain = m));
  },
  98,
);
