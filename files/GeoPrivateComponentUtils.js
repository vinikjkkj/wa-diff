__d(
  "GeoPrivateComponentUtils",
  [
    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
    "getReactComponentDisplayName",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = r(
        "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
      )(e).type;
      return typeof t == "string" ? null : r("getReactComponentDisplayName")(t);
    }
    l.getElementComponentName = u;
  },
  98,
);
