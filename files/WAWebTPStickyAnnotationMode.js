__d(
  "WAWebTPStickyAnnotationMode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "highlight" || e === "underline" || e === "strikeout";
    }
    function l(t, n, r) {
      return t === n && e(t) && !r;
    }
    i.shouldRestartAnnotationMode = l;
  },
  66,
);
