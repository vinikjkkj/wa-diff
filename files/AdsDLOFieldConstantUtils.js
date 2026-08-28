__d(
  "AdsDLOFieldConstantUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsDLOAdgroupFieldUtils",
    "AdsDLOLanguageUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        assetFeedField: "bodies",
        assetFeedSubField: "text",
        ruleLabel: "body_label",
        getDefaultValue: function (t) {
          var e;
          if (
            !o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(
              t,
            )
          )
            return "";
          var n = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(t);
          return (e = o("AdsDLOAdgroupFieldUtils").getMessageValue(
            t,
            n,
          ).fieldValue) != null
            ? e
            : "";
        },
      },
      s = {
        assetFeedField: "titles",
        assetFeedSubField: "text",
        ruleLabel: "title_label",
        getDefaultValue: function (t) {
          var e;
          if (
            !o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(
              t,
            )
          )
            return "";
          var n = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(t);
          return (e = o("AdsDLOAdgroupFieldUtils").getHeadlineValue(
            t,
            n,
          ).fieldValue) != null
            ? e
            : "";
        },
      },
      u = {
        assetFeedField: "descriptions",
        assetFeedSubField: "text",
        ruleLabel: "description_label",
        getDefaultValue: function (t) {
          var e;
          if (
            !o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(
              t,
            )
          )
            return "";
          var n = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(t);
          return (e = o("AdsDLOAdgroupFieldUtils").getLinkDescriptionValue(
            t,
            n,
          ).fieldValue) != null
            ? e
            : "";
        },
      },
      c = {
        assetFeedField: "link_urls",
        assetFeedSubField: "website_url",
        ruleLabel: "link_url_label",
        getDefaultValue: function (t) {
          var e = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(t);
          return (
            o("AdsDLOAdgroupFieldUtils").getLinkUrlValue(t, e, "website_url")
              .fieldValue || ""
          );
        },
      },
      d = {
        assetFeedField: "link_urls",
        assetFeedSubField: "display_url",
        ruleLabel: "link_url_label",
        getDefaultValue: function (t) {
          return "";
        },
      },
      m = {
        assetFeedField: "link_urls",
        assetFeedSubField: "deeplink_url",
        ruleLabel: "link_url_label",
        getDefaultValue: function (t) {
          return "";
        },
      },
      p = [e, s, u, c, d, m];
    function _(e) {
      switch (e) {
        case "bodies":
          return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies;
        case "titles":
          return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles;
        case "descriptions":
          return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .descriptions;
        case "link_urls":
          return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .link_urls;
        default:
          return (
            r("FBLogger")("dynamic_ad_customization").mustfix(
              "Asset Customization Fields only support bodies, titles, descriptions, and link urls",
            ),
            null
          );
      }
    }
    ((l.BODY_FIELD = e),
      (l.TITLE_FIELD = s),
      (l.DESCRIPTION_FIELD = u),
      (l.WEBSITE_URL = c),
      (l.DISPLAY_URL = d),
      (l.DEEPLINK_URL = m),
      (l.ALL_FIELDS = p),
      (l.getAccessorPath = _));
  },
  98,
);
