__d(
  "MarketingMessageDuplicationUpsellTipLoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "message_marketing_duplication_upsell_modal_impression",
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.business_id = t),
          (o.object_ids = n),
          o),
      });
    }
    function s(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "message_marketing_duplication_upsell_modal_button_click",
        data:
          ((a = {}),
          (a.ad_account_id = e),
          (a.business_id = t),
          (a.object_ids = n),
          (a.action_type = o),
          a),
      });
    }
    function u(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "message_marketing_duplication_upsell_campaign_eligibility",
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.object_ids = t),
          (o.source = n),
          o),
      });
    }
    ((l.logDuplicationUpsellModalImpressionSuccess = e),
      (l.logDuplicationUpsellModalButtonClick = s),
      (l.logMarketingMessageDuplicationUpsellCampaignEligibility = u));
  },
  98,
);
