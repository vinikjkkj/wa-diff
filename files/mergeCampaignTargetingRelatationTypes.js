__d(
  "mergeCampaignTargetingRelatationTypes",
  ["AdsCampaignRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e = r(
          "AdsCampaignRecordAccessors",
        ).targeting.targeting_relaxation_types.get(t);
        return r(
          "AdsCampaignRecordAccessors",
        ).targeting.targeting_relaxation_types.set(
          r("immutable").fromJS(
            babelHelpers.extends({}, e ? e.toJS() : null, n),
          ),
          t,
        );
      },
      s = e;
    l.default = s;
  },
  98,
);
