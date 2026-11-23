__d(
  "adsBulkEditDialogMenuSelector",
  [
    "AdsBulkEditColumnKeyToDialogTypeMap",
    "AdsBulkEditSelectors",
    "AdsBulkEditUtils",
    "adsBulkEditValidationInputSelector",
    "adsCreateSelector",
    "adsNotImplementedSelector",
    "shouldRenderAdvantageAudienceSectionSelector",
    "shouldRenderBulkEditAgencyFeeSectionSelector",
    "shouldRenderCAAPSectionSelector",
    "shouldRenderIndiaFinServSectionSelector",
    "shouldRenderInvididualSettingSectionSelector",
    "shouldRenderPageSectionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t, n, a, i, l, s, u, c) {
      var d = e.changedColumnsByRowMap,
        m = o("AdsBulkEditUtils").calculateChangedColumnKeys(d);
      return {
        validationInput: n,
        changedDialogTypes: o("AdsBulkEditUtils").calculateChangedDialogTypes(
          m,
          r("AdsBulkEditColumnKeyToDialogTypeMap"),
        ),
        dialogType: t,
        shouldRenderAdvantageAudienceCampaignSection: a,
        shouldRenderCAAPSection: u,
        shouldRenderIndiaFinServSection: i,
        shouldRenderInvididualSettingSection: l,
        shouldRenderPageSection: s,
        shouldRenderAgencyFeeSection: c,
      };
    }
    var d =
        ((e = {}),
        (e.ad = r("adsCreateSelector")(
          [
            (s = r("AdsBulkEditSelectors")).bulkEditFieldsSelector.ad,
            s.bulkEditDialogTypeSelector.ad,
            r("adsBulkEditValidationInputSelector").ad,
            r("shouldRenderAdvantageAudienceSectionSelector").ad,
            r("shouldRenderIndiaFinServSectionSelector").ad,
            r("shouldRenderInvididualSettingSectionSelector").ad,
            r("shouldRenderPageSectionSelector").ad,
            r("shouldRenderCAAPSectionSelector").ad,
            r("shouldRenderBulkEditAgencyFeeSectionSelector").ad,
          ],
          c,
          { name: i.id },
        )),
        (e.ad_set = r("adsCreateSelector")(
          [
            s.bulkEditFieldsSelector.ad_set,
            s.bulkEditDialogTypeSelector.ad_set,
            r("adsBulkEditValidationInputSelector").ad_set,
            r("shouldRenderAdvantageAudienceSectionSelector").ad_set,
            r("shouldRenderIndiaFinServSectionSelector").ad_set,
            r("shouldRenderInvididualSettingSectionSelector").ad_set,
            r("shouldRenderPageSectionSelector").ad_set,
            r("shouldRenderCAAPSectionSelector").ad_set,
            r("shouldRenderBulkEditAgencyFeeSectionSelector").ad_set,
          ],
          c,
          { name: i.id },
        )),
        (e.campaign = r("adsCreateSelector")(
          [
            s.bulkEditFieldsSelector.campaign,
            s.bulkEditDialogTypeSelector.campaign,
            r("adsBulkEditValidationInputSelector").campaign,
            r("shouldRenderAdvantageAudienceSectionSelector").campaign,
            r("shouldRenderIndiaFinServSectionSelector").campaign,
            r("shouldRenderInvididualSettingSectionSelector").campaign,
            r("shouldRenderPageSectionSelector").campaign,
            r("shouldRenderCAAPSectionSelector").campaign,
            r("shouldRenderBulkEditAgencyFeeSectionSelector").campaign,
          ],
          c,
          { name: i.id },
        )),
        (e.privacy_info_center = u = r("adsNotImplementedSelector")),
        (e.opportunities = u),
        (e.topline = u),
        (e.ad_account = u),
        (e.unique_adcreative = u),
        (e.product = u),
        e),
      m = d;
    l.default = m;
  },
  98,
);
