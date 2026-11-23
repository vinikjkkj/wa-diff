__d(
  "MAIBAR23WorkspaceAdSpecFormatters",
  [
    "fbt",
    "AdsAPIBidStrategies",
    "AdsBidStrategyV3Strings",
    "AdsCurrencyFormatter",
    "LocalDateTime",
    "Timezone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    o("Timezone").registerDefaultNamesAndRulesModules();
    function e(e, t, n) {
      if (e == null) return null;
      if (t != null && t > 0) {
        var r = o("AdsCurrencyFormatter").formatCurrencyWithNumberDelimiters(
          e,
          t,
        );
        return s._(/*BTDS*/ "", [s._param("amount", r)]).toString();
      }
      if (n != null && n > 0) {
        var a = o("AdsCurrencyFormatter").formatCurrencyWithNumberDelimiters(
          e,
          n,
        );
        return s._(/*BTDS*/ "", [s._param("amount", a)]).toString();
      }
      return null;
    }
    function u(e, t, n) {
      return e == null
        ? null
        : t != null && t > 0
          ? s
              ._(/*BTDS*/ "", [
                s._param(
                  "amount",
                  o("AdsCurrencyFormatter").formatCurrencyWithNumberDelimiters(
                    e,
                    t,
                  ),
                ),
              ])
              .toString()
          : n != null && n > 0
            ? s
                ._(/*BTDS*/ "", [
                  s._param(
                    "amount",
                    o(
                      "AdsCurrencyFormatter",
                    ).formatCurrencyWithNumberDelimiters(e, n),
                  ),
                ])
                .toString()
            : null;
    }
    function c(e) {
      return e == null
        ? null
        : e === r("AdsAPIBidStrategies").NONE
          ? r("AdsAPIBidStrategies").NONE
          : e === r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP
            ? r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP
            : e === r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP
              ? r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP
              : e === r("AdsAPIBidStrategies").TARGET_COST
                ? r("AdsAPIBidStrategies").TARGET_COST
                : e === r("AdsAPIBidStrategies").COST_CAP
                  ? r("AdsAPIBidStrategies").COST_CAP
                  : e === r("AdsAPIBidStrategies").MAXIMIZE_VALUE
                    ? r("AdsAPIBidStrategies").MAXIMIZE_VALUE
                    : e === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
                      ? r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
                      : null;
    }
    function d(e) {
      var t = c(e);
      if (t == null) return null;
      var n = String(
        o("AdsBidStrategyV3Strings").getBidStrategyLabelForBidRenamingGK(t),
      );
      return n !== "" ? n : null;
    }
    function m(e, t) {
      return e == null || t == null || t <= 0
        ? null
        : o("AdsCurrencyFormatter").formatCurrencyWithNumberDelimiters(e, t);
    }
    function p(e) {
      if (e == null || e.length === 0) return null;
      var t = e[0];
      return t.max_frequency == null || t.interval_days == null
        ? null
        : s
            ._(/*BTDS*/ "", [
              s._param("max", String(t.max_frequency)),
              s._param("days", String(t.interval_days)),
            ])
            .toString();
    }
    var _ = 86400,
      f = 3600;
    function g(e, t) {
      var n = t - e,
        r = Math.floor(n / _),
        o = Math.floor(n / f) - r * 24;
      return Math.max(r + (o > 0 ? 1 : 0), 1);
    }
    function h(e, t) {
      var n,
        a =
          (n = t != null ? t : o("Timezone").getEnvironmentTimezoneID()) != null
            ? n
            : o("Timezone").UTC;
      return r("LocalDateTime")
        .fromInstant(e, a)
        .format("M j", { skipPatternLocalization: !0 });
    }
    function y(e, t) {
      var n,
        a =
          (n = t != null ? t : o("Timezone").getEnvironmentTimezoneID()) != null
            ? n
            : o("Timezone").UTC;
      return r("LocalDateTime")
        .fromInstant(e, a)
        .format("M j, Y", { skipPatternLocalization: !0 });
    }
    function C(e, t) {
      return e != null && e > 0 ? y(e, t) : null;
    }
    function b(e, t, n) {
      if (e != null && e > 0 && t != null && t > 0) {
        var r = g(e, t);
        return s
          ._(/*BTDS*/ "", [
            s._plural(r, "number"),
            s._param("start", y(e, n)),
            s._param("end", y(t, n)),
          ])
          .toString();
      }
      return e != null && e > 0
        ? s._(/*BTDS*/ "", [s._param("start", h(e, n))]).toString()
        : t != null && t > 0
          ? s._(/*BTDS*/ "", [s._param("end", h(t, n))]).toString()
          : null;
    }
    function v(e) {
      var t = d(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [s._param("strategy", t)]).toString();
    }
    function S(e, t) {
      var n = m(e, t);
      return n == null
        ? null
        : s._(/*BTDS*/ "", [s._param("amount", n)]).toString();
    }
    function R(e) {
      var t = p(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [s._param("cap", t)]).toString();
    }
    ((l.formatMAIBAR23Budget = e),
      (l.formatMAIBAR23BudgetSummaryValue = u),
      (l.formatMAIBAR23BidStrategy = d),
      (l.formatMAIBAR23BidAmount = m),
      (l.formatMAIBAR23FrequencyControl = p),
      (l.formatMAIBAR23ScheduleDate = C),
      (l.formatMAIBAR23ScheduleBullet = b),
      (l.formatMAIBAR23BidStrategyBullet = v),
      (l.formatMAIBAR23BidAmountBullet = S),
      (l.formatMAIBAR23FrequencyCapBullet = R));
  },
  226,
);
