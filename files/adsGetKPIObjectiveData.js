__d(
  "adsGetKPIObjectiveData",
  [
    "fbt",
    "ix",
    "AdsAPIObjectives",
    "AdsKPIObjectivesData",
    "AdsSmartPromotion",
    "FBLogger",
    "ads-objectives",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e, t, n) {
      var a = r("isTruthy")(e) ? e.toUpperCase() : e;
      if (a === o("AdsAPIObjectives").LINK_CLICKS)
        return r("AdsKPIObjectivesData").LINK_CLICKS_MESSENGER_OBJECTIVE;
      if (a === o("AdsAPIObjectives").POST_ENGAGEMENT)
        return r("AdsKPIObjectivesData").NEW_POST_ENGAGEMENT;
      if (a === o("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY)
        return r("AdsKPIObjectivesData")[
          o("ads-objectives").KPIObjectives.NONE
        ];
      if (
        a === o("AdsAPIObjectives").CONVERSIONS &&
        t != null &&
        t.includes("PASS_OFFLINE_CONVERSION_OPT_GOAL_GK")
      )
        return r("AdsKPIObjectivesData").OFFLINE_CONVERSIONS;
      if (a === o("ads-objectives").KPIObjectives.SOCIAL_INTERACTION)
        return r("AdsKPIObjectivesData").NEW_SOCIAL_INTERACTION_OBJECTIVE;
      if (a === o("ads-objectives").KPIObjectives.PRODUCT_CATALOG_SALES)
        return r("AdsKPIObjectivesData").NEW_CATALOG_SALES;
      if (a === o("ads-objectives").KPIObjectives.MESSAGES)
        return t != null && t.includes("WHATSAPP_DESTINATION_ADS")
          ? r("AdsKPIObjectivesData").MESSAGES_WITH_INSTAGRAM_AND_WHATSAPP
          : r("AdsKPIObjectivesData").MESSAGES_WITH_INSTAGRAM;
      if (a === o("ads-objectives").KPIObjectives.APP_INSTALLS) {
        if (n === r("AdsSmartPromotion").SMART_APP_PROMOTION)
          return babelHelpers.extends(
            {},
            r("AdsKPIObjectivesData")[
              o("ads-objectives").KPIObjectives.APP_INSTALLS
            ],
            {
              name: s._(/*BTDS*/ "Advantage+ app campaigns"),
              iconReskinV1: u("840433"),
            },
          );
        if (n === r("AdsSmartPromotion").GUIDED_CREATION)
          return babelHelpers.extends(
            {},
            r("AdsKPIObjectivesData")[
              o("ads-objectives").KPIObjectives.APP_INSTALLS
            ],
            { name: s._(/*BTDS*/ "App Ads") },
          );
      }
      var i = r("isTruthy")(a) ? r("AdsKPIObjectivesData")[a] : a;
      return r("isFalsey")(i)
        ? (r("FBLogger")("ads").warn(
            "Objective %s is not defined in KPIObjectivesData",
            e,
          ),
          { name: "", lowercaseName: "" })
        : i;
    }
    l.default = e;
  },
  226,
);
