__d(
  "WAWebAiModeSelectorUtils",
  [
    "WAWebMetaAiRingAssetResolver",
    "WDSIconIcBolt.react",
    "WDSIconIcShoppingBag.react",
    "WDSIconWdsIcMetaAiReasoning.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (function (e) {
        if (e === "THINKING") return r("WDSIconWdsIcMetaAiReasoning.react");
        if (e === "SHOPPING") return r("WDSIconIcShoppingBag.react");
        if (e === "FAST") return r("WDSIconIcBolt.react");
        {
          var t = e;
          return o("WAWebMetaAiRingAssetResolver").getMetaAiRingIcon();
        }
      })(e);
    }
    l.getDynamicModeIcon = e;
  },
  98,
);
