__d(
  "WAWebAddOnBubbleRenderUtils",
  ["WAWebDisplayType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
      o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
    ]);
    function s(t) {
      return t != null && e.has(t);
    }
    l.isAddOnBubbleCentered = s;
  },
  98,
);
