__d(
  "AdsObjectTypeGraphEdgeNameUtils",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        adAccount: "owned_ad_accounts",
        adgroup: "ads",
        campaign: "adsets",
        campaignGroup: "campaigns",
        topline: "adtoplines",
        uniqueAdCreative: "unique_adcreatives",
      },
      u = babelHelpers.extends({}, e, {
        adgroup: "lightads",
        campaign: "light_adsets",
        campaignGroup: "light_campaigns",
      }),
      c = {
        ads: "adgroup",
        adsets: "campaign",
        adtoplines: "topline",
        campaigns: "campaignGroup",
        owned_ad_accounts: "adAccount",
        unique_adcreatives: "uniqueAdCreative",
        light_adsets: "campaign",
        light_campaigns: "campaignGroup",
        lightads: "adgroup",
      },
      d = {
        campaign: "light_campaigns",
        ad_set: "light_adsets",
        ad: "lightads",
      };
    function m(t, n) {
      return (
        n === void 0 && (n = !1),
        (t !== "opportunities" &&
          t !== "privacyInfoCenter" &&
          t !== "product") ||
          s(0, 14099),
        n ? u[t] : e[t]
      );
    }
    function p(e) {
      return c[e];
    }
    function _(e) {
      return (
        (e !== "opportunities" &&
          e !== "privacy_info_center" &&
          e !== "ad_account" &&
          e !== "topline" &&
          e !== "unique_adcreative" &&
          e !== "product") ||
          s(0, 90534),
        d[e]
      );
    }
    ((l.getGraphEdgeNameForAdLevel = m),
      (l.getAdLevelForGraphEdgeName = p),
      (l.getAdObjectLevelToLightEdgeName = _));
  },
  98,
);
