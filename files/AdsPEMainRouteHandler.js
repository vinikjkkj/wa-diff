__d(
  "AdsPEMainRouteHandler",
  [
    "fbt",
    "$InternalEnum",
    "AdsPERouteStatRange",
    "AdsRoutingGenericFilterUtils",
    "AdsRoutingSortSpecUtils",
    "AdsRoutingTimeRangeUtils",
    "cr:6838",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("$InternalEnum")({
        DATE_TYPE: "DateType",
        IDS_TYPE: "IDsType",
        FILTER_TYPE: "AdsGenericFilterSet",
        SORT_SPEC: "AdsInsightsSortSpec",
        TIME_RANGE: "AdsInsightsTimeRange",
        FORMATTING_TYPE: "ReportBuilderFormattingSetType",
      }),
      u = ",";
    function c() {
      return s._(/*BTDS*/ "Ads Manager");
    }
    function d(t, r, a, i) {
      if (!i) return null;
      var l = e.cast(a);
      return l == null
        ? null
        : l === e.DATE_TYPE
          ? o("AdsPERouteStatRange").encode(i)
          : l === e.IDS_TYPE
            ? i.join(u) || void 0
            : l === e.FILTER_TYPE
              ? o("AdsRoutingGenericFilterUtils").encode(i)
              : l === e.SORT_SPEC
                ? o("AdsRoutingSortSpecUtils").encode(i)
                : l === e.TIME_RANGE
                  ? o("AdsRoutingTimeRangeUtils").encode(i)
                  : l === e.FORMATTING_TYPE
                    ? n("cr:6838") == null
                      ? void 0
                      : n("cr:6838").encode(i)
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            l,
                        );
                      })();
    }
    function m(t, a, i, l) {
      if (l == null || l === "") return null;
      var s = e.cast(i);
      return s == null
        ? null
        : s === e.DATE_TYPE
          ? o("AdsPERouteStatRange").decode(l)
          : s === e.IDS_TYPE
            ? r("immutable").OrderedSet(l.split(u))
            : s === e.FILTER_TYPE
              ? o("AdsRoutingGenericFilterUtils").decode(l)
              : s === e.SORT_SPEC
                ? o("AdsRoutingSortSpecUtils").decode(l)
                : s === e.TIME_RANGE
                  ? o("AdsRoutingTimeRangeUtils").decode(l)
                  : s === e.FORMATTING_TYPE
                    ? n("cr:6838") == null
                      ? void 0
                      : n("cr:6838").decode(l)
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            s,
                        );
                      })();
    }
    ((l.getTitle = c), (l.encodeParameter = d), (l.decodeParameter = m));
  },
  226,
);
