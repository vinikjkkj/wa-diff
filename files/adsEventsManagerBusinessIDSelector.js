__d(
  "adsEventsManagerBusinessIDSelector",
  [
    "BizKitSettingsPixelCreateFlowBusinessIDProvider",
    "BusinessUnifiedNavigationGlobalScopeSelectorDataProvider",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r(
        "BusinessUnifiedNavigationGlobalScopeSelectorDataProvider",
      ).toFluxSelector(),
      s = r("BizKitSettingsPixelCreateFlowBusinessIDProvider").toFluxSelector(),
      u = r("adsCreateSelector")(
        [e, s],
        function (t, n) {
          var e = t.globalScopeID,
            r = t.globalScopeType,
            o = n.businessID;
          return r === "business" ? e : o;
        },
        { name: i.id + ".adsEventsManagerBusinessIDSelector" },
      ),
      c = u;
    l.default = c;
  },
  98,
);
