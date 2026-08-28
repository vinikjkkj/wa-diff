__d(
  "SKAdNetworkCampaignGroupSitevarsUtils",
  ["NekoSKANCampaignGroupParamSitevarConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getMaxNonSKANCampaignIOSVersion: function () {
          return r(
            "NekoSKANCampaignGroupParamSitevarConfig.experimental",
          ).non_skan_campaign_max_ios_version.toFixed(1);
        },
        getMinSKANCampaignIOSVersion: function () {
          return r(
            "NekoSKANCampaignGroupParamSitevarConfig.experimental",
          ).skan_campaign_min_ios_version.toFixed(1);
        },
        getSKANCampaignLimit: function () {
          return r("NekoSKANCampaignGroupParamSitevarConfig.experimental")
            .campaign_limit;
        },
        getNonSKANCampaignUserOSString: function () {
          var t = e.getMaxNonSKANCampaignIOSVersion();
          return "iOS_ver_2.0_to_" + t;
        },
        getSKANCampaignUserOSString: function () {
          var t = e.getMinSKANCampaignIOSVersion();
          return "iOS_ver_" + t + "_and_above";
        },
        getAdAccountLimitBypassCheck: function (t) {
          var e,
            n = (e = t.promoted_object) == null ? void 0 : e.application_id;
          return n == null
            ? !1
            : r(
                "NekoSKANCampaignGroupParamSitevarConfig.experimental",
              ).ad_account_limit_bypass_check_app_list.find(function (e) {
                return n == e.toString();
              }) != null;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
