__d(
  "CommerceAttachmentLoggingUtils",
  ["CommerceTabFeedClickFalcoEvent", "CommerceTabFeedImpressionFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = "unknown";
      switch (e) {
        case "homepage_stream":
        case "groups_tab":
          n = "home_feed";
          break;
        case "group":
          n = "group_feed";
          break;
      }
      var r = "unknown";
      switch (t) {
        case "NEWSFEED":
          r = "newsfeed";
          break;
        case "GROUP":
          r = "groups";
          break;
      }
      return {
        analyticsExperience: "tab_feed",
        analyticsFeedType: r,
        analyticsPage: n,
      };
    }
    function s(e, t) {
      return e ? "post" : t ? "shops_you_follow_stories" : "unknown";
    }
    function u(e) {
      var t, n, r, o, a, i, l, s;
      return {
        analytics_component:
          (t = e == null ? void 0 : e.analyticsComponent) != null
            ? t
            : "unknown",
        analytics_feed_type:
          (n = e == null ? void 0 : e.analyticsFeedType) != null
            ? n
            : "unknown",
        analytics_module:
          (r = e == null ? void 0 : e.analyticsModule) != null ? r : "unknown",
        analytics_page:
          (o = e == null ? void 0 : e.analyticsPage) != null ? o : "unknown",
        legacy_referral_code:
          (a = e == null ? void 0 : e.referralCode) != null ? a : "",
        module_type: (i = e == null ? void 0 : e.moduleType) != null ? i : "",
        navigation_chain: e == null ? void 0 : e.navigationChain,
        product_id: (l = e == null ? void 0 : e.productItemID) != null ? l : "",
        referral_surface:
          (s = e == null ? void 0 : e.analyticsExperience) != null
            ? s
            : "unknown",
        shopping_session_id: "",
      };
    }
    function c(e) {
      r("CommerceTabFeedImpressionFalcoEvent").log(function () {
        return u(e);
      });
    }
    function d(e) {
      r("CommerceTabFeedClickFalcoEvent").log(function () {
        return u(e);
      });
    }
    function m(e) {
      r("CommerceTabFeedClickFalcoEvent").log(function () {
        return u(
          babelHelpers.extends({}, e, {
            analyticsComponent: "message_seller_button",
          }),
        );
      });
    }
    ((l.getTabFeedMetadata = e),
      (l.getAttachmentModule = s),
      (l.getBSGAttachmentBasePayload = u),
      (l.logBSGAttachmentImpression = c),
      (l.logBSGAttachmentProductClick = d),
      (l.logBSGAttachmentMessageSellerButtonClick = m));
  },
  98,
);
