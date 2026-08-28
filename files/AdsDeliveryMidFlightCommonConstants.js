__d(
  "AdsDeliveryMidFlightCommonConstants",
  [
    "fbt",
    "AdsAutoApplyTransparencyExperimentUtils",
    "AdsEditorCampaignSectionTitles",
    "AdsLearnMore.react",
    "createIntlPercentFbtFormatter",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("createIntlPercentFbtFormatter")(0, !1),
      d = 48,
      m = 140,
      p = 200,
      _ = function (t) {
        return s._(
          /*BTDS*/ '_j{"*":"{number} ad sets changed","_1":"1 ad set changed"}',
          [s._plural(t, "number")],
        );
      },
      f = s._(/*BTDS*/ "Create"),
      g = s._(/*BTDS*/ "Finish setup"),
      h = s._(/*BTDS*/ "Off\/On"),
      y = s._(/*BTDS*/ "Potential outcome"),
      C = s._(
        /*BTDS*/ "Delivery recommendations and their potential outcome are based on your current and past performance and factors like budget, bid, and audience. They don't consider seasonality or future changes to other ad sets. Actual performance depends on many factors including market dynamics, so potential outcomes are provided to give you an idea of possible performance but aren't guaranteed.",
      ),
      b = s._(
        /*BTDS*/ "This percentage is based on a machine learning model of data from real advertisers who took this recommendation. These advertisers have the same optimization for ad delivery. The model considers performance over 17 days.",
      ),
      v = s._(
        /*BTDS*/ "This percentage is based on a machine learning model of data from real advertisers who took this recommendation. These advertisers have the same optimization for ad delivery. The model considers performance over 28 days.",
      ),
      S = s._(
        /*BTDS*/ "This percentage is based on a machine learning model of data from real advertisers who took this recommendation. The model considers performance over 28 days.",
      ),
      R = s._(
        /*BTDS*/ "Actual performance depends on many factors including market dynamics. This percentage is provided to give you an idea of possible performance, but isn't guaranteed.",
      ),
      L = s._(/*BTDS*/ "How it's calculated"),
      E = s._(/*BTDS*/ "How it's calculated"),
      k = s._(/*BTDS*/ "Current:"),
      I = s._(/*BTDS*/ "Optimized Delivery"),
      T = s._(/*BTDS*/ "Optimized delivery"),
      D = s._(/*BTDS*/ "Return to Account Overview"),
      x = s._(/*BTDS*/ "Return to view charts"),
      $ = function (t, n) {
        var e = Math.ceil(n * 100);
        return s._(/*BTDS*/ "{liftEstimationPercentage} more {objective}", [
          s._param("liftEstimationPercentage", c(Number(e))),
          s._param("objective", t),
        ]);
      },
      P = function (t) {
        return s._(/*BTDS*/ "More {objective}", [s._param("objective", t)]);
      },
      N = "269269737396981",
      M = s._(/*BTDS*/ "Current budget"),
      w = s._(/*BTDS*/ "Current budget"),
      A = s._(/*BTDS*/ "New budget"),
      F = s._(/*BTDS*/ "Extend by"),
      O = s._(
        /*BTDS*/ "If you extend the duration of your daily budget\/ad set beyond its end date, we'll maintain the same average daily spend for the extended duration. For lifetime budgets, we\u2019ll automatically add as much budget as needed to achieve similar daily results over the extended duration, based on the number of days you select.",
      ),
      B = s._(/*BTDS*/ "Potential outcome"),
      W = s._(/*BTDS*/ "Additional budget"),
      q = s._(/*BTDS*/ "Ends"),
      U = s._(/*BTDS*/ "Save to draft"),
      V = s._(/*BTDS*/ "Publish"),
      H = s._(/*BTDS*/ "Continue"),
      G = s._(/*BTDS*/ "Using campaign budget"),
      z = s._(/*BTDS*/ "Hide recommendation"),
      j = s._(/*BTDS*/ "Show recommendation"),
      K = s._(/*BTDS*/ "\u2014"),
      Q = s._(/*BTDS*/ "No end date"),
      X = s._(/*BTDS*/ "(ongoing)"),
      Y = s._(/*BTDS*/ "Apply now"),
      J = function (t) {
        return s._(
          /*BTDS*/ '_j{"*":"Extend {number} days","_1":"Extend 1 day"}',
          [s._plural(t, "number")],
        );
      },
      Z = s._(/*BTDS*/ "Get started"),
      ee = o(
        "AdsAutoApplyTransparencyExperimentUtils",
      ).shouldShowAutoApplyRename()
        ? s._(/*BTDS*/ "Set up auto-apply")
        : s._(/*BTDS*/ "Set up automatic adjustments"),
      te = o(
        "AdsAutoApplyTransparencyExperimentUtils",
      ).shouldShowAutoApplyRename()
        ? s._(/*BTDS*/ "Enable auto-apply")
        : s._(/*BTDS*/ "Enable automatic adjustments"),
      ne = s._(/*BTDS*/ "See more"),
      re = s._(/*BTDS*/ "\u2026"),
      oe = s._(/*BTDS*/ "See less"),
      ae = s._(/*BTDS*/ "Preview"),
      ie = s._(/*BTDS*/ "Preview with Value Rules"),
      le = s._(/*BTDS*/ "Get started"),
      se = s._(/*BTDS*/ "Duplicate ad set"),
      ue = "162567804385118",
      ce = "138838180128488",
      de = function () {
        return s._(
          /*BTDS*/ "This metric is {estimated} and {in development} .",
          [
            s._param(
              "estimated",
              u.jsx(r("AdsLearnMore.react"), {
                cmsID: ce,
                isStandalone: !1,
                label: s._(/*BTDS*/ "estimated"),
              }),
            ),
            s._param(
              "in development",
              u.jsx(r("AdsLearnMore.react"), {
                cmsID: ue,
                isStandalone: !1,
                label: s._(/*BTDS*/ "in development"),
              }),
            ),
          ],
        );
      },
      me = function (t) {
        return s._(
          /*BTDS*/ '_j{"*":"Duplicate ad sets","_1":"Duplicate ad set"}',
          [s._plural(t)],
        );
      };
    ((l.DELIVERY_STATUS_COLUMN_LABEL = o(
      "AdsEditorCampaignSectionTitles",
    ).DELIVERY),
      (l.ROW_HEIGHT = d),
      (l.SHORT_CELL_WIDTH = m),
      (l.MEDIUM_CELL_WIDTH = p),
      (l.getCampaignEditedFooterLabel = _),
      (l.PRECREATE_CTA_LABEL = f),
      (l.PRECREATE_CTA_DRAFT_LABEL = g),
      (l.OFF_ON_TOGGLE = h),
      (l.INCENTIVE_POTENTIAL_OUTCOME_HEADER = y),
      (l.INCENTIVE_TOOLTIP = C),
      (l.INCENTIVE_TOOLTIP_PERSONALIZED_EXPLANATION = b),
      (l.INCENTIVE_TOOLTIP_PERSONALIZED_EXPLANATION_28_DAYS = v),
      (l.INCENTIVE_TOOLTIP_PERSONALIZED_EXPLANATION_28_DAYS_SGCC = S),
      (l.INCENTIVE_TOOLTIP_PERSONALIZED_EXPLANATION_QUALIFICATIONS = R),
      (l.INCENTIVE_TOOLTIP_TITLE_WITH_LIFT_ESTIMATION = L),
      (l.INCENTIVE_TOOLTIP_PERSONALIZED_TITLE_WITH_LIFT_ESTIMATION = E),
      (l.INCENTIVE_CURRENT_LABEL = k),
      (l.INCENTIVE_OPTIMIZED_DELIVERY = I),
      (l.INCENTIVE_OPTMIZED_DELIVERY_SENTENCE_CASE = T),
      (l.RETURN_TO_ACCOUNT_OVERVIEW = D),
      (l.RETURN_TO_VIEW_CHARTS = x),
      (l.getCustomExpectedOutcomeWithLiftEstimationSentenceCase = $),
      (l.getCustomExpectedOutcomeWithoutLiftEstimationSentenceCase = P),
      (l.LEARNING_LIMITED_LEARN_MORE_ID = N),
      (l.CURRENT_BUDGET_COLUMN_LABEL = M),
      (l.CURRENT_BUDGET_COLUMN_LABEL_SENTENCE_CASE = w),
      (l.NEW_BUDGET_COLUMN_LABEL = A),
      (l.EXTEND_BY_COLUMN_LABEL = F),
      (l.EXTEND_BY_COLUMN_TOOLTIP_CONTENT = O),
      (l.POTENTIAL_OUTCOME_COLUMN_LABEL = B),
      (l.ADDITIONAL_BUDGET_COLUMN_LABEL = W),
      (l.ENDS_COLUMN_LABEL = q),
      (l.SAVE_AS_DRAFT_BUTTON_LABEL = U),
      (l.PUBLISH_BUTTON_LABEL = V),
      (l.GUIDED_WORKFLOW_CONTINUE_BUTTON_FBT = H),
      (l.CBO_BUDGET_CELL = G),
      (l.HIDE_RECOMMENDATION = z),
      (l.SHOW_RECOMMENDATION = j),
      (l.COLUMN_DOES_NOT_APPLY = K),
      (l.NO_END_DATE = Q),
      (l.ONGOING_NO_END_DATE = X),
      (l.APPLY_NOW = Y),
      (l.getExtensionDays = J),
      (l.APPLY = Z),
      (l.ENABLE_AUTOMATIC_ADJUSTMENT = ee),
      (l.ENABLE_AUTOMATIC_ADJUSTMENTS = te),
      (l.SEE_MORE = ne),
      (l.ELLIPSIS = re),
      (l.SEE_LESS = oe),
      (l.PREVIEW = ae),
      (l.VAR_PREVIEW = ie),
      (l.GET_STARTED = le),
      (l.DUPLICATE_L2 = se),
      (l.IN_DEVELOPMENT_CMS_ID = ue),
      (l.getSYDGuidanceCardLiftEstimateTooltipParagraph = de),
      (l.getDuplicateL2ButtonLabel = me));
  },
  226,
);
