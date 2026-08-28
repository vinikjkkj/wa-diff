__d(
  "createHighlightPulseAnimationSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color.guidedHighlightAnimationStyles;
      return function (t) {
        var e = t.status;
        return n[e];
      };
    }
    i.createHighlightPulseAnimationSelector = e;
  },
  66,
);
