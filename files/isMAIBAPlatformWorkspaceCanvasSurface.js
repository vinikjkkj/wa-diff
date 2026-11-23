__d(
  "isMAIBAPlatformWorkspaceCanvasSurface",
  ["MAIBASurfaceGraphQL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = r("MAIBASurfaceGraphQL")).ADS_MANAGER,
        e.BUSINESS_HELP_CENTER,
        e.BUSINESS_SUPPORT_HOME,
        e.META_BUSINESS_SUITE,
      ]);
    function u(e) {
      return e != null && s.has(e);
    }
    l.default = u;
  },
  98,
);
