__d(
  "adsAssetFeedSpecLeadGenMultiDestinationAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          is_lead_capture_ai_agent_enabled: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "is_lead_capture_ai_agent_enabled"),
        },
      );
    }
    l.default = e;
  },
  98,
);
