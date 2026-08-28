__d(
  "AdsDynamicAdCustomizationCustomizationSpecUtils",
  ["invariant", "AdsAPIAdgroupPaths", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
      r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
        .CUSTOMIZATION_RULES_SPEC,
      r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
        .CUSTOMIZATION_RULES_SPEC,
      r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
        .CUSTOMIZATION_RULES_SPEC,
    ];
    function u(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.object_story_spec;
      return (n == null ? void 0 : n.link_data) != null
        ? r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .CUSTOMIZATION_RULES_SPEC
        : (n == null ? void 0 : n.video_data) != null
          ? r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .CUSTOMIZATION_RULES_SPEC
          : r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
              .CUSTOMIZATION_RULES_SPEC;
    }
    function c(e, t) {
      return e.findIndex(function (e) {
        var n = e.get("customization_spec");
        return n != null && typeof n != "string" && n.get("language") === t;
      });
    }
    function d(e) {
      var t = u(e);
      return e.getIn(t) != null;
    }
    function m(e) {
      var t = u(e);
      return e.getIn(t) || r("immutable").List();
    }
    function p(e) {
      var t,
        n,
        r = (t = e.creative) == null ? void 0 : t.object_story_spec;
      if ((r == null ? void 0 : r.link_data) != null) {
        var o;
        return (o = e.creative) == null ||
          (o = o.object_story_spec) == null ||
          (o = o.link_data) == null
          ? void 0
          : o.customization_rules_spec;
      }
      if ((r == null ? void 0 : r.video_data) != null) {
        var a;
        return (a = e.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.video_data) == null
          ? void 0
          : a.customization_rules_spec;
      }
      return (n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.template_data) == null
        ? void 0
        : n.customization_rules_spec;
    }
    function _(e) {
      return (
        e
          .filter(function (e) {
            return e != null;
          })
          .count() === 1 && h(e) !== void 0
      );
    }
    function f(e) {
      var t,
        n,
        r,
        o =
          (t = e.object_story_spec) == null || (t = t.link_data) == null
            ? void 0
            : t.customization_rules_spec;
      if (o != null) return o;
      var a =
        (n = e.object_story_spec) == null || (n = n.video_data) == null
          ? void 0
          : n.customization_rules_spec;
      if (a != null) return a;
      var i =
        (r = e.object_story_spec) == null || (r = r.template_data) == null
          ? void 0
          : r.customization_rules_spec;
      return i != null ? i : null;
    }
    function g(e) {
      var t = f(e);
      return Array.isArray(t);
    }
    function h(e) {
      var t = (e || r("immutable").Map()).get("customization_spec");
      return (
        typeof t != "string" || s(0, 1025),
        (t || r("immutable").Map()).get("language")
      );
    }
    ((l.AllCustomizationSpecPaths = e),
      (l.getCustomizationSpecPathFromAdgroup = u),
      (l.getCustomizationRuleIndexForLanguage = c),
      (l.hasDynamicAdCustomization = d),
      (l.getCustomizationSpecFromAdgroup = m),
      (l.getCustomizationSpecFromAdgroupObj = p),
      (l.isPrimaryRule = _),
      (l.getCustomizationSpecFromCreative = f),
      (l.hasCustomizationSpecFromCreative = g),
      (l.getLanguageFromRule = h));
  },
  98,
);
