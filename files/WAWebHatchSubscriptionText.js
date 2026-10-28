__d(
  "WAWebHatchSubscriptionText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.usageRowValueLabel;
      if (t != null && t.trim() !== "") return t;
      var n = e.percentUsed;
      return n != null
        ? s._(/*BTDS*/ '_j{"*":"{percent used}\\u0025 used"}', [
            s._param("percent used", n, [0]),
          ])
        : e.usageState === "UNLIMITED"
          ? s._(/*BTDS*/ "Unlimited")
          : null;
    }
    function u(e) {
      return /\splan$/i.test(e)
        ? e
        : s._(/*BTDS*/ "{plan name} plan", [s._param("plan name", e)]);
    }
    function c(e) {
      var t = e.usageRowLabel;
      return t != null && t.trim() !== "" ? t : u(e.planName);
    }
    ((l.getHatchSubscriptionUsageText = e),
      (l.getHatchSubscriptionPlanTitle = u),
      (l.getHatchSubscriptionPlanLabel = c));
  },
  226,
);
