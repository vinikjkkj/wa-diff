__d(
  "MAIBAContextAtMentionSearchSource",
  [
    "AbstractSearchSource",
    "AdsQuickCreateMAIBAContextAssetList.react",
    "MAIBAContextAssetTypes",
    "MAIBAContextTabRow.react",
    "SearchableEntry",
    "clearTimeout",
    "rankMAIBAContextSuggestions",
    "setTimeout",
    "useMAIBAContextAssetSearch",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30,
      s =
        o("rankMAIBAContextSuggestions").MAIBA_CONTEXT_SUGGESTION_LIMIT +
        (o("MAIBAContextAssetTypes").MAIBA_CONTEXT_PICKER_TAB_ORDER.length +
          1) *
          o("MAIBAContextAssetTypes").MAIBA_CONTEXT_FIRST_PAGE_SIZE,
      u = { attachedEntityIDs: [], promptValue: "" };
    function c(e, t) {
      var n = o(
        "AdsQuickCreateMAIBAContextAssetList.react",
      ).getMAIBAContextRowItemID(e);
      return new (r("SearchableEntry"))({
        auxiliaryData: { contextAsset: e, section: t },
        title: e.name,
        uniqueID: t === "browse" ? "browse:" + n : n,
      });
    }
    function d(t, n, r) {
      return o("rankMAIBAContextSuggestions")
        .rankMAIBAContextSearchResults(t, n, { includeUnmatched: r })
        .slice(
          0,
          Math.min(
            o("useMAIBAContextAssetSearch").MAIBA_CONTEXT_SEARCH_RESULTS_MAX,
            e,
          ),
        );
    }
    var m = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$MAIBAContextAtMentionSearchSource$p_3 = u),
          (n.$MAIBAContextAtMentionSearchSource$p_5 = null),
          (n.$MAIBAContextAtMentionSearchSource$p_6 = null),
          (n.$MAIBAContextAtMentionSearchSource$p_1 = t.assets),
          (n.$MAIBAContextAtMentionSearchSource$p_2 = t.formItems),
          (n.$MAIBAContextAtMentionSearchSource$p_4 = t.localPool),
          (n.$MAIBAContextAtMentionSearchSource$p_7 = t.remoteSource),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setContext = function (t) {
          this.$MAIBAContextAtMentionSearchSource$p_3 = t;
        }),
        (n.setNoResultsHandler = function (t) {
          this.$MAIBAContextAtMentionSearchSource$p_5 = t;
        }),
        (n.cancelPendingSearch = function () {
          this.$MAIBAContextAtMentionSearchSource$p_6 != null &&
            (r("clearTimeout")(this.$MAIBAContextAtMentionSearchSource$p_6),
            (this.$MAIBAContextAtMentionSearchSource$p_6 = null));
        }),
        (n.searchImpl = function (t, n) {
          var e = this;
          this.cancelPendingSearch();
          var a = this.$MAIBAContextAtMentionSearchSource$p_1;
          if (a == null) {
            n([], t, "COMPLETE");
            return;
          }
          var i = this.$MAIBAContextAtMentionSearchSource$p_3,
            l = i.attachedEntityIDs,
            s = i.promptValue;
          if (t.trim() === "") {
            var u = [].concat(
                o("MAIBAContextAssetTypes").MAIBA_CONTEXT_TAB_ORDER.flatMap(
                  function (e) {
                    return a.firstPageByTab[e];
                  },
                ),
                this.$MAIBAContextAtMentionSearchSource$p_2,
              ),
              m = o("rankMAIBAContextSuggestions").rankMAIBAContextSuggestions(
                s,
                u,
                l,
              ),
              p = this.$MAIBAContextAtMentionSearchSource$p_2,
              _ = o(
                "MAIBAContextAssetTypes",
              ).MAIBA_CONTEXT_PICKER_TAB_ORDER.flatMap(function (e) {
                return o(
                  "MAIBAContextTabRow.react",
                ).getMAIBAContextBrowseTabRows(a, p, e);
              });
            n(
              [].concat(
                m.map(function (e) {
                  return c(e, "suggestion");
                }),
                _.map(function (e) {
                  return c(e, "browse");
                }),
              ),
              t,
              "COMPLETE",
            );
            return;
          }
          var f = t.trim(),
            g = d(f, this.$MAIBAContextAtMentionSearchSource$p_4, !1),
            h = function (o, a) {
              (n(
                o.map(function (e) {
                  return c(e, "result");
                }),
                t,
                a,
              ),
                a === "COMPLETE" &&
                  o.length === 0 &&
                  (e.$MAIBAContextAtMentionSearchSource$p_5 == null ||
                    e.$MAIBAContextAtMentionSearchSource$p_5(t)));
            },
            y = this.$MAIBAContextAtMentionSearchSource$p_7;
          if (y == null) {
            h(g, "COMPLETE");
            return;
          }
          (h(g, "ACTIVE"),
            (this.$MAIBAContextAtMentionSearchSource$p_6 = r("setTimeout")(
              function () {
                e.$MAIBAContextAtMentionSearchSource$p_6 = null;
                try {
                  y.search(t, function (e, t, n) {
                    try {
                      var r = [];
                      for (var a of e) {
                        var i = o(
                          "useMAIBAContextAssetSearch",
                        ).searchableEntryToContextAsset(a);
                        i != null && r.push(i);
                      }
                      h(d(f, [].concat(g, r), !0), n != null ? n : "COMPLETE");
                    } catch (e) {
                      h(g, "COMPLETE");
                    }
                  });
                } catch (e) {
                  h(g, "COMPLETE");
                }
              },
              o("useMAIBAContextAssetSearch")
                .MAIBA_CONTEXT_SERVER_SEARCH_DEBOUNCE_MS,
            )));
        }),
        t
      );
    })(r("AbstractSearchSource"));
    ((l.MAIBA_CONTEXT_AT_MENTION_OPTIONS_MAX = s),
      (l.MAIBAContextAtMentionSearchSource = m));
  },
  98,
);
