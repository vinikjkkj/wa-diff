__d(
  "WAWebHatchSubscriptionText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      if (e.usageRowValueLabel != null) return e.usageRowValueLabel;
      var t = e.percentUsed;
      return t == null
        ? null
        : s._(/*BTDS*/ '_j{"*":"{percent used}\\u0025 used"}', [
            s._param("percent used", t, [0]),
          ]);
    }
    function u(e) {
      return /\splan$/i.test(e)
        ? e
        : s._(/*BTDS*/ "{plan name} plan", [s._param("plan name", e)]);
    }
    ((l.getHatchSubscriptionUsageText = e),
      (l.getHatchSubscriptionPlanTitle = u));
  },
  226,
);
