__d(
  "AdsDynamicAdCustomizationCreativeUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsCanvasConstants",
    "AdsCreativeSpecTypes",
    "AdsDynamicAdCustomizationCustomizationSpecUtils",
    "AdsDynamicAdCustomizationFieldUtils",
    "AdsDynamicAdCustomizationLanguageUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o = (t = e.creative) == null ? void 0 : t.object_story_spec;
      if ((o == null ? void 0 : o.link_data) != null)
        return r("AdsCreativeSpecTypes").LINK_DATA;
      if ((o == null ? void 0 : o.video_data) != null)
        return r("AdsCreativeSpecTypes").VIDEO_DATA;
      if ((o == null ? void 0 : o.template_data) != null)
        return r("AdsCreativeSpecTypes").TEMPLATE_DATA;
      var a = (n = e.creative) == null ? void 0 : n.branded_content;
      return (a == null ? void 0 : a.parent_source_facebook_post_id) != null ||
        (a == null ? void 0 : a.parent_source_instagram_media_id) != null
        ? r("AdsCreativeSpecTypes").EXISTING_POST_DATA
        : null;
    }
    function s(t) {
      var n = e(t);
      switch (n) {
        case r("AdsCreativeSpecTypes").LINK_DATA:
          return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .path;
        case r("AdsCreativeSpecTypes").VIDEO_DATA:
          return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
            .path;
        case r("AdsCreativeSpecTypes").TEMPLATE_DATA:
          return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
            .TEMPLATE_DATA.path;
        default:
          return null;
      }
    }
    function u(e) {
      var t = s(e);
      return t == null
        ? r("immutable").Map()
        : e.getIn(t) || r("immutable").Map();
    }
    function c(e, t) {
      var n = o(
        "AdsDynamicAdCustomizationCustomizationSpecUtils",
      ).getCustomizationSpecFromAdgroup(e);
      if (n.isEmpty()) return !0;
      var r = o(
          "AdsDynamicAdCustomizationLanguageUtils",
        ).getPrimaryLanguageFromAdgroup(e),
        a =
          o("AdsDynamicAdCustomizationFieldUtils").getDefaultCanvasLink(e) !==
          o("AdsCanvasConstants").EMPTY_CANVAS_LINK,
        i = function (n) {
          return (n === t && n != null) || (t == null && n === r);
        };
      return !n.some(function (e) {
        var t = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getLanguageFromRule(e);
        return !i(t) && ((t === r && a) || e.get("link") != null);
      });
    }
    ((l.getCreativeSpecType = e),
      (l.getCreativeSpecPath = s),
      (l.getCreativeSpecData = u),
      (l.isCreativeSpecTypeMutable = c));
  },
  98,
);
