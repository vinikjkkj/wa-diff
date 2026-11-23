__d(
  "AdsAutoSuggestedCampaignGroupNameSearchSource",
  [
    "AbstractRelaySearchSource",
    "AdsAutoSuggestedCampaignGroupNameSearchSourceQuery.graphql",
    "AdsManagerRelayEnvironment",
    "AdsPETypeaheadAutoSuggestedNameSearchableEntry",
    "AdsPETypeaheadSearchableEntryTypes",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "AdsAutoSuggestedCampaignGroupNameSearchSourceQuery.graphql",
            ));
    function u(e, t) {
      return {
        query: s,
        variables: { accountID: e.accountID, searchTerm: t, first: 20 },
      };
    }
    function c(e) {
      var t;
      return e == null
        ? null
        : new (r("AdsPETypeaheadAutoSuggestedNameSearchableEntry"))({
            auxiliaryData: { objectType: "CAMPAIGN_GROUP" },
            title: (t = e.name) != null ? t : "",
            uniqueID: "autosuggested_name_filter_CAMPAIGN_GROUP" + e.id,
            type: o("AdsPETypeaheadSearchableEntryTypes").AUTOSUGGESTED_NAME,
          });
    }
    function d(e, t) {
      var n,
        r,
        o =
          (n =
            (r = e.ad_account) == null ||
            (r = r.ad_campaign_groups_typeahead) == null
              ? void 0
              : r.nodes) != null
            ? n
            : [];
      return o.map(t);
    }
    var m = (function (e) {
      function t(t) {
        return (
          e.call(
            this,
            r("AdsManagerRelayEnvironment"),
            {
              asyncErrorHandler: function (t) {
                r("FBLogger")("relay_ads_manager").warn(
                  "[%s] Received GraphQL error: %s",
                  "auto_suggested_campaign_group_typeahead",
                  t.description,
                );
              },
              bootstrapRequests: [
                {
                  gen: function (n) {
                    return u(t, n);
                  },
                },
              ],
              queryRequests: [
                {
                  gen: function (n) {
                    return u(t, n);
                  },
                },
              ],
              getAllForEmptyQuery: !0,
              packageFn: c,
            },
            d,
          ) || this
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("AbstractRelaySearchSource"));
    l.default = m;
  },
  98,
);
