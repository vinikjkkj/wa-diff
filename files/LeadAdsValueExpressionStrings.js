__d(
  "LeadAdsValueExpressionStrings",
  ["fbt", "AdCampaignDestination", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Conversion value rules"),
      d = s._(
        /*BTDS*/ "Adjust conversion value for different conversion destinations to indicate how much they are worth to your business. You may pay more for the conversions you value more. You may also see fewer overall conversions as we aim to get you the conversions that matter most.",
      ),
      m = s._(
        /*BTDS*/ "Adjust the value of conversions from different locations based on how much they are worth to your business. This will be used to guide delivery.",
      ),
      p = s._(/*BTDS*/ "Increase"),
      _ = s._(/*BTDS*/ "Decrease");
    function f(e) {
      switch (e) {
        case r("AdCampaignDestination").WEBSITE:
          return s._(/*BTDS*/ "Website conversions");
        case r("AdCampaignDestination").PHONE_CALL:
          return s._(/*BTDS*/ "Call conversions");
        default: {
          var t = new Error("Unsupported destination type");
          throw (t.stack, t);
        }
      }
    }
    var g = function () {
        return s._(
          /*BTDS*/ "Conversions from different locations are worth the same",
        );
      },
      h = function () {
        return s._(
          /*BTDS*/ "Conversions from different locations are worth differently",
        );
      },
      y = function () {
        return s._(
          /*BTDS*/ "Value adjustments need to be between 20\u0025 and 1,000\u0025 for {=m2} and between 20\u0025 and 90\u0025 for {=m5}.",
          [
            s._implicitParam(
              "=m2",
              u.jsx("strong", { children: s._(/*BTDS*/ "increase") }),
            ),
            s._implicitParam(
              "=m5",
              u.jsx("strong", { children: s._(/*BTDS*/ "decrease") }),
            ),
          ],
        );
      },
      C = s._(/*BTDS*/ "The minimum value is 20\u0025."),
      b = s._(/*BTDS*/ "The maximum value is 1,000\u0025."),
      v = s._(/*BTDS*/ "The maximum value is 90\u0025.");
    ((l.VALUE_EXPRESSION_VALUE_RULES_TITLE = c),
      (l.VALUE_EXPRESSION_VALUE_RULES_HEADER_TOOLTIP = d),
      (l.VALUE_EXPRESSION_HEADER_DESCRIPTION = m),
      (l.INCREASE_VALUE = p),
      (l.DECREASE_VALUE = _),
      (l.getValueAdjustmentRowHeading = f),
      (l.getSameWeightOptionLabel = g),
      (l.getDifferentWeightOptionLabel = h),
      (l.getEligibleAdjustmentWeightRangeNotice = y),
      (l.MIN_ADJUSTMENT_WEIGHT_AUTO_CORRECTION_MSG = C),
      (l.MAX_INCREASE_ADJUSTMENT_WEIGHT_AUTO_CORRECTION_MSG = b),
      (l.MAX_DECREASE_ADJUSTMENT_WEIGHT_AUTO_CORRECTION_MSG = v));
  },
  226,
);
