__d(
  "AdsTypeaheadCampaignGroupDataManager",
  [
    "AdsTypeaheadCampaignGroupConstants",
    "AdsTypeaheadFilters",
    "AdsTypeaheadGraphAPIRequest",
    "AdsTypeaheadSearchableEntry",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        this.load = function (e, t) {
          var n = o("AdsTypeaheadFilters").createCampaignGroupFilter(
            e.queryString || "",
            e.toplineID,
            e.objectives,
            e.includeSplitTests,
          );
          return o("AdsTypeaheadGraphAPIRequest")
            .send(
              e.accountID,
              o("AdsTypeaheadCampaignGroupConstants").CAMPAIGN_GROUP_FIELDS,
              "campaigns",
              "updated_time",
              t,
              n,
            )
            .then(function (e) {
              var t,
                n,
                a = e.data,
                i = r("isTruthy")(
                  e == null || (t = e.paging) == null ? void 0 : t.next,
                )
                  ? e == null ||
                    (n = e.paging) == null ||
                    (n = n.cursors) == null
                    ? void 0
                    : n.after
                  : null;
              return {
                after: i,
                searchableEntries: a.map(function (e) {
                  return o(
                    "AdsTypeaheadSearchableEntry",
                  ).createForCampaignGroup(e);
                }),
              };
            });
        };
      },
      s = new e();
    l.default = s;
  },
  98,
);
