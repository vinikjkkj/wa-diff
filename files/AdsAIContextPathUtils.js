__d(
  "AdsAIContextPathUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = "/adsmanager",
      l = "/billing_hub",
      s = "/business-support-home",
      u = "/latest",
      c = "/latest/insights/object_insights",
      d = "/latest/consolidatedad/",
      m = "/latest/automated_ads_creation/",
      p = "/latest/ads-experiments/",
      _ = "/latest/ads-experiments/results/list/",
      f = "/latest/ads-experiments/split-test-setup/",
      g = "/latest/ads-experiments/split-test-results/",
      h = "/latest/instant_ads/",
      y = "/latest/boost_post_creation/",
      C = "/latest/boost_event_creation/",
      b = "/latest/boost_instagram_media_creation/",
      v = "/latest/boost_story_creation/",
      S = "/latest/boost_ab_test_creation/",
      R = "/latest/boost_automotive_inventory_creation/",
      L = "/latest/boost_integrated_business_creation/",
      E = "/latest/boost_catalog_sales_creation/",
      k = "all_promotions",
      I = [p, _, f, g, h, y, C, b, v, S, R, L, E, d, m],
      T = "/manage/accounts",
      D = "/manage/campaigns",
      x = "/manage/adsets",
      $ = "/manage/ads",
      P = "/manage/creation_package",
      N = "/insights",
      M = "/edit",
      w = "/edit/standalone",
      A = "/history",
      F = "/reporting",
      O = "/audiences",
      B = "/manage/advertising_settings",
      W = "/manage/ad_account_settings";
    function q() {
      return new URL(window.location.href);
    }
    function U() {
      var e = window.location.pathname;
      return I.some(function (t) {
        return e === t;
      });
    }
    ((i.ADS_MANAGER_BASE_PATHNAME = e),
      (i.BILLING_AND_PAYMENTS_BASE_PATHNAME = l),
      (i.BUSINESS_SUPPORT_HOME_BASE_PATHNAME = s),
      (i.META_BUSINESS_SUITE_BASE_PATHNAME = u),
      (i.META_BUSINESS_SUITE_OBJECT_INSIGHTS_PATHNAME = c),
      (i.FACEBOOK_ALL_ADS_SECTION = k),
      (i.ACCOUNT_OVERVIEW_PATHNAME = T),
      (i.L3_PATHNAME = D),
      (i.L2_PATHNAME = x),
      (i.L1_PATHNAME = $),
      (i.CREATION_PACKAGE_PATHNAME = P),
      (i.INSIGHTS_TERMINAL_PATHNAME = N),
      (i.EDIT_TERMINAL_PATHNAME = M),
      (i.STANDALONE_EDIT_TERMINAL_PATHNAME = w),
      (i.HISTORY_TERMINAL_PATHNAME = A),
      (i.ADS_REPORTING_PATHNAME = F),
      (i.AUDIENCES_PATHNAME = O),
      (i.ADVERTISING_SETTINGS_PATHNAME = B),
      (i.AD_ACCOUNT_SETTINGS_PATHNAME = W),
      (i.getURLParams = q),
      (i.getShouldHideL4SelectorOnMBS = U));
  },
  66,
);
