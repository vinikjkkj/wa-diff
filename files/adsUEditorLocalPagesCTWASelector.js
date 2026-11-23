__d(
  "adsUEditorLocalPagesCTWASelector",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsUEditorSelectors",
    "WAContactOptionType",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.place_page_set_id
              .get,
          ),
        ],
        function (t) {
          var e = o("AdsBulkValueUtils").getUniformValue(t);
          return e
            ? o("WAContactOptionType").WAContactOptionType.StoreSet
            : o("WAContactOptionType").WAContactOptionType.AccountNumber;
        },
        { name: i.id + ".whatsAppContactOptionSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            r("adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector"),
            r("AdsAPIObjectives").NONE,
          ),
        ],
        function (t) {
          return u(t);
        },
        {
          name:
            i.id + ".isCampaignObjectiveCompatibleWithLocalPagesCTWASelector",
        },
      );
    function u(e) {
      var t = r("gkx")("3489");
      return (
        t &&
        (e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          e === r("AdsAPIObjectives").MESSAGES)
      );
    }
    var c = r("adsCreateSelector")(
      [
        s,
        r("adsGetUniformValueSelector")(
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").destination_type.get,
          ),
          r("AdCampaignDestination").UNDEFINED,
        ),
        e,
      ],
      function (t, n, a) {
        return (
          t &&
          n === r("AdCampaignDestination").WHATSAPP &&
          a === o("WAContactOptionType").WAContactOptionType.StoreSet
        );
      },
      { name: i.id + ".isLocalPagesCTWASelector" },
    );
    ((l.whatsAppContactOptionSelector = e),
      (l.isCampaignObjectiveCompatibleWithLocalPagesCTWA = u),
      (l.isLocalPagesCTWASelector = c));
  },
  98,
);
