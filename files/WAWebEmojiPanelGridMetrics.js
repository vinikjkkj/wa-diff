__d(
  "WAWebEmojiPanelGridMetrics",
  ["WAWebEmojiPanelContentEmojiRow.react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6,
      s = o("WAWebEmojiPanelContentEmojiRow.react").SIDE_MARGIN * 2 + e;
    function u(e) {
      return Math.max(
        1,
        Math.floor(
          (e - s) / o("WAWebEmojiPanelContentEmojiRow.react").EMOJI_WIDTH,
        ),
      );
    }
    function c(e) {
      return s + e * o("WAWebEmojiPanelContentEmojiRow.react").EMOJI_WIDTH;
    }
    function d(e, t, n) {
      var r = Math.min(Math.max(u(e), t), n);
      return c(r);
    }
    ((l.SCROLLBAR_WIDTH = e),
      (l.getNumColumns = u),
      (l.getEmojiPanelWidthForColumns = c),
      (l.getEmojiPanelWidthForAvailableWidth = d));
  },
  98,
);
