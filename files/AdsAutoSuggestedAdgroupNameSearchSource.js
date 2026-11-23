__d(
  "AdsAutoSuggestedAdgroupNameSearchSource",
  [
    "AbstractRelaySearchSource",
    "AdsAutoSuggestedAdgroupNameSearchSourceQuery.graphql",
    "AdsManagerRelayEnvironment",
    "AdsPETypeaheadAutoSuggestedNameSearchableEntry",
    "AdsPETypeaheadSearchableEntryTypes",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 20,
      u =
        e !== void 0
          ? e
          : (e = n("AdsAutoSuggestedAdgroupNameSearchSourceQuery.graphql"));
    function c(e, t) {
      return {
        query: u,
        variables: { accountID: e.accountID, searchTerm: t, first: s },
      };
    }
    function d(e) {
      var t;
      return e == null
        ? null
        : new (r("AdsPETypeaheadAutoSuggestedNameSearchableEntry"))({
            auxiliaryData: { objectType: "ADGROUP" },
            title: (t = e.name) != null ? t : "",
            uniqueID: "autosuggested_name_filter_ADGROUP_" + e.id,
            type: o("AdsPETypeaheadSearchableEntryTypes").AUTOSUGGESTED_NAME,
          });
    }
    function m(e, t) {
      var n,
        r,
        o =
          (n =
            (r = e.ad_account) == null || (r = r.adgroups_typeahead) == null
              ? void 0
              : r.nodes) != null
            ? n
            : [];
      return o.map(t);
    }
    var p = (function (e) {
      function t(t) {
        return (
          e.call(
            this,
            r("AdsManagerRelayEnvironment"),
            {
              asyncErrorHandler: function (t) {
                r("FBLogger")("relay_ads_manager").warn(
                  "[%s] Received GraphQL error: %s",
                  "auto_suggested_adgroup_typeahead",
                  t.description,
                );
              },
              bootstrapRequests: [
                {
                  gen: function (n) {
                    return c(t, n);
                  },
                },
              ],
              queryRequests: [
                {
                  gen: function (n) {
                    return c(t, n);
                  },
                },
              ],
              getAllForEmptyQuery: !0,
              packageFn: d,
            },
            m,
          ) || this
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("AbstractRelaySearchSource"));
    l.default = p;
  },
  98,
);
