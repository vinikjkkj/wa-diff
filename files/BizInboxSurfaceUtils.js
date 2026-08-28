__d(
  "BizInboxSurfaceUtils",
  [
    "BizInboxSurface",
    "BizInboxSurfaceContext",
    "URI",
    "XBizSuiteControllerRouteBuilder",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useContext;
    function c() {
      if (r("gkx")("20935")) return r("gkx")("21034");
      var t = r("XBizSuiteControllerRouteBuilder").buildURL({}),
        n = new (e || (e = r("URI")))(t).getQualifiedURI().toString();
      return e.getRequestURI().getQualifiedURI().toString().startsWith(n);
    }
    function d() {
      var e = u(r("BizInboxSurfaceContext")),
        t = e.inboxSurface;
      return t != null ? t : r("BizInboxSurface").INVALID;
    }
    ((l.isBizSuiteSurface = c), (l.useBizInboxSurface = d));
  },
  98,
);
