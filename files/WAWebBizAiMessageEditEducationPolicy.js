__d(
  "WAWebBizAiMessageEditEducationPolicy",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30 * o("WATimeUtils").DAY_SECONDS;
    function s(t, n) {
      return t.hasUsedMessageEditing
        ? !1
        : t.tooltipLastDismissedAtSeconds == null ||
            n - t.tooltipLastDismissedAtSeconds >= e;
    }
    function u(e, t, n) {
      return e != null && !c(e, n)
        ? !1
        : t.hintLastShownAtSeconds == null ||
            n - t.hintLastShownAtSeconds >= o("WATimeUtils").DAY_SECONDS;
    }
    function c(e, t) {
      return (
        e != null && t - e.startedAtSeconds >= o("WATimeUtils").WEEK_SECONDS
      );
    }
    function d(e, t) {
      return babelHelpers.extends({}, e, { tooltipLastDismissedAtSeconds: t });
    }
    function m(e) {
      return babelHelpers.extends({}, e, { hasUsedMessageEditing: !0 });
    }
    function p(e, t) {
      return babelHelpers.extends({}, e, { hintLastShownAtSeconds: t });
    }
    ((l.isDiscoveryTooltipEligible = s),
      (l.isPostEditHintEligible = u),
      (l.isActivePostEditHintExpired = c),
      (l.withDiscoveryTooltipDismissed = d),
      (l.withMessageEditingUsed = m),
      (l.withPostEditHintShown = p));
  },
  98,
);
