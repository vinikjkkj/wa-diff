__d(
  "AdsPETypeAheadAutoSuggestedLabelFilterSearchSource",
  [
    "AbstractRelaySearchSource",
    "AdsAdObjectRelayIDUtils",
    "AdsManagerRelayEnvironment",
    "AdsPETypeAheadAutoSuggestedLabelFilterSearchSourceQuery.graphql",
    "AdsPETypeaheadAutoSuggestedLabelFilterSearchableEntry",
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
              "AdsPETypeAheadAutoSuggestedLabelFilterSearchSourceQuery.graphql",
            ));
    function u(e, t) {
      return {
        query: s,
        variables: { accountID: e, searchText: t, limit: 10, activeOnly: !0 },
      };
    }
    function c(e) {
      var t;
      return e == null
        ? null
        : new (o(
            "AdsPETypeaheadAutoSuggestedLabelFilterSearchableEntry",
          ).AdsPETypeaheadAutoSuggestedLabelFilterSearchableEntry)({
            uniqueID: "autosuggested_tag_filter_CAMPAIGN_GROUP" + e.id,
            title: (t = e.name) != null ? t : "",
            auxiliaryData: {
              objectLevel: o("AdsAdObjectRelayIDUtils").AdsUEditorAdObjectLevels
                .CAMPAIGN_GROUP,
              labelEntID: e.id,
            },
            type: o("AdsPETypeaheadSearchableEntryTypes").AUTOSUGGESTED_LABELS,
          });
    }
    function d(e, t) {
      var n,
        r,
        o =
          (n = (r = e.ad_account) == null ? void 0 : r.ad_labels) != null
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
                  "typeahead_auto_suggested_label_filter_search_source",
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
