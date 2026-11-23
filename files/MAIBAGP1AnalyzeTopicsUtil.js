__d(
  "MAIBAGP1AnalyzeTopicsUtil",
  ["fbt", "$InternalEnum", "AdsMgmtAdObjectLevelTransformUtils", "qex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u() {
      var e = r("qex")._("5112");
      return e === "split_button_variant" || e === "dropdown_button_variant";
    }
    function c() {
      return r("qex")._("5112") === "split_button_variant";
    }
    var d = n("$InternalEnum").Mirrored([
      "PERFORMANCE_SUMMARY",
      "CREATIVE_ENGAGEMENT",
      "INDUSTRY_BENCHMARK",
      "TOP_AND_BOTTOM_PERFORMERS",
      "AUDIENCE",
      "OPTIMIZE_BUDGET",
    ]);
    function m(e) {
      return Object.fromEntries(
        e.map(function (e) {
          return [e, f(e)];
        }),
      );
    }
    function p(e, t, n) {
      return (function (e) {
        return e === "campaign"
          ? t
            ? [].concat(n ? [d.PERFORMANCE_SUMMARY] : [], [
                d.CREATIVE_ENGAGEMENT,
                d.INDUSTRY_BENCHMARK,
                d.OPTIMIZE_BUDGET,
                d.AUDIENCE,
              ])
            : [
                d.PERFORMANCE_SUMMARY,
                d.CREATIVE_ENGAGEMENT,
                d.INDUSTRY_BENCHMARK,
                d.OPTIMIZE_BUDGET,
              ]
          : e === "ad_set"
            ? t
              ? [].concat(n ? [d.PERFORMANCE_SUMMARY] : [], [
                  d.CREATIVE_ENGAGEMENT,
                  d.INDUSTRY_BENCHMARK,
                  d.AUDIENCE,
                ])
              : [
                  d.PERFORMANCE_SUMMARY,
                  d.CREATIVE_ENGAGEMENT,
                  d.INDUSTRY_BENCHMARK,
                  d.AUDIENCE,
                ]
            : t
              ? [].concat(n ? [d.PERFORMANCE_SUMMARY] : [], [
                  d.CREATIVE_ENGAGEMENT,
                  d.INDUSTRY_BENCHMARK,
                  d.AUDIENCE,
                ])
              : [
                  d.PERFORMANCE_SUMMARY,
                  d.CREATIVE_ENGAGEMENT,
                  d.INDUSTRY_BENCHMARK,
                  d.AUDIENCE,
                ];
      })(
        o("AdsMgmtAdObjectLevelTransformUtils").transformAdObjectLevelToType(e),
      );
    }
    function _(e, t, n, r) {
      if ((r === void 0 && (r = !1), t === 0)) {
        var o = [
          d.PERFORMANCE_SUMMARY,
          d.CREATIVE_ENGAGEMENT,
          d.INDUSTRY_BENCHMARK,
          d.TOP_AND_BOTTOM_PERFORMERS,
        ];
        return (
          n &&
            (r || o.splice(o.indexOf(d.PERFORMANCE_SUMMARY), 1),
            o.push(d.AUDIENCE)),
          m(o)
        );
      }
      return m(p(e, n, r));
    }
    function f(e) {
      var t = c();
      return e === d.PERFORMANCE_SUMMARY
        ? t
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "")
        : e === d.CREATIVE_ENGAGEMENT
          ? t
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : e === d.INDUSTRY_BENCHMARK
            ? t
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")
            : e === d.TOP_AND_BOTTOM_PERFORMERS
              ? t
                ? s._(/*BTDS*/ "")
                : s._(/*BTDS*/ "")
              : e === d.AUDIENCE
                ? t
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ "")
                : e === d.OPTIMIZE_BUDGET
                  ? t
                    ? s._(/*BTDS*/ "")
                    : s._(/*BTDS*/ "")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    var g =
      ((e = {}),
      (e[d.PERFORMANCE_SUMMARY] = "gp1_analyze_entrypoint_performance_summary"),
      (e[d.CREATIVE_ENGAGEMENT] = "gp1_analyze_entrypoint_creative_engagement"),
      (e[d.INDUSTRY_BENCHMARK] = "gp1_analyze_entrypoint_industry_benchmark"),
      (e[d.TOP_AND_BOTTOM_PERFORMERS] =
        "gp1_analyze_entrypoint_top_and_bottom_performers"),
      (e[d.AUDIENCE] = "gp1_analyze_entrypoint_audience"),
      (e[d.OPTIMIZE_BUDGET] = "gp1_analyze_entrypoint_optimize_budget"),
      e);
    function h(e, t) {
      if (t) return "gp1_analyze_entrypoint_custom_prompt";
      if (e != null) {
        var n;
        return (n = g[e]) != null ? n : "gp1_analyze_entrypoint";
      }
      return "gp1_analyze_entrypoint";
    }
    var y = "scorecard_weekly_report",
      C = s._(/*BTDS*/ "");
    function b(e, t, n) {
      if (e === y) return C;
      var r = [
        "gp1_analyze_entrypoint_performance_summary",
        "gp1_analyze_entrypoint",
      ];
      return r.includes(e) && n != null ? n : t;
    }
    function v(e) {
      e === void 0 && (e = !1);
      var t = e ? r("qex")._("4588") : r("qex")._("5243");
      return (
        t === "inline_buttons" || t === "inline_buttons_with_analyze_split"
      );
    }
    function S() {
      return r("qex")._("5243") === "inline_buttons_with_analyze_split";
    }
    function R(e, t, n) {
      var r, o;
      return {
        prompt:
          t != null && t !== ""
            ? t
            : (r = n == null ? void 0 : n.prompt) != null
              ? r
              : "",
        promptCategory:
          (o = n == null ? void 0 : n.promptCategory) != null ? o : "",
        promptHighRetentionTopic: e != null ? e : t != null ? "custom" : "",
      };
    }
    function L(e) {
      if (e === "AD_OBJECT_HOVER") {
        var t;
        return JSON.stringify({
          split_button_variant:
            (t = r("qex")._("5243")) != null ? t : "control",
        });
      }
      return JSON.stringify({
        split_button_variant: u()
          ? c()
            ? "split_button"
            : "dropdown_button"
          : "control",
      });
    }
    function E(e, t) {
      var n = o("AdsMgmtAdObjectLevelTransformUtils")
        .transformAdObjectLevelToType(t)
        .replace("_", " ");
      return e === d.PERFORMANCE_SUMMARY
        ? null
        : e === d.CREATIVE_ENGAGEMENT
          ? s._(/*BTDS*/ "", [s._param("ad-object-level", n)])
          : e === d.INDUSTRY_BENCHMARK
            ? s._(/*BTDS*/ "", [s._param("ad-object-level", n)])
            : e === d.TOP_AND_BOTTOM_PERFORMERS
              ? s._(/*BTDS*/ "", [s._param("ad-object-level", n)])
              : e === d.AUDIENCE
                ? s._(/*BTDS*/ "", [s._param("ad-object-level", n)])
                : e === d.OPTIMIZE_BUDGET
                  ? s._(/*BTDS*/ "")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    ((l.showAnalyzeTopicsAtActionBar = u),
      (l.showMAIBASplitButtonUIAmongAnalyzeTopics = c),
      (l.MAIBAAnalyzeTopicsEnum = d),
      (l.getMAIBAAnalyzeTopicsMap = _),
      (l.getAnalyzeTopicPromptID = h),
      (l.SCORECARD_WEEKLY_REPORT_ID = y),
      (l.SCORECARD_WEEKLY_REPORT_USER_MESSAGE = C),
      (l.getFinalPrompt = b),
      (l.showInlineButtonsAtAdHoverBar = v),
      (l.showAnalyzeSplitButtonAtAdHoverBar = S),
      (l.getAnalyzeTopicChatOverrides = R),
      (l.getAnalyzeTopicsExperimentConfig = L),
      (l.getMAIBAPromptForTopic = E));
  },
  226,
);
