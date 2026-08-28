__d(
  "AdsDynamicAdsFormatUtils",
  ["AdsLinkPostFormat", "AdsUEditorAdgroupCreativeFormat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = c(e);
      switch (t) {
        case "collection_video":
          return r("AdsLinkPostFormat").COLLECTIONS;
        case "single_image":
        case "single_video":
          return r("AdsLinkPostFormat").SINGLE;
        case "carousel_images_multi_items":
        case "carousel_images_single_item":
        case "carousel_videos_multi_items":
        case "carousel_slideshows":
        default:
          return r("AdsLinkPostFormat").MULTIPLE;
      }
    }
    function s(t) {
      return e(t) === r("AdsLinkPostFormat").SINGLE;
    }
    function u(t) {
      return e(t) === r("AdsLinkPostFormat").MULTIPLE;
    }
    function c(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.template_data) == null
            ? void 0
            : t.format_option;
      if (n == null) {
        var r,
          o,
          a = !!(
            e != null &&
            (r = e.creative) != null &&
            (r = r.object_story_spec) != null &&
            (r = r.template_data) != null &&
            r.force_single_link
          ),
          i = !!(
            e != null &&
            (o = e.creative) != null &&
            (o = o.object_story_spec) != null &&
            (o = o.template_data) != null &&
            o.show_multiple_images
          );
        a && !i
          ? (n = "single_image")
          : !a && !i && (n = "carousel_images_multi_items");
      }
      return n;
    }
    function d(e) {
      switch (e) {
        case "single_image":
          return r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE;
        case "single_video":
          return r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO;
        case "carousel_images_multi_items":
        case "carousel_images_single_item":
        case "carousel_ar_effects":
        case "carousel_videos_multi_items":
          return r("AdsUEditorAdgroupCreativeFormat").CAROUSEL;
        case "collection_video":
          return r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS;
        default:
          return;
      }
    }
    ((l.getDynamicAdLinkPostFormat = e),
      (l.getIsDynamicAdSingleMediaFormat = s),
      (l.getIsDynamicAdCarouselMediaFormat = u),
      (l.getAdgroupFormatOption = c),
      (l.getAdsUEditorAdgroupCreativeFormatForFormatOption = d));
  },
  98,
);
