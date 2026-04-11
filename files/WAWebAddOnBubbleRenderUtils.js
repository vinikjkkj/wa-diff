__d(
  "WAWebAddOnBubbleRenderUtils",
  ["WAWebABProps", "WAWebDisplayType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
      o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
    ]);
    function s(t) {
      return (
        t != null &&
        e.has(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "reactions_alignment_for_transparent_messages_enabled",
        )
      );
    }
    l.isAddOnBubbleCentered = s;
  },
  98,
);
