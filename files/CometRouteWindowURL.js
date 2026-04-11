__d(
  "CometRouteWindowURL",
  ["CometRouteURLUtils", "ConstUriUtils", "absoluteToRelative"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      if (window.location.href == null) return null;
      var t =
        (e = o("ConstUriUtils").getUri(window.location.href)) == null
          ? void 0
          : e.toString();
      return t != null ? r("absoluteToRelative")(t) : null;
    }
    function s() {
      var t = e();
      return t != null ? o("CometRouteURLUtils").getURLQueryData(t) : null;
    }
    ((l.getWindowURL = e), (l.getWindowURLParams = s));
  },
  98,
);
