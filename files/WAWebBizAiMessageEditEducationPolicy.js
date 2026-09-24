__d(
  "WAWebBizAiMessageEditEducationPolicy",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30 * o("WATimeUtils").DAY_SECONDS;
    function s(t, n) {
      return (
        t.tooltipLastDismissedAtSeconds == null ||
        n - t.tooltipLastDismissedAtSeconds >= e
      );
    }
    function u(e, t, n) {
      return e != null && !c(e, n)
        ? !1
        : t.hintLastShownAtSeconds == null ||
            n - t.hintLastShownAtSeconds >= o("WATimeUtils").DAY_SECONDS;
    }
    function c(e, t) {
      return e != null && t >= d(e);
    }
    function d(e) {
      return e.startedAtSeconds + o("WATimeUtils").WEEK_SECONDS;
    }
    function m(e, t) {
      return babelHelpers.extends({}, e, { tooltipLastDismissedAtSeconds: t });
    }
    function p(e, t) {
      return babelHelpers.extends({}, e, { hintLastShownAtSeconds: t });
    }
    ((l.isDiscoveryTooltipEligible = s),
      (l.isPostEditHintEligible = u),
      (l.isActivePostEditHintExpired = c),
      (l.getPostEditHintExpirySeconds = d),
      (l.withDiscoveryTooltipDismissed = m),
      (l.withPostEditHintShown = p));
  },
  98,
);
