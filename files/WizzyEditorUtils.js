__d(
  "WizzyEditorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
      if (t.type === "solid") return t.color;
      var e = t.directionTo,
        n = t.endingColor,
        r = t.startingColor,
        o = "to " + e;
      return "linear-gradient(" + o + ", " + r + ", " + n + ")";
    };
    i.getBackgroundString = e;
  },
  66,
);
