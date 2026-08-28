__d(
  "AdsPEFilterAndSortProviderPlugin",
  [
    "AdsPEFilterAndSortReducer",
    "AdsPEFilterUIStateSelectors",
    "LoadObject",
    "createObjectFrom",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["campaignGroup", "campaign", "adgroup", "uniqueAdCreative"],
      s = r("immutable").Record({
        areCountsLoading: !1,
        areIDsLoading: !1,
        error: null,
        filterSet: o("AdsPEFilterUIStateSelectors").getFilterSet(),
        draftID: r("LoadObject").empty({ creatorModuleID: i.id }),
        accountID: void 0,
        currentPageByLevel: r("createObjectFrom")(e, 0),
        previousSortInfo: null,
      }),
      u = {
        initialState: s(),
        legacyFluxReduce: function (t, n) {
          return o("AdsPEFilterAndSortReducer").reduce(t, n);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
