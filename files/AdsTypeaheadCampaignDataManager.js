__d(
  "AdsTypeaheadCampaignDataManager",
  [
    "AdsTypeaheadCampaignConstants",
    "AdsTypeaheadFilters",
    "AdsTypeaheadGraphAPIRequest",
    "AdsTypeaheadSearchableEntry",
    "Promise",
    "adsTypeaheadStoreFilterCampaignResults",
    "adsTypeaheadStoreOnlyContainsDigits",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        ((this.load = function (e, t) {
          var n = o("AdsTypeaheadFilters").createCampaignFilter(
            e.queryString || "",
            {
              buyingType: e.buyingType,
              campaignGroupID: e.campaignGroupID,
              includeSplitTests: e.includeSplitTests,
              objective: e.objective,
            },
          );
          return o("AdsTypeaheadGraphAPIRequest")
            .send(
              e.accountID,
              o("AdsTypeaheadCampaignConstants").CAMPAIGN_FIELDS,
              "adsets",
              "updated_time",
              t,
              n,
            )
            .then(function (e) {
              var t,
                n,
                a = r("adsTypeaheadStoreFilterCampaignResults")(e.data),
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
                  return o("AdsTypeaheadSearchableEntry").createForCampaign(
                    e,
                    !1,
                  );
                }),
              };
            });
        }),
          (this.loadByID = function (t) {
            if (!r("adsTypeaheadStoreOnlyContainsDigits")(t.queryString))
              return (e || (e = n("Promise"))).resolve([]);
            var a = o("AdsTypeaheadFilters").createCampaignByIDFilter(
              t.queryString || "",
              {
                buyingType: t.buyingType,
                campaignGroupID: t.campaignGroupID,
                includeSplitTests: t.includeSplitTests,
                objective: t.objective,
              },
            );
            return o("AdsTypeaheadGraphAPIRequest")
              .send(
                t.accountID,
                o("AdsTypeaheadCampaignConstants").CAMPAIGN_FIELDS,
                "adsets",
                "updated_time",
                null,
                a,
              )
              .then(function (e) {
                var t = r("adsTypeaheadStoreFilterCampaignResults")(e.data);
                return t.map(function (e) {
                  return o("AdsTypeaheadSearchableEntry").createForCampaign(e);
                });
              });
          }));
      },
      u = new s();
    l.default = u;
  },
  98,
);
