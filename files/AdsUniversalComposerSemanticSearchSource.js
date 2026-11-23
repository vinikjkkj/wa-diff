__d(
  "AdsUniversalComposerSemanticSearchSource",
  [
    "AbstractRelaySearchSource",
    "AdsManagerRelayEnvironment",
    "AdsUniversalComposerDimensionRegistry",
    "AdsUniversalComposerSemanticSearchSourceQuery.graphql",
    "AdsUniversalComposerSuggestSearchSourceUtils",
    "FBLogger",
    "SearchSourceQueryStatus",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5,
      u =
        e !== void 0
          ? e
          : (e = n("AdsUniversalComposerSemanticSearchSourceQuery.graphql"));
    function c(e) {
      return {
        query: u,
        variables: {
          query: e,
          anchor: o(
            "AdsUniversalComposerDimensionRegistry",
          ).buildRetrievalAnchor(e),
          count: s,
        },
      };
    }
    function d(e, t, n) {
      var r,
        a = ((r = e.universal_composer_suggest) != null ? r : []).map(
          function (e) {
            return e == null
              ? null
              : { action: e.action, sourceQuery: e.source_query, text: e.text };
          },
        );
      return o(
        "AdsUniversalComposerSuggestSearchSourceUtils",
      ).buildSemanticTypeaheadEntries(
        o("AdsUniversalComposerSuggestSearchSourceUtils").dropBetaOnlyRows(
          a,
          n,
        ),
        t,
      );
    }
    var m = (function (e) {
      function t(t, n) {
        var a;
        return (
          (a =
            e.call(
              this,
              r("AdsManagerRelayEnvironment"),
              {
                asyncErrorHandler: function (t) {
                  r("FBLogger")("relay_ads_manager").warn(
                    "[%s] Received GraphQL error: %s",
                    "universal_composer_suggest_semantic",
                    t.description,
                  );
                },
                queryRequests: [
                  {
                    gen: function (t) {
                      return c(t);
                    },
                  },
                ],
                indexFn: o("AdsUniversalComposerSuggestSearchSourceUtils")
                  .getEntrySourceQuery,
                matchFn: o("AdsUniversalComposerSuggestSearchSourceUtils")
                  .isEntryForCurrentQuery,
                packageFn: o("AdsUniversalComposerSuggestSearchSourceUtils")
                  .packageSemanticSuggestion,
              },
              function (e, n) {
                return d(e, n, t);
              },
            ) || this),
          (a.$AdsUniversalComposerSemanticSearchSource$p_1 = n),
          a
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.searchImpl = function (n, r, a) {
          if (
            !o(
              "AdsUniversalComposerSuggestSearchSourceUtils",
            ).isSemanticQueryEligible(n) ||
            !this.$AdsUniversalComposerSemanticSearchSource$p_1()
          ) {
            r([], n, o("SearchSourceQueryStatus").COMPLETE);
            return;
          }
          e.prototype.searchImpl.call(this, n, r, a);
        }),
        t
      );
    })(r("AbstractRelaySearchSource"));
    l.default = m;
  },
  98,
);
