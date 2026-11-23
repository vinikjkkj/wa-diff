__d(
  "AdsUEditorAdgroupDegreesOfFreedomMutators",
  ["AdsAdgroupRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, o, a, i;
      if (t.transformations == null || t.transformations.isEmpty()) return e;
      var l =
        t.target === "text" && u(e)
          ? e
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
              "USER_ENROLLED_NON_DCO",
              e,
            );
      switch (t.target) {
        case "image":
          return c(
            l,
            (n = e.creative) == null || (n = n.degrees_of_freedom_spec) == null
              ? void 0
              : n.image_transformation_types,
            t.transformations,
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .image_transformation_types,
          );
        case "video":
          return c(
            l,
            (o = e.creative) == null || (o = o.degrees_of_freedom_spec) == null
              ? void 0
              : o.video_transformation_types,
            t.transformations,
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .video_transformation_types,
          );
        case "text":
          return c(
            l,
            (a = e.creative) == null || (a = a.degrees_of_freedom_spec) == null
              ? void 0
              : a.text_transformation_types,
            t.transformations,
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .text_transformation_types,
          );
        case "stories":
          return c(
            l,
            (i = e.creative) == null || (i = i.degrees_of_freedom_spec) == null
              ? void 0
              : i.stories_transformation_types,
            t.transformations,
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .stories_transformation_types,
          );
        default:
          return l;
      }
    }
    function s(e, t) {
      var n, o, a, i;
      if (t == null) return p(e);
      if (u(e) && t.target !== "text") return e;
      switch (t.target) {
        case "image":
          return d(
            e,
            (n = e.creative) == null || (n = n.degrees_of_freedom_spec) == null
              ? void 0
              : n.image_transformation_types,
            t.transformations,
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .image_transformation_types,
          );
        case "video":
          return d(
            e,
            (o = e.creative) == null || (o = o.degrees_of_freedom_spec) == null
              ? void 0
              : o.video_transformation_types,
            t.transformations,
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .video_transformation_types,
          );
        case "text":
          return d(
            e,
            (a = e.creative) == null || (a = a.degrees_of_freedom_spec) == null
              ? void 0
              : a.text_transformation_types,
            t.transformations,
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .text_transformation_types,
          );
        case "stories":
          return d(
            e,
            (i = e.creative) == null || (i = i.degrees_of_freedom_spec) == null
              ? void 0
              : i.stories_transformation_types,
            t.transformations,
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .stories_transformation_types,
          );
        default:
          return e;
      }
    }
    function u(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.degrees_of_freedom_spec) == null
          ? void 0
          : t.degrees_of_freedom_type) === "USER_ENROLLED_AUTOFLOW"
      );
    }
    function c(e, t, n, o) {
      if (n == null || n.isEmpty()) return e;
      var a = (t != null ? t : r("immutable").List()).toOrderedSet(),
        i = a.concat(n).toList();
      return o.set(i, e);
    }
    function d(e, t, n, o) {
      if (n && n.isEmpty()) return e;
      var a;
      if (n == null) a = r("immutable").List();
      else {
        var i = (t != null ? t : r("immutable").List()).toOrderedSet();
        a = i.subtract(n).toList();
      }
      return a.isEmpty() ? m(o.delete(e)) : o.set(a, e);
    }
    function m(e) {
      var t,
        n,
        r,
        o,
        a =
          e == null ||
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null
            ? void 0
            : t.image_transformation_types,
        i =
          e == null ||
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null
            ? void 0
            : n.video_transformation_types,
        l =
          e == null ||
          (r = e.creative) == null ||
          (r = r.degrees_of_freedom_spec) == null
            ? void 0
            : r.stories_transformation_types,
        s =
          e == null ||
          (o = e.creative) == null ||
          (o = o.degrees_of_freedom_spec) == null
            ? void 0
            : o.text_transformation_types;
      return a == null && i == null && l == null && s == null && !u(e)
        ? p(e)
        : e;
    }
    function p(e) {
      var t,
        n = e,
        o = !!(
          (t = e.creative) != null &&
          (t = t.degrees_of_freedom_spec) != null &&
          t.creative_features_spec
        );
      if (
        ((n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.delete(e)),
        o)
      ) {
        var a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.get(e);
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.set(a, n);
      }
      return n;
    }
    ((l.addTransformations = e), (l.removeTransformations = s));
  },
  98,
);
