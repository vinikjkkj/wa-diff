__d(
  "WAWebNewsletterStatusCardForwardedLayout",
  ["WAWebNewsletterStatusCardText", "WAWebNewsletterStatusCardTypography"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebNewsletterStatusCardTypography")).fromAndroidDp(16),
      u = e.fromAndroidDp(21),
      c = e.fromAndroidDp(4),
      d = e.CARD_TYPE.forwarded.size * e.ROBOTO_PADDED_LINE_HEIGHT,
      m = "\xA0";
    function p(e) {
      return e == null
        ? 0
        : g(e) + (e.channelName != null ? d : 0) + (e.isMediaUpdate ? c : 0);
    }
    function _(e) {
      var t = e.fonts,
        n = e.forwarded,
        r = e.left,
        a = e.measure,
        i = e.top,
        l = e.width,
        s = h(n),
        u = g(n),
        c = o("WAWebNewsletterStatusCardTypography").withLetterSpacing(
          a,
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.forwarded
            .letterSpacing,
        ),
        p = c(m, t.label),
        _ = n.channelName;
      return {
        icon: { x: r, y: i + (u - s) / 2, width: s, height: s },
        isIconFlipped: !1,
        label: f(
          o("WAWebNewsletterStatusCardText").truncateToWidth(
            n.label,
            t.label,
            l - s - p * 2,
            c,
          ),
          r + s + p,
          i + d / 2,
          t.label,
        ),
        channelName:
          _ != null
            ? f(
                o("WAWebNewsletterStatusCardText").truncateToWidth(
                  _,
                  t.channelName,
                  l,
                  c,
                ),
                r,
                i + u + d / 2,
                t.channelName,
              )
            : null,
      };
    }
    function f(e, t, n, r) {
      return {
        text: e,
        x: t,
        y: n,
        font: r,
        align: "left",
        isRtl: o("WAWebNewsletterStatusCardText").isRtlText(e),
        letterSpacing: o(
          "WAWebNewsletterStatusCardTypography",
        ).getDrawnLetterSpacing(
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.forwarded
            .letterSpacing,
        ),
      };
    }
    function g(e) {
      return Math.max(d, h(e));
    }
    function h(e) {
      var t = e.isFrequentlyForwarded;
      return t ? u : s;
    }
    ((l.getCardForwardedHeight = p), (l.layoutCardForwarded = _));
  },
  98,
);
