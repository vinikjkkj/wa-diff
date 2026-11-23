__d(
  "AdsCampaignModalUtils",
  ["AYMTRiskDisabledTipNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [
        "aymt_account_unsettled_tip_v2",
        "aymt_campaign_dsl_restriction_tip",
        "aymt_cvco_ad_account_tip",
        "aymt_prepay_account_blocked_status_notif_tip",
        "aymt_secure_billing_eligible_tip",
      ];
      return (
        o("AYMTRiskDisabledTipNames").isRiskDisabledAYMTTipName(e) ||
        t.includes(e)
      );
    }
    l.isAMDErrorModal = e;
  },
  98,
);
