__d(
  "AdsSABRZOCombinedBudgetGuidanceZOInlineGuidance",
  [
    "AdsClickToMessageBudgetGuidanceUtils",
    "AdsDFOBudgetGuidanceUtils",
    "AdsDFOSABRConstants",
    "AdsInterfacesLogger",
    "AdsWebToWhatsAppBudgetRecommendationUtils",
    "AdsWhatsAppStrings",
    "ClickToMessageCTMAdoptionFeatureGating",
    "WebToXFeatureGating",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return r("isFalsey")(e)
        ? !1
        : !!(
            (r("isFalsey")(t) && e > n) ||
            (r("isTruthy")(t) && e > t && n < t)
          );
    }
    function s(e, t, n, a) {
      if (r("isFalsey")(e) || r("isFalsey")(t)) return !1;
      var i = n
        ? o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceCreationPackagesQE(!0)
        : o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceQE(
            !0,
            "CTXCBOBudgetGuidance",
            "ZO Inline Guidance",
          );
      return i && a < e;
    }
    function u(t, n, a, i, l, u, c, d, m, p, _, f) {
      var g;
      if (!(d === "lifetime" || d === "daily")) return null;
      var h = o(
        "ClickToMessageCTMAdoptionFeatureGating",
      ).eligibleCTXAMSABRZOCombinedBudgetGuidance(n, a, l);
      if (!h) return null;
      var y = o(
          "AdsClickToMessageBudgetGuidanceUtils",
        ).getDurationFromStartTimeAndEndTime(m, p),
        C = null;
      r("isTruthy")(a) &&
        r("isTruthy")(u) &&
        (C = o(
          "AdsClickToMessageBudgetGuidanceUtils",
        ).getBudgetRecommendationByModeForZO(d, y, f, a, u, l));
      var b = o(
          "AdsClickToMessageBudgetGuidanceUtils",
        ).getBudgetRecommendationByModeForSABR(t, d, m, p, f),
        v = e(b, C, _);
      return s(C, i, c, _)
        ? (r("AdsInterfacesLogger").log({
            eventName: "ctx_budget_default_impression_understanding",
            data:
              ((g = {}),
              (g.page_id = u),
              (g.old_value = _),
              (g.new_value = b != null ? b : C),
              (g.campaign_destination_type = a),
              (g.optimization_goal = l),
              (g.message = d),
              g),
          }),
          v
            ? o("AdsWhatsAppStrings").getZoSabrBudgetWarningContent()
            : C != null
              ? o("AdsWhatsAppStrings").getBudgetWarningContent(C, f)
              : null)
        : null;
    }
    function c(e, t, n, a, i, l, s, u, c, d, m, p) {
      var _;
      if (!(l === "lifetime" || l === "daily")) return null;
      var f = o(
          "AdsWebToWhatsAppBudgetRecommendationUtils",
        ).checkEligibleForWTWAZOBudgetNonCBO(e, t, n, a),
        g = o(
          "AdsClickToMessageBudgetGuidanceUtils",
        ).getDurationFromStartTimeAndEndTime(s, u),
        h = o(
          "AdsWebToWhatsAppBudgetRecommendationUtils",
        ).getWTWAZOBudgetRecommendationForNonCBOByMode(
          e.account_id,
          l,
          g,
          d,
          n,
          i,
          a,
        ),
        y =
          (_ =
            l === "daily"
              ? o(
                  "AdsWebToWhatsAppBudgetRecommendationUtils",
                ).getWtwaSabrDailyBudgetForUGPNonCBO(
                  e.account_id,
                  i,
                  n,
                  a,
                  d,
                  p,
                )
              : o(
                  "AdsWebToWhatsAppBudgetRecommendationUtils",
                ).getWtwaSabrLifetimeBudgetForUGPNonCBO(
                  e.account_id,
                  i,
                  n,
                  a,
                  g,
                  d,
                  p,
                )) != null
            ? _
            : 0,
        C =
          r("isTruthy")(y) &&
          (r("isFalsey")(h) || (r("isTruthy")(h) && y > h)) &&
          c < y,
        b = C && o("WebToXFeatureGating").enableWTWASABRBudgeInNonCBOFlowQE(!0);
      return r("isTruthy")(h) &&
        f &&
        c < h &&
        o("WebToXFeatureGating").enableWTWAZOBudgetDefaultInNonCBOFlowQE(
          !0,
          "inline_guidance",
        )
        ? b
          ? o("AdsWhatsAppStrings").getWtwaZoSabrBudgetWarningContent()
          : o("AdsWhatsAppStrings").getZOBudgetWarningContentForWTWA(h, d)
        : null;
    }
    function d(e, t, n, a, i, l, s, u, c, d) {
      if (!(l === "lifetime" || l === "daily")) return null;
      var m =
        !t &&
        o("AdsDFOBudgetGuidanceUtils").isEligibleCampaignForDFOSABRZO(n, a);
      if (!m) return null;
      var p = o(
          "AdsClickToMessageBudgetGuidanceUtils",
        ).getDurationFromStartTimeAndEndTime(s, u),
        _ = o(
          "AdsDFOBudgetGuidanceUtils",
        ).getDFOZOBudgetRecommendationForNonCBOByMode(
          e.account_id,
          l,
          p,
          d,
          i,
          n,
          a,
        ),
        f =
          l === "daily"
            ? o("AdsDFOBudgetGuidanceUtils").getDFOSabrDailyBudget(
                e.account_id,
                i,
                n,
                a,
                d,
              )
            : o("AdsDFOBudgetGuidanceUtils").getDFOSabrLifetimeBudget(
                e.account_id,
                i,
                n,
                a,
                p,
                d,
              );
      return r("isTruthy")(_) &&
        c < _ &&
        r("isTruthy")(f) &&
        f > _ &&
        o("AdsDFOBudgetGuidanceUtils").enableDFOSabrZoQE(n, a, !1)
        ? o("AdsDFOSABRConstants").getDFOZoBudgetWarningContentWithSABR(a)
        : r("isTruthy")(_) &&
            c < _ &&
            (f == null || f <= _) &&
            o("AdsDFOBudgetGuidanceUtils").enableDFOSabrZoQE(n, a, !1)
          ? o("AdsDFOSABRConstants").getDFOZoBudgetWarningContentWithoutSABR(
              _,
              d,
              a,
            )
          : null;
    }
    ((l.getSABRZOBudgetWarningContent = u),
      (l.getWTWAZOBudgetWarningContent = c),
      (l.getDFOZOBudgetWarningContent = d));
  },
  98,
);
