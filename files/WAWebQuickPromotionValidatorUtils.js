__d(
  "WAWebQuickPromotionValidatorUtils",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WATimeUtils").castUnixTimeToMillisTime(e),
        r = o("WATimeUtils").millisTime() - n,
        a = r <= t;
      return a;
    }
    function s(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.key,
            r = e.value;
          n == null || r == null || t.set(n, r);
        }),
        t
      );
    }
    ((l.checkIsWithinEligibilityWindow = e),
      (l.convertFilterParametersIntoMap = s));
  },
  98,
);
