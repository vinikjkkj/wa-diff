__d(
  "AdsPESortLiveReducerUtil",
  [
    "AdsDataAtom",
    "AdsInsightsSortUtil",
    "AdsMgmtMaximumSortFields",
    "AdsPECampaignSortLiveProvider",
    "AdsPENavigationUtils",
    "AdsPESortLiveStoreUtil",
    "AdsPEStatRangeUIStore",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n, a) {
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsPEStatRangeUIStore").getDispatchToken(),
        ]);
        var t = n.objectLevel,
          i = r(
            "AdsPENavigationUtils",
          ).getAdObjectLevelFromNavSection_TO_BE_DEPRECATED(
            a.data.params.section,
          ),
          l = i === t;
        if (a.data.changedParamKeys.sort && l)
          if (r("isTruthy")(a.data.params.sort)) {
            var s = o("AdsInsightsSortUtil")
                .fromKey(a.data.params.sort)
                .slice(
                  0,
                  o("AdsMgmtMaximumSortFields").MAXIMUM_NUMBER_OF_SORT_COLUMNS,
                ),
              u = s.map(function (e) {
                var n = e.field,
                  r = o("AdsPESortLiveStoreUtil").getLevelSpecificSortField(
                    n,
                    t,
                  ),
                  a = r != null ? r : n;
                return {
                  field: a,
                  order: e.direction,
                  comparisonColumnType: e.comparisonColumnType,
                };
              }),
              c = o("AdsPESortLiveStoreUtil").deriveActionSortInfo(
                { sort: u },
                n.sortInfo,
              );
            return n.set("sortInfo", c);
          } else
            return n.set(
              "sortInfo",
              r("AdsPECampaignSortLiveProvider").getInitialState().sortInfo,
            );
        return n;
      },
      u = function (n, a) {
        return (
          (e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsPEStatRangeUIStore").getDispatchToken(),
          ]),
          n.set(
            "sortInfo",
            o("AdsPESortLiveStoreUtil").deriveActionSortInfo(
              { sort: a.sort },
              n.sortInfo,
            ),
          )
        );
      },
      c = function (n, a) {
        return (
          (e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsPEStatRangeUIStore").getDispatchToken(),
          ]),
          a.objectLevel !== n.objectLevel
            ? n
            : n.set(
                "sortInfo",
                o("AdsPESortLiveStoreUtil").deriveActionSortInfo(
                  { sort: a.data.sort },
                  n.sortInfo,
                ),
              )
        );
      };
    ((l.AdsInterfacesRouteUpdateParamsDataReducer = s),
      (l.CampaignTableSetSortKeyReducer = u),
      (l.AdsInsightsTableToggleSortReducer = c));
  },
  98,
);
