__d(
  "AdsUEditorAdgroupDynamicLocalAdsUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupDynamicAdsTemplateInvisiblePageFieldsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return s(t) ? "omni" : "online";
      },
      s = function (t) {
        var e;
        return ((e = t.creative) == null ? void 0 : e.dynamic_ad_voice) != null;
      },
      u = function (t, n, r) {
        return o("AdsMutators").chain(c, function (e) {
          return o("AdsUEditorAdgroupChildAttachmentsMutators").removePlaceData(
            e,
            n,
            r,
          );
        })(t);
      },
      c = function (t) {
        var e,
          n,
          a = !!(
            t != null &&
            (e = t.creative) != null &&
            (e = e.object_story_spec) != null &&
            e.template_data
          ),
          i = !!(
            t != null &&
            (n = t.creative) != null &&
            (n = n.object_story_spec) != null &&
            n.link_data
          ),
          l = a
            ? r("AdsAdgroupRecordAccessors").creative.object_story_spec
                .template_data.message
            : i
              ? r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .link_data.message
              : null;
        return o("AdsMutators").chain(
          function (e) {
            var t;
            return l !== null && s(e)
              ? l.set(
                  o(
                    "AdsUEditorAdgroupDynamicAdsTemplateInvisiblePageFieldsUtils",
                  ).removeAllInvisibleTokensFromText(
                    (t = l.get(e)) != null ? t : "",
                  ),
                  e,
                )
              : e;
          },
          r("AdsAdgroupRecordAccessors").creative.dynamic_ad_voice.delete,
          r("AdsAdgroupRecordAccessors").creative.place_page_set_id.delete,
          r("AdsAdgroupRecordAccessors").creative.recommender_settings
            .product_sales_channel.delete,
        )(t);
      };
    ((l.getDefaultProductSalesChannel = e),
      (l.isDynamicLocalAdgroup = s),
      (l.removeDynamicLocalAdFields = u),
      (l.removeDynamicLocalAdFieldsWithoutPlaceData = c));
  },
  98,
);
