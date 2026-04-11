__d(
  "getWorkerInitScriptSPINParams",
  ["SiteData", "StaticSiteData", "objectEntries"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t,
        n,
        o,
        a = (n = r("SiteData"))[(o = r("StaticSiteData")).spin_mhenv_key],
        i = babelHelpers.extends(
          ((e = {}),
          (e[o.hs_key] = n.haste_session),
          (e[o.spin_rev_key] = n[o.spin_rev_key]),
          (e[o.spin_branch_key] = n[o.spin_branch_key]),
          (e[o.spin_time_key] = n[o.spin_time_key]),
          e),
          a ? ((t = {}), (t[r("StaticSiteData").spin_mhenv_key] = a), t) : null,
        );
      return new Map(r("objectEntries")(i));
    }
    l.default = e;
  },
  98,
);
