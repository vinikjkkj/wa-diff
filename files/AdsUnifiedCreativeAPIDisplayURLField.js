__d(
  "AdsUnifiedCreativeAPIDisplayURLField",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsMultiMediaUtils",
    "AdsUEditorSelectorUtils",
    "AdsUnifiedCreativeAPIFieldFactory",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "";
    function s(e, t) {
      var n = t.getUnifiedCreativeAPIFieldMapping(e),
        o = n.displayURL;
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
    function u(e, t) {
      if (
        o("AdsMultiMediaUtils").isPrimaryMediaDestinationCustomizationEnabled(
          "silent",
        )
      ) {
        var n,
          a =
            (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.media_sourcing_spec.destinations.get(e)) == null ||
            (n = n.get(0)) == null
              ? void 0
              : n.get("display_url");
        if (typeof a == "string" && a.length > 0) return a;
      }
      var i = s(e, t);
      if (i)
        for (var l of i) {
          var u = e.getIn(l);
          if (u !== void 0) return u;
        }
    }
    var c = o("AdsUnifiedCreativeAPIFieldFactory").createCustom(
      "displayURL",
      function () {
        return {
          aggregate: o("AdsUEditorSelectorUtils").memoizeBulkAggregation(
            function (t) {
              return t.map(function (t) {
                var n = t.adgroup,
                  r = t.adgroupSpecPathPlugin,
                  a = u(n, r),
                  i = o("AdsAssetFeedUtils").isAutomaticFlow(n);
                return (o(
                  "AdsAssetFeedUtils",
                ).isAdgroupUsingNonDofAssetFeedSpec(n) &&
                  !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(
                    n,
                  )) ||
                  i
                  ? o("AdsAssetFeedFieldUtils").getAssetAtIndex(
                      a,
                      "display_url",
                      o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                        n,
                        "link_urls",
                      ),
                    ) || e
                  : o("AdsAssetFeedFieldUtils").getNonAssetFeedValue(a) || e;
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
