__d(
  "WAWebNewsletterStatusCardActionButtonLayout",
  ["WAWebNewsletterStatusCardText", "WAWebNewsletterStatusCardTypography"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebNewsletterStatusCardTypography")).fromAndroidDp(2),
      u = e.fromAndroidDp(1),
      c = e.fromAndroidDp(12),
      d = e.CARD_TYPE.actionButton.size * e.ROBOTO_LINE_SPACING;
    function m(e) {
      return e != null ? s + u + c * 2 + d : 0;
    }
    function p(e) {
      var t = e.bodyLineHeight,
        n = e.font,
        r = e.label,
        a = e.left,
        i = e.measure,
        l = e.top,
        d = e.width,
        m = l + s,
        p = o("WAWebNewsletterStatusCardText").truncateToWidth(
          r,
          n,
          d - c * 2,
          i,
        ),
        _ =
          ((t / 2) *
            o("WAWebNewsletterStatusCardTypography").CARD_TYPE.actionButton
              .size) /
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.body.size;
      return {
        divider: { x: a, y: m, width: d, height: u },
        label: {
          text: p,
          x: a + (d - i(p, n)) / 2,
          y: m + u + c + _,
          font: n,
          align: "left",
          isRtl: o("WAWebNewsletterStatusCardText").isRtlText(p),
        },
      };
    }
    ((l.getCardActionButtonHeight = m), (l.layoutCardActionButton = p));
  },
  98,
);
