__d(
  "adsCrepeNavigateToCPFlow",
  ["AdsPERouterHelper", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i) {
      var l = e.adgroupIDs,
        s = e.campaignGroupIDs,
        u = e.campaignIDs,
        c = e.packageConfigID;
      if ((n === void 0 && (n = !1), s.length === 0)) {
        r("FBLogger")("ads").mustfix(
          "Unable to navigate to creation_package route without a campaign ID.  Check that there is at least one campaign ID selected.",
        );
        return;
      }
      var d = r("AdsPERouterHelper").getRouteBuilder();
      (d
        .closeTray()
        .params(r("AdsPERouterHelper").getRouter().getParams())
        .section("PACKAGE_AD_CREATION")
        .setCreationPackageConfigID(c)
        .selectedIDs(s, "campaign"),
        u.length > 0 && d.selectedIDs(u, "ad_set"),
        l.length > 0 && d.selectedIDs(l, "ad"),
        n === !0 && d.clearFilters(),
        o != null && d.tray(o),
        d.setCurrentStep(t != null ? t : 0),
        a != null && d.onComplete(a),
        i != null && d.params(i),
        d.navigate());
    }
    l.default = e;
  },
  98,
);
