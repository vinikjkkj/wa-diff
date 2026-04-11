__d(
  "WAWebGetExpressionsPanelOffset",
  ["WAWebDropdown.react", "WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("WAWebL10N").isRTL(),
        a = t.height,
        i = t.width,
        l = n ? e.x + e.width : e.x,
        s = n
          ? l -
            e.width / 2 +
            o("WAWebDropdown.react").EMOJI_PICKER_WIDTH / 2 -
            6
          : l +
            e.width / 2 -
            o("WAWebDropdown.react").EMOJI_PICKER_WIDTH / 2 +
            6,
        u = a - e.y + 20;
      return { horizontal: n ? Math.abs(s - i) : s, vertical: u };
    }
    l.getExpressionsPanelOffset = e;
  },
  98,
);
