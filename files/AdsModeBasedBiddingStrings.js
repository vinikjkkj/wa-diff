__d(
  "AdsModeBasedBiddingStrings",
  [
    "fbt",
    "AdsAPIBidStrategies",
    "AdsBulkValueUtils",
    "AdsLearnMore.react",
    "AdsVolumeROASUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === 1
        ? s._(/*BTDS*/ "Volume")
        : e === 2
          ? s._(/*BTDS*/ "Balanced")
          : e === 3
            ? s._(/*BTDS*/ "Cost control")
            : s._(/*BTDS*/ "Balanced");
    }
    function d(e, t) {
      var n = t === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS;
      return e === 1
        ? n
          ? s._(
              /*BTDS*/ "You may get 20\u0025 more conversion value. ROAS may vary 20-30\u0025 from goal.",
            )
          : s._(
              /*BTDS*/ "You may get 20\u0025 more conversions. Cost may vary 20-30\u0025 from goal.",
            )
        : e === 2
          ? s._(
              /*BTDS*/ "Balance efficiency and scale, adapting automatically as conditions change.",
            )
          : e === 3
            ? n
              ? s._(
                  /*BTDS*/ "Return will likely stay within 10\u0025 of your goal, but you may get fewer conversions.",
                )
              : s._(
                  /*BTDS*/ "Cost will likely stay within 10\u0025 of your goal, but you may get fewer conversions.",
                )
            : s._(
                /*BTDS*/ "Balance efficiency and scale, adapting automatically as conditions change.",
              );
    }
    function m(e) {
      return s._(
        /*BTDS*/ "Your average cost per result will be around {formatted cost cap value}.",
        [s._param("formatted cost cap value", e)],
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return s._(
        /*BTDS*/ "Your average ROAS will be around {formatted ROAS value}.",
        [s._param("formatted ROAS value", e)],
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "Choose what to prioritize:");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return e === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
        ? s._(/*BTDS*/ "Conversion value")
        : s._(/*BTDS*/ "Volume");
    }
    function g(e) {
      return e === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
        ? s._(
            /*BTDS*/ "Potential volume estimates are based on your past performance, campaign settings and market conditions, and assume your campaign finishes its learning period and runs for a few weeks on the same settings.",
          )
        : s._(
            /*BTDS*/ "Results may depend on past performance, campaign settings, and market conditions.",
          );
    }
    function h(e) {
      return e === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
        ? s._(/*BTDS*/ "ROAS flexibility")
        : s._(/*BTDS*/ "Cost");
    }
    function y(e) {
      return e === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
        ? s._(
            /*BTDS*/ "Your actual ROAS may vary from your goal. ROAS adherence is calculated on a weekly basis.",
          )
        : s._(
            /*BTDS*/ "Your actual cost per result may vary from your goal. Cost is calculated on a weekly basis. {linebreak}{linebreak} Both estimates assume your campaign has finished its learning period and may take a few weeks to stabilize.",
            [s._param("linebreak", u.jsx("br", {}))],
          );
    }
    function C() {
      return s._(/*BTDS*/ "How we estimate volume and cost");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return e === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
        ? s._(
            /*BTDS*/ "Priority can't be updated after a campaign is published. You can still edit your ROAS goal.",
          )
        : s._(
            /*BTDS*/ "Priority can't be updated after a campaign is published. You can still edit your cost per result goal amount.",
          );
    }
    function v(e) {
      if (o("AdsBulkValueUtils").isMixedValue(e)) return k();
      var t = o("AdsBulkValueUtils").getUniformValue(e);
      return t == null || t === "NONE"
        ? null
        : t === "VOLUME_FOCUSED"
          ? s._(/*BTDS*/ "Prioritize volume")
          : t === "BALANCED"
            ? s._(/*BTDS*/ "Prioritize balance")
            : t === "COST_FOCUSED"
              ? s._(/*BTDS*/ "Prioritize cost control")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function S(e, t) {
      return t == null
        ? e
        : s._(/*BTDS*/ "{value} ({bidding mode label})", [
            s._param("value", e),
            s._param("bidding mode label", t),
          ]);
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e, t) {
      return t == null
        ? e
        : s._(/*BTDS*/ "{bid strategy}: {value}", [
            s._param("bid strategy", t),
            s._param("value", e),
          ]);
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      var e = u.jsx("strong", {
          children: s._(/*BTDS*/ "Cost per result goal"),
        }),
        t = u.jsx("strong", { children: s._(/*BTDS*/ "ROAS goal") }),
        n = u.jsx(r("AdsLearnMore.react"), {
          cmsID: "1619591734742116",
          isStandalone: !0,
          label: s._(/*BTDS*/ "About bid strategies"),
        });
      if (o("AdsVolumeROASUtils").isVolumeROASEnabled()) {
        var a = u.jsx("strong", { children: s._(/*BTDS*/ "Highest volume") });
        return s._(
          /*BTDS*/ "Aim for the most conversions within your budget with {highest volume}, or target a specific cost or return with {cost per result goal} or {roas goal}. {learn more link}",
          [
            s._param("highest volume", a),
            s._param("cost per result goal", e),
            s._param("roas goal", t),
            s._param("learn more link", n),
          ],
        );
      }
      return s._(
        /*BTDS*/ "Choose {cost per result goal} to control spend per conversion, {roas goal} to target return on ad spend. Leave blank to maximize conversion volume. {learn more link}",
        [
          s._param("cost per result goal", e),
          s._param("roas goal", t),
          s._param("learn more link", n),
        ],
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "Bidding goals");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "Mixed priorities");
    }
    ((k.displayName = k.name + " [from " + i.id + "]"),
      (l.getModeTitle = c),
      (l.getModeDescription = d),
      (l.getCostCapModeExpectationMessage = m),
      (l.getROASModeExpectationMessage = p),
      (l.getModeSelectorPromptLabel = _),
      (l.getModeTooltipConversionsTitle = f),
      (l.getModeTooltipConversionsBody = g),
      (l.getModeTooltipCostTitle = h),
      (l.getModeTooltipCostBody = y),
      (l.getModeSectionHelpText = C),
      (l.getLockedAfterPublishTooltipText = b),
      (l.getModePGDLabel = v),
      (l.formatWithModeLabel = S),
      (l.formatWithBidStrategyPrefix = R),
      (l.getBiddingGoalsHelpText = L),
      (l.getBiddingGoalsLabel = E));
  },
  226,
);
