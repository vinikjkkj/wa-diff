__d(
  "createOnboardingPulseAnimationSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color,
        r = n.onboardingPulseAnimationStyles,
        o = n.onboardingTourHighlightStyles;
      return function (t) {
        var e = t.variant;
        return [o[e], r[e]];
      };
    }
    i.createOnboardingPulseAnimationSelector = e;
  },
  66,
);
