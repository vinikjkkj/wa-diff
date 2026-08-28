__d(
  "adsTargetingPGDIsIndividualSettingCampaign",
  ["AdsCampaignRecordAccessors", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e =
            r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.individual_setting.age.get(t) !=
            null,
          n =
            r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.individual_setting.gender.get(t) !=
            null;
        return (
          e !== n &&
            r("FBLogger")("pgd_individual_settings").warn(
              "Only one of age or gender is present in individual setting",
            ),
          e && n
        );
      },
      s = e;
    l.default = s;
  },
  98,
);
