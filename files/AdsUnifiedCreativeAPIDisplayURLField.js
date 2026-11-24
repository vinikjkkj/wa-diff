__d(
  "AdsUnifiedCreativeAPIDisplayURLField",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsMultiMediaUtils",
    "AdsUEditorSelectorUtils",
    "AdsUnifiedCreativeAPIFieldFactory",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "";
    function s(e, t, n) {
      var o = n(e, t);
      if (o)
        return r("shallowEqual")(
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.CAPTION,
          o,
        )
          ? [
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.CAPTION,
              o,
            ]
          : [o];
    }
    function u(e, t, n) {
      if (
        o("AdsMultiMediaUtils").isPrimaryMediaDestinationCustomizationEnabled(
          "silent",
        ) &&
        o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          e,
          "multi_media",
        )
      ) {
        var a,
          i =
            (a = r(
              "AdsAdgroupRecordAccessors",
            ).creative.media_sourcing_spec.destinations.get(e)) == null ||
            (a = a.get(0)) == null
              ? void 0
              : a.get("display_url");
        if (typeof i == "string" && i.length > 0) return i;
      }
      var l = s(e, t, n);
      if (l)
        for (var u of l) {
          var c = e.getIn(u);
          if (c !== void 0) return c;
        }
    }
    var c = o("AdsUnifiedCreativeAPIFieldFactory").createCustom(
      "displayURL",
      function (t) {
        return {
          aggregate: o("AdsUEditorSelectorUtils").memoizeBulkAggregation(
            function (n) {
              return n.map(function (n) {
                var r = n.adgroup,
                  a = n.adgroupSpecPathPlugin,
                  i = u(r, a, t.getPath),
                  l = o("AdsAssetFeedUtils").isAutomaticFlow(r);
                return (o(
                  "AdsAssetFeedUtils",
                ).isAdgroupUsingNonDofAssetFeedSpec(r) &&
                  !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(
                    r,
                  )) ||
                  l
                  ? o("AdsAssetFeedFieldUtils").getAssetAtIndex(
                      i,
                      "display_url",
                      o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                        r,
                        "link_urls",
                      ),
                    ) || e
                  : o("AdsAssetFeedFieldUtils").getNonAssetFeedValue(i) || e;
              });
            },
          ),
        };
      },
    );
    l.AdsUnifiedCreativeAPIDisplayURLField = c;
  },
  98,
);
