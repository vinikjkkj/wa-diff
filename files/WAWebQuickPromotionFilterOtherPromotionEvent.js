__d(
  "WAWebQuickPromotionFilterOtherPromotionEvent",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionCollection",
    "WAWebQuickPromotionValidatorUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(t, n) {
      var a = o(
          "WAWebQuickPromotionValidatorUtils",
        ).convertFilterParametersIntoMap(n),
        i = a.get("event");
      if (i == null)
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  'otherPromotionEventFilter: missing "event"',
                ])),
            )
            .sendLogs("quick-promotion-filter-missing-parameter"),
          r("err")('otherPromotionEventFilter: missing "event"')
        );
      var l = f(i);
      if (l == null)
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "otherPromotionEventFilter: unknown event",
                ])),
            )
            .sendLogs("quick-promotion-filter-parameter-incorrect"),
          r("err")("otherPromotionEventFilter: unknown event")
        );
      var _ = a.get("promo_id");
      if (_ == null)
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  'otherPromotionEventFilter: missing "promo_id"',
                ])),
            )
            .sendLogs("quick-promotion-filter-missing-parameter"),
          r("err")('otherPromotionEventFilter: missing "promo_id"')
        );
      var C = a.get("metric");
      if (C == null)
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  'otherPromotionEventFilter: missing "metric"',
                ])),
            )
            .sendLogs("quick-promotion-filter-missing-parameter"),
          r("err")('otherPromotionEventFilter: missing "metric"')
        );
      var b = a.get("nux_id");
      if (b == null)
        throw (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  'otherPromotionEventFilter: missing "nux_id"',
                ])),
            )
            .sendLogs("quick-promotion-filter-missing-parameter"),
          r("err")('otherPromotionEventFilter: missing "nux_id"')
        );
      var v = parseInt(a.get("event_count"), 10);
      if (Number.isNaN(v))
        throw (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  'otherPromotionEventFilter: missing "event_count"',
                ])),
            )
            .sendLogs("quick-promotion-filter-missing-parameter"),
          r("err")('otherPromotionEventFilter: missing "event_count"')
        );
      if (t.id === _ && l === "impression") {
        var S,
          R = (S = t.tracking.lastImpressionTs) != null ? S : t.ts,
          L = o(
            "WAWebQuickPromotionValidatorUtils",
          ).checkIsWithinEligibilityWindow(
            R,
            t.data.qpConfigEligibilityDurationMs,
          );
        if (L) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      }
      var E = g(C);
      if (E == null)
        throw (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "otherPromotionEventFilter: unknown metric",
                ])),
            )
            .sendLogs("quick-promotion-filter-parameter-incorrect"),
          r("err")("otherPromotionEventFilter: unknown metric")
        );
      var k = o("WAWebQuickPromotionCollection").QuickPromotionCollection.get(
          _,
        ),
        I =
          k != null
            ? h(l, k.promotion.tracking)
            : { count: 0, lastOccurrenceTs: null },
        T = I.count,
        D = I.lastOccurrenceTs;
      if (E === "count_at_most" || E === "count_at_least")
        return y(E === "count_at_most" ? T <= v : T >= v);
      if (E === "seconds_since_greater_than") {
        if (D == null) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        var x = o("WATimeUtils").futureUnixTime(v, D);
        return y(!o("WATimeUtils").isInFuture(x));
      }
      if (D == null)
        return o("WAWebCommonQPSurfacesTypes")
          .RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT;
      var $ = o("WATimeUtils").futureUnixTime(v, D);
      return y(
        $ === o("WATimeUtils").unixTime() || o("WATimeUtils").isInFuture($),
      );
    }
    function f(e) {
      switch (e) {
        case "impression":
        case "primary_action":
        case "dismiss_action":
          return e;
        default:
          return null;
      }
    }
    function g(e) {
      switch (e) {
        case "count_at_most":
        case "count_at_least":
        case "seconds_since_greater_than":
        case "seconds_since_less_than":
          return e;
        default:
          return null;
      }
    }
    function h(e, t) {
      switch (e) {
        case "impression":
          return { count: t.impressions, lastOccurrenceTs: t.lastImpressionTs };
        case "primary_action":
          return {
            count: t.primaryClicks,
            lastOccurrenceTs: t.lastPrimaryClickTs,
          };
        default:
          return { count: t.dismisses, lastOccurrenceTs: t.lastDismissTs };
      }
    }
    function y(e) {
      return e
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT;
    }
    var C = { name: "other_promotion_event", filter: _ };
    l.otherPromotionEventFilter = C;
  },
  98,
);
