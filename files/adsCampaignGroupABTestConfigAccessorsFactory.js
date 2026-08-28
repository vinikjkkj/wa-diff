__d(
  "adsCampaignGroupABTestConfigAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          duration_in_seconds: n.basicFieldAccessorFactory(
            e,
            t,
            "duration_in_seconds",
          ),
          key_metric: n.basicFieldAccessorFactory(e, t, "key_metric"),
          creative_multicell_test: n.basicFieldAccessorFactory(
            e,
            t,
            "creative_multicell_test",
          ),
          test_variable: n.basicFieldAccessorFactory(e, t, "test_variable"),
        },
      );
    }
    l.default = e;
  },
  98,
);
