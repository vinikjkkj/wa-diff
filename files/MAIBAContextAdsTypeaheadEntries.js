__d(
  "MAIBAContextAdsTypeaheadEntries",
  [
    "MAIBAContextAdsTypeaheadEntriesCampaignGroupQuery.graphql",
    "RelayHooks",
    "SearchableEntry",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "MAIBAContextAdsTypeaheadEntriesCampaignGroupQuery.graphql",
            ));
    async function u(e, t, n) {
      var a,
        i,
        l = await o("RelayHooks")
          .fetchQuery(e, s, { accountID: t, searchTerm: n })
          .toPromise(),
        u =
          (a =
            l == null || (i = l.ad_account) == null
              ? void 0
              : i.ad_campaign_groups_typeahead.nodes) != null
            ? a
            : [];
      return u.map(function (e, t) {
        return new (r("SearchableEntry"))({
          auxiliaryData: { objective: e.objective },
          order: t,
          title: e.name,
          uniqueID: e.id,
        });
      });
    }
    l.getMAIBAContextCampaignGroupEntries = u;
  },
  98,
);
