__d(
  "MAIBAContextChipsLoggingUtils",
  [
    "MAIBAComposerContextChipTypes",
    "MAIBAContextAssetTypes",
    "MAIBAR23ExperimentUtils",
    "MAIBAR23LoggingUtils",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("MAIBAContextAssetTypes").MAIBA_CONTEXT_TAB_ORDER.filter(
        function (e) {
          return e !== "forms";
        },
      ),
      u = ["audiences", "campaigns"];
    function c(e) {
      return JSON.stringify(
        babelHelpers.extends({}, e, {
          has_context_chips: o("MAIBAR23ExperimentUtils").isE2EContextChipsTest(
            { logExposure: !1 },
          ),
          has_prompt_builder: o(
            "MAIBAR23ExperimentUtils",
          ).isE2EPromptBuilderTest({ logExposure: !1 }),
        }),
      );
    }
    var d = new Map(),
      m = 0;
    function p(e) {
      var t = d.get(e);
      return (
        t == null &&
          ((t = {
            load: null,
            loggedTimingBySource: new Map(),
            openedAt: null,
          }),
          d.set(e, t)),
        t
      );
    }
    function _(e) {
      d.delete(e);
    }
    function f(t, n) {
      var o = p(t),
        a = (e || (e = r("performanceNow")))();
      return (
        (m += 1),
        (o.load = {
          isFromCache: n === "retry" ? !1 : null,
          settledAt: null,
          startedAt: a,
          token: m,
          trigger: n,
        }),
        n === "retry" && (o.openedAt = a),
        o.loggedTimingBySource.clear(),
        m
      );
    }
    function g(t, n, o) {
      var a,
        i = (a = d.get(t)) == null ? void 0 : a.load;
      i == null ||
        i.token !== n ||
        i.settledAt != null ||
        ((i.settledAt = o ? i.startedAt : (e || (e = r("performanceNow")))()),
        (i.isFromCache = o));
    }
    function h(t) {
      var n,
        o = (n = d.get(t)) == null ? void 0 : n.load;
      o == null ||
        o.trigger !== "retry" ||
        o.settledAt != null ||
        (o.settledAt = (e || (e = r("performanceNow")))());
    }
    function y(t, n) {
      var o,
        a,
        i,
        l = p(t),
        s = l.loggedTimingBySource.get(n);
      if (s != null) return s;
      var u = l.load,
        c = l.openedAt,
        d =
          (o = u == null ? void 0 : u.settledAt) != null
            ? o
            : (e || (e = r("performanceNow")))(),
        m = c == null || u == null ? c : Math.max(c, u.startedAt),
        _ = {
          is_from_cache:
            (a = u == null ? void 0 : u.isFromCache) != null ? a : null,
          load_ms: u == null ? null : Math.round(d - u.startedAt),
          load_trigger: (i = u == null ? void 0 : u.trigger) != null ? i : null,
          wait_ms: m == null ? null : Math.max(0, Math.round(d - m)),
        };
      return (l.loggedTimingBySource.set(n, _), _);
    }
    function C(e) {
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({ composer_id: e }),
        event: "e2e_context_chips_composer_shown",
        logOnce: !0,
        source: "composer",
      });
    }
    function b(e) {
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({ composer_id: e }),
        event: "e2e_context_chips_pill_shown",
        logOnce: !0,
        source: "composer",
      });
    }
    function v(t, n, a) {
      ((p(t).openedAt = (e || (e = r("performanceNow")))()),
        o("MAIBAR23LoggingUtils").logMAIBAR23Event({
          data: c({ composer_id: t }),
          event: "e2e_context_chips_picker_opened",
          itemCount: a,
          source: n,
        }));
    }
    function S(e, t, n, r, a) {
      var i;
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({
          composer_id: e,
          has_query: a.query.trim() !== "",
          query_length: a.query.length,
          tab: (i = a.tab) != null ? i : null,
        }),
        event: "e2e_context_chips_chip_added",
        itemCount: r,
        selectedCategoryID: n.type,
        source: t,
      });
    }
    function R(e, t, n) {
      var r;
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({
          composer_id: e,
          origin: (r = t.origin) != null ? r : "user",
        }),
        event: "e2e_context_chips_chip_removed",
        itemCount: n,
        selectedCategoryID: t.entity_type,
        source: "composer",
      });
    }
    function L(e, t, n) {
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({ composer_id: e, tab: n != null ? n : null }),
        event: "e2e_context_chips_search_used",
        source: t,
      });
    }
    function E(e, t, n) {
      (n === void 0 && (n = "mention_context_pill"),
        o("MAIBAR23LoggingUtils").logMAIBAR23Event({
          data: c({ composer_id: e }),
          event: "e2e_context_chips_tab_selected",
          selectedCategoryID: t,
          source: n,
        }));
    }
    function k(e, t) {
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({ composer_id: e }),
        event: "e2e_context_chips_limit_hit",
        itemCount: o("MAIBAComposerContextChipTypes").MAIBA_CONTEXT_CHIPS_MAX,
        source: t,
      });
    }
    function I(e, t, n) {
      (n === "assets" && f(e, "retry"),
        o("MAIBAR23LoggingUtils").logMAIBAR23Event({
          data: c({ composer_id: e, stage: n }),
          event: "e2e_context_chips_retry_clicked",
          source: t,
        }));
    }
    function T(e, t, n) {
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({ composer_id: e, stage: n }),
        event: "e2e_context_chips_error_shown",
        source: t,
      });
    }
    function D(e, t, n) {
      var r = [].concat(
          n.searchPool,
          n.firstPageByTab.campaigns,
          n.firstPageByTab.audiences,
        ),
        a = Array.from(
          new Set(
            r.map(function (e) {
              return e.type;
            }),
          ),
        ).sort(),
        i = {};
      for (var l of s) i[l] = 0;
      for (var d of r) i[d.tab] != null && (i[d.tab] += 1);
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c(
          babelHelpers.extends(
            {
              capped_tabs: u,
              composer_id: e,
              counts_by_tab: i,
              first_page_size: o("MAIBAContextAssetTypes")
                .MAIBA_CONTEXT_FIRST_PAGE_SIZE,
              has_pages: n.hasPages,
              stage: "assets",
              types_available: a,
            },
            y(e, t),
          ),
        ),
        event: "e2e_context_chips_assets_loaded",
        itemCount: a.length,
        logOnce: !0,
        source: t,
      });
    }
    function x(e, t, n, r) {
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({ composer_id: e, forms_count: n, load_ms: r, stage: "forms" }),
        event: "e2e_context_chips_assets_loaded",
        logOnce: !0,
        source: t,
      });
    }
    function $(e, t) {
      var n = f(e, t);
      return (
        o("MAIBAR23LoggingUtils").logMAIBAR23Event({
          data: c({ composer_id: e }),
          event: "e2e_context_chips_preload_started",
          source: t,
        }),
        n
      );
    }
    function P(e) {
      var t = {};
      for (var n of e) {
        var r;
        t[n.entity_type] = ((r = t[n.entity_type]) != null ? r : 0) + 1;
      }
      return t;
    }
    function N(e, t, n, r, a) {
      var i = r.filter(function (e) {
          return e.origin === "prompt_builder";
        }),
        l = r.filter(function (e) {
          return e.origin !== "prompt_builder";
        });
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({
          arm: n,
          chip_types: P(l),
          composer_id: e,
          has_text_beyond_chips: a,
          pill_chip_count: i.length,
          pill_chip_types: P(i),
          total_chip_count: r.length,
          user_chip_count: l.length,
        }),
        conversationID: t,
        event: "e2e_context_chips_prompt_sent",
        itemCount: l.length,
        source: "composer",
      });
    }
    function M(e, t, n) {
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        data: c({
          category: t.category,
          chip_types: P(n.inserted),
          composer_id: e,
          inserted_chip_count: n.inserted.length,
          offered_chip_count: n.offeredCount,
          rejected_chip_count: n.rejected.length,
          rejected_chip_types: P(n.rejected),
          valid_chip_count: n.validCount,
        }),
        event: "e2e_prompt_builder_chips_inserted",
        itemCount: n.inserted.length,
        recommendationRank: t.displayedIndex,
        selectedCategoryID: t.category,
        source: "prompt_builder",
      });
    }
    ((l.clearMAIBAContextAssetsLoadState = _),
      (l.markMAIBAContextAssetsQuerySettled = g),
      (l.markMAIBAContextAssetsRetrySettled = h),
      (l.logMAIBAContextChipsComposerShown = C),
      (l.logMAIBAContextChipsPillShown = b),
      (l.logMAIBAContextChipsPickerOpened = v),
      (l.logMAIBAContextChipsChipAdded = S),
      (l.logMAIBAContextChipsChipRemoved = R),
      (l.logMAIBAContextChipsSearchUsed = L),
      (l.logMAIBAContextChipsTabSelected = E),
      (l.logMAIBAContextChipsLimitHit = k),
      (l.logMAIBAContextChipsRetryClicked = I),
      (l.logMAIBAContextChipsErrorShown = T),
      (l.logMAIBAContextChipsAssetsLoaded = D),
      (l.logMAIBAContextChipsFormsLoaded = x),
      (l.logMAIBAContextChipsPreloadStarted = $),
      (l.logMAIBAContextChipsPromptSent = N),
      (l.logMAIBAPromptBuilderChipsInserted = M));
  },
  98,
);
