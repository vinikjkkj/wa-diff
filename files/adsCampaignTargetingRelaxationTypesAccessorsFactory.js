__d(
  "adsCampaignTargetingRelaxationTypesAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          custom_audience: n.basicFieldAccessorFactory(e, t, "custom_audience"),
          detailed_targeting: n.basicFieldAccessorFactory(
            e,
            t,
            "detailed_targeting",
          ),
          lookalike: n.basicFieldAccessorFactory(e, t, "lookalike"),
          user_selection_is_cae_overriden: n.basicFieldAccessorFactory(
            e,
            t,
            "user_selection_is_cae_overriden",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
