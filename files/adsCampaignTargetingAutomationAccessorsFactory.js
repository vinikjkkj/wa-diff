__d(
  "adsCampaignTargetingAutomationAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          age: n.basicFieldAccessorFactory(e, t, "age"),
          custom_audience: n.basicFieldAccessorFactory(e, t, "custom_audience"),
          detailed_targeting: n.basicFieldAccessorFactory(
            e,
            t,
            "detailed_targeting",
          ),
          device: n.basicFieldAccessorFactory(e, t, "device"),
          gender: n.basicFieldAccessorFactory(e, t, "gender"),
          lookalike: n.basicFieldAccessorFactory(e, t, "lookalike"),
          geo: n.basicFieldAccessorFactory(e, t, "geo"),
        },
      );
    }
    function s(t, n) {
      var r;
      return babelHelpers.extends(
        {},
        (r = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(t, n),
        {
          advantage_audience: r.basicFieldAccessorFactory(
            t,
            n,
            "advantage_audience",
          ),
          creative_audience_pairing: r.basicFieldAccessorFactory(
            t,
            n,
            "creative_audience_pairing",
          ),
          individual_setting: e(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.individual_setting;
            },
            [].concat(n, ["individual_setting"]),
          ),
          shared_audiences: r.basicListFieldAccessorFactory(
            t,
            n,
            "shared_audiences",
          ),
          value_expression: r.basicFieldAccessorFactory(
            t,
            n,
            "value_expression",
          ),
        },
      );
    }
    l.default = s;
  },
  98,
);
