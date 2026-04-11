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
      var y = a.get("metric");
      if (y == null)
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
      var C = a.get("nux_id");
      if (C == null)
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
      var b = parseInt(a.get("event_count"), 10);
      if (Number.isNaN(b))
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
        var v,
          S = (v = t.tracking.lastImpressionTs) != null ? v : t.ts,
          R = o(
            "WAWebQuickPromotionValidatorUtils",
          ).checkIsWithinEligibilityWindow(
            S,
            t.data.qpConfigEligibilityDurationMs,
          );
        if (R) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      }
      var L = g(y);
      if (L == null)
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
      var E = o("WAWebQuickPromotionCollection").QuickPromotionCollection.get(
        _,
      );
      if (L === "count_at_most" || L === "count_at_least") {
        var k;
        if (E != null)
          switch (l) {
            case "impression":
              k = E.promotion.tracking.impressions;
              break;
            case "primary_action":
              k = E.promotion.tracking.primaryClicks;
              break;
            default:
              k = E.promotion.tracking.dismisses;
          }
        else k = 0;
        return h(L === "count_at_most" ? k <= b : k >= b);
      }
      var I;
      switch (l) {
        case "impression":
          I = E == null ? void 0 : E.promotion.tracking.lastImpressionTs;
          break;
        case "primary_action":
          I = E == null ? void 0 : E.promotion.tracking.lastPrimaryClickTs;
          break;
        default:
          I = E == null ? void 0 : E.promotion.tracking.lastDismissTs;
      }
      if (L === "seconds_since_greater_than") {
        if (I == null) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        var T = o("WATimeUtils").futureUnixTime(b, I);
        return h(!o("WATimeUtils").isInFuture(T));
      }
      if (I == null)
        return o("WAWebCommonQPSurfacesTypes")
          .RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT;
      var D = o("WATimeUtils").futureUnixTime(b, I);
      return h(
        D === o("WATimeUtils").unixTime() || o("WATimeUtils").isInFuture(D),
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
    function h(e) {
      return e
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT;
    }
    var y = { name: "other_promotion_event", filter: _ };
    l.otherPromotionEventFilter = y;
  },
  98,
);
