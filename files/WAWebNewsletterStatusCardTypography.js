__d(
  "WAWebNewsletterStatusCardTypography",
  ["WAWebNewsletterStatusCardText"],
  function (t, n, r, o, a, i, l) {
    var e = 328,
      s = 320,
      u = 2048,
      c = 1900,
      d = 500,
      m = 2163,
      p = 555,
      _ = 400,
      f = 700,
      g = (c + d) / u,
      h = (m + p) / u,
      y = (c + p) / u,
      C = (m - p - c + d) / (2 * u);
    function b(t) {
      return (t * e) / s;
    }
    function v(e, t) {
      t === void 0 && (t = 0);
      var n = b(e);
      return { size: n, letterSpacing: n * t };
    }
    var S = {
      channelName: v(14, 0.0125),
      followers: v(12, 0.02),
      body: v(14),
      linkTitle: v(14, 0.01),
      linkDescription: v(12, 0.02),
      linkDomain: v(12, 0.02),
      reactionEmoji: v(16),
      reactionCount: v(13),
      pollTitle: v(14),
      pollOption: v(16),
      pollCount: v(12),
      pollMoreOptions: v(14, 0.01071428),
      albumMore: v(28),
      voiceDuration: v(16),
      singleEmoji: v(52),
      forwarded: v(14, 0.01),
      adminProfile: v(14),
      actionButton: v(16),
    };
    function R(e, t, n) {
      var r = t.size;
      return e + " " + r + "px " + n;
    }
    function L(e) {
      var t = e.boldWeight,
        n = e.fontFamily,
        r = e.monospaceFontFamily,
        o = e.style,
        a = e.type,
        i = e.weight,
        l = o.isItalic ? "italic " : "",
        s = o.isBold || o.isLink,
        u = o.isMonospace ? R(s ? f : _, a, r) : R(s ? t : i, a, n);
      return "" + l + u;
    }
    function E(e, t) {
      var n = k(t);
      return n === 0
        ? e
        : function (t, r) {
            return e(t, r) + n * I(t);
          };
    }
    function k(e) {
      return "letterSpacing" in CanvasRenderingContext2D.prototype ? e : 0;
    }
    function I(e) {
      return o("WAWebNewsletterStatusCardText").splitCardCharacters(e).length;
    }
    ((l.CARD_WIDTH = e),
      (l.ROBOTO_LINE_SPACING = g),
      (l.ROBOTO_PADDED_LINE_HEIGHT = h),
      (l.ROBOTO_LAST_LINE_HEIGHT = y),
      (l.ROBOTO_TEXT_MIDDLE_DROP = C),
      (l.fromAndroidDp = b),
      (l.CARD_TYPE = S),
      (l.getCardFont = R),
      (l.getStyledCardFont = L),
      (l.withLetterSpacing = E),
      (l.getDrawnLetterSpacing = k),
      (l.countCardCharacters = I));
  },
  98,
);
