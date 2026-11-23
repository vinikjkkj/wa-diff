__d(
  "AdsUniversalComposerSuggestSearchSource",
  [
    "AbstractRelaySearchSource",
    "AdsManagerRelayEnvironment",
    "AdsUniversalComposerDimensionRegistry",
    "AdsUniversalComposerSuggestSearchSourceQuery.graphql",
    "AdsUniversalComposerSuggestSearchSourceUtils",
    "FBLogger",
    "SearchSourceQueryStatus",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 16,
      u = new Map(),
      c =
        e !== void 0
          ? e
          : (e = n("AdsUniversalComposerSuggestSearchSourceQuery.graphql"));
    function d(e) {
      return {
        query: c,
        variables: {
          query: e,
          anchor: o(
            "AdsUniversalComposerDimensionRegistry",
          ).buildRetrievalAnchor(e),
          count: s,
        },
      };
    }
    function m(e, t, n) {
      var r,
        a,
        i = ((r = e.universal_composer_suggest) != null ? r : []).map(
          function (e) {
            return e == null
              ? null
              : { action: e.action, sourceQuery: e.source_query, text: e.text };
          },
        ),
        l = (a = i[0]) == null ? void 0 : a.sourceQuery;
      return (
        l != null &&
          u.set(
            o("AdsUniversalComposerDimensionRegistry").getRetrievalKey(l),
            i,
          ),
        o("AdsUniversalComposerSuggestSearchSourceUtils").buildTypeaheadEntries(
          o("AdsUniversalComposerSuggestSearchSourceUtils").dropBetaOnlyRows(
            i,
            n,
          ),
          t,
        )
      );
    }
    var p = (function (e) {
      function t(t) {
        var n;
        return (
          (n =
            e.call(
              this,
              r("AdsManagerRelayEnvironment"),
              {
                asyncErrorHandler: function (t) {
                  r("FBLogger")("relay_ads_manager").warn(
                    "[%s] Received GraphQL error: %s",
                    "universal_composer_suggest",
                    t.description,
                  );
                },
                bootstrapRequests: [
                  {
                    gen: function (t) {
                      return d(t);
                    },
                  },
                ],
                queryRequests: [
                  {
                    gen: function (t) {
                      return d(t);
                    },
                  },
                ],
                getAllForEmptyQuery: !0,
                indexFn: o("AdsUniversalComposerSuggestSearchSourceUtils")
                  .getEntrySourceQuery,
                matchFn: o("AdsUniversalComposerSuggestSearchSourceUtils")
                  .isEntryForCurrentQuery,
                packageFn: o("AdsUniversalComposerSuggestSearchSourceUtils")
                  .packageSuggestion,
              },
              function (e, n) {
                return m(e, n, t);
              },
            ) || this),
          (n.$AdsUniversalComposerSuggestSearchSource$p_1 = t),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.searchImpl = function (n, r, a) {
          var t = o("AdsUniversalComposerDimensionRegistry").getRetrievalKey(n),
            i = u.get(t),
            l =
              i != null
                ? i
                : o(
                    "AdsUniversalComposerSuggestSearchSourceUtils",
                  ).findExtendedAnchorRows(u, t);
          if (l != null) {
            var s = o("AdsUniversalComposerSuggestSearchSourceUtils")
              .buildTypeaheadEntries(
                o(
                  "AdsUniversalComposerSuggestSearchSourceUtils",
                ).dropBetaOnlyRows(
                  l,
                  this.$AdsUniversalComposerSuggestSearchSource$p_1,
                ),
                o("AdsUniversalComposerSuggestSearchSourceUtils")
                  .packageSuggestion,
                n,
              )
              .filter(Boolean);
            this.getCallbackManager().addQueryEntries(
              s,
              n,
              i != null
                ? o("SearchSourceQueryStatus").COMPLETE
                : o("SearchSourceQueryStatus").ACTIVE,
            );
          }
          return e.prototype.searchImpl.call(this, n, r, a);
        }),
        t
      );
    })(r("AbstractRelaySearchSource"));
    l.default = p;
  },
  98,
);
