__d(
  "AdsDynamicAdCustomizationFieldUtils",
  [
    "invariant",
    "AdsAPIAdgroupPaths",
    "AdsCanvasConstants",
    "AdsCollectionsAdUtils",
    "AdsCreativeSpecTypes",
    "AdsDLOAdgroupFieldUtils",
    "AdsDLOLanguageUtils",
    "AdsDynamicAdCustomizationAddedLanguageFieldPaths",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsDynamicAdCustomizationCreativeUtils",
    "AdsDynamicAdCustomizationCustomizationSpecUtils",
    "AdsDynamicAdCustomizationLinkDataPrimaryLanguageFieldPaths",
    "AdsDynamicAdCustomizationPrimaryLanguageFieldPaths",
    "AdsDynamicAdCustomizationVideoDataPrimaryLanguageFieldPaths",
    "FBLogger",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["name", "description"];
    function u(e, t, n, a) {
      if (
        (a === void 0 && (a = void 0),
        o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e))
      )
        return m(e, t, n);
      a || n !== "template_url_spec" || s(0, 1027);
      var i = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecFromAdgroup(e),
        l = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationRuleIndexForLanguage(i, t);
      if (l !== -1) {
        var u = i.get(l);
        r("AdsDynamicAdCustomizationAddedLanguageFieldPaths").has(n) ||
          s(0, 1029);
        var c = r("AdsDynamicAdCustomizationAddedLanguageFieldPaths").get(n),
          d = u.getIn(c);
        if (d) return n === "template_url_spec" ? (a || s(0, 1028), a(d)) : d;
      }
    }
    function c(e) {
      var t = o("AdsDynamicAdCustomizationCreativeUtils").getCreativeSpecType(
        e,
      );
      switch (t) {
        case r("AdsCreativeSpecTypes").LINK_DATA:
          return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .LINK;
        case r("AdsCreativeSpecTypes").VIDEO_DATA:
          return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
            .CALL_TO_ACTION.VALUE.LINK;
        case r("AdsCreativeSpecTypes").TEMPLATE_DATA:
          return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
            .TEMPLATE_DATA.LINK;
        default:
          return null;
      }
    }
    function d(e) {
      var t = c(e);
      return t != null ? e.getIn(t) : null;
    }
    function m(e, t, n) {
      switch (n) {
        case "caption":
          return o("AdsDLOAdgroupFieldUtils").getLinkUrlValue(
            e,
            t,
            "display_url",
          ).fieldValue;
        case "description":
          return o("AdsDLOAdgroupFieldUtils").getLinkDescriptionValue(e, t)
            .fieldValue;
        case "image_hash":
          return (
            r("FBLogger")("dynamic_ad_customization").mustfix(
              "image hash field is not supported for mmda",
            ),
            o("AdsDLOAdgroupFieldUtils").getImageValue(e, "hash", t).fieldValue
          );
        case "link":
          return o("AdsDLOAdgroupFieldUtils").getLinkUrlValue(
            e,
            t,
            "website_url",
          ).fieldValue;
        case "message":
          return o("AdsDLOAdgroupFieldUtils").getMessageValue(e, t).fieldValue;
        case "name":
          return o("AdsDLOAdgroupFieldUtils").getHeadlineValue(e, t).fieldValue;
        case "picture":
          return o("AdsDLOAdgroupFieldUtils").getImageValue(e, "url", t)
            .fieldValue;
        case "template_url_spec":
          return o("AdsDLOAdgroupFieldUtils").getLinkUrlValue(
            e,
            t,
            "deeplink_url",
          ).fieldValue;
        case "thumbnail_url":
          return (
            r("FBLogger")("dynamic_ad_customization").mustfix(
              "thumbnail url field is not supported for mmda",
            ),
            o("AdsDLOAdgroupFieldUtils").getVideoValue(e, t).fieldValue
              .thumbnailURL
          );
        case "video_id":
          return (
            r("FBLogger")("dynamic_ad_customization").mustfix(
              "video id field is not supported for mmda",
            ),
            o("AdsDLOAdgroupFieldUtils").getVideoValue(e, t).fieldValue.videoID
          );
        default:
          return null;
      }
    }
    function p(e, t, n) {
      if (
        (n === void 0 && (n = void 0),
        o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e))
      ) {
        var r = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e);
        return r != null ? m(e, r, t) : null;
      }
      var a = f(e);
      (!a.isEmpty() || s(0, 19702),
        n || t !== "template_url_spec" || s(0, 1027));
      var i = a.get(t);
      Array.isArray(i) || (i = i.path);
      var l = e.getIn(i);
      if ((l == null && (l = _(e, t)), l != null))
        return typeof l != "string"
          ? t === "template_url_spec"
            ? (n || s(0, 1028), n(l))
            : void 0
          : l;
    }
    function _(t, n) {
      var r;
      if (!e.includes(n)) return null;
      var o =
        (r = t.creative) == null ||
        (r = r.object_story_spec) == null ||
        (r = r.template_data) == null
          ? void 0
          : r.child_attachments;
      if (o != null) {
        var a = o.find(function (e) {
            return !e.get("static_card");
          }),
          i = a.get(n);
        if (typeof i == "string") return i;
      }
      return null;
    }
    function f(e) {
      var t = o("AdsDynamicAdCustomizationCreativeUtils").getCreativeSpecType(
        e,
      );
      switch (t) {
        case r("AdsCreativeSpecTypes").LINK_DATA:
          return r(
            "AdsDynamicAdCustomizationLinkDataPrimaryLanguageFieldPaths",
          );
        case r("AdsCreativeSpecTypes").VIDEO_DATA:
          return r(
            "AdsDynamicAdCustomizationVideoDataPrimaryLanguageFieldPaths",
          );
        case r("AdsCreativeSpecTypes").TEMPLATE_DATA:
          return r("AdsDynamicAdCustomizationPrimaryLanguageFieldPaths");
        default:
          return r("immutable").Map();
      }
    }
    function g(e) {
      if (!o("AdsCollectionsAdUtils").isCollectionsAd(e.creative)) return !1;
      var t = d(e);
      if (t !== o("AdsCanvasConstants").EMPTY_CANVAS_LINK) return !0;
      var n = o(
        "AdsDynamicAdCustomizationCustomizationSpecUtils",
      ).getCustomizationSpecFromAdgroup(e);
      return n.some(function (e) {
        var t = h(e);
        return t != null && t !== o("AdsCanvasConstants").EMPTY_CANVAS_LINK;
      });
    }
    function h(e) {
      var t = e.get("link");
      return typeof t == "string" ? t : null;
    }
    function y(e, t, n) {
      if (
        e == null ||
        t == null ||
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative)
      )
        return null;
      if (n) return d(e);
      var r = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecFromAdgroup(e),
        a = r.find(function (e) {
          return (
            o(
              "AdsDynamicAdCustomizationCustomizationSpecUtils",
            ).getLanguageFromRule(e) === t
          );
        });
      return a == null ? null : h(a);
    }
    ((l.FIELDS_IN_CHILD_ATTACHMENTS = e),
      (l.getAddedLanguageField = u),
      (l.getDefaultCanvasLinkPath = c),
      (l.getDefaultCanvasLink = d),
      (l.getPrimaryLanguageField = p),
      (l.getValueFromChildAttachments = _),
      (l.getPrimaryLanguageFieldPaths = f),
      (l.hasCanvasLinkUrl = g),
      (l.getCanvasLinkUrlFromRule = h),
      (l.getCanvasLinkUrl = y));
  },
  98,
);
