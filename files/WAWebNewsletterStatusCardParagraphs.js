__d(
  "WAWebNewsletterStatusCardParagraphs",
  ["WAWebABProps", "WAWebNewsletterStatusCardTypography"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3,
      u =
        (e = o("WAWebNewsletterStatusCardTypography")).CARD_TYPE.body.size *
        0.11,
      c = e.CARD_TYPE.body.size * 0.3,
      d = e.CARD_TYPE.body.size * 0.7,
      m = 2,
      p =
        e.CARD_TYPE.body.size * e.ROBOTO_TEXT_MIDDLE_DROP +
        e.fromAndroidDp(m / s),
      _ = e.CARD_TYPE.body.size * 1.9,
      f = e.CARD_TYPE.body.size * 0.17,
      g = 3,
      h = e.fromAndroidDp(g / s),
      y = e.CARD_TYPE.body.size * 0.14,
      C = 3,
      b = e.fromAndroidDp(C / s);
    function v(e, t, n) {
      return e == null
        ? 0
        : (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bullet"
            )
              return c + u * 2 + d;
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "number" &&
              "marker" in e
            ) {
              var r = e.marker;
              return t ? Math.max(0, _ - n(r + " ")) : _;
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "quote"
            )
              return o("WAWebNewsletterStatusCardTypography").CARD_TYPE.body
                .size;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(e);
    }
    function S(e) {
      var t = e.left,
        n = e.lineHeight,
        r = e.lines,
        o = e.lineY,
        a = e.width;
      return {
        bullets: r.flatMap(function (e, n) {
          var r;
          return ((r = e.paragraph) == null ? void 0 : r.kind) === "bullet" &&
            e.isParagraphStart === !0
            ? [R(e.isRtl, t, a, o(n))]
            : [];
        }),
        quoteBars: L(r).map(function (e) {
          var r = e.first,
            i = e.isRtl,
            l = e.last;
          return {
            x: i ? t + a - h - f : t + h,
            y: o(r) - n / 2 + y,
            width: f,
            height: (l - r + 1) * n - y * 2,
          };
        }),
      };
    }
    function R(e, t, n, r) {
      var o = c + u;
      return { x: e ? t + n - o : t + o, y: r + p, radius: u };
    }
    function L(e) {
      var t = [];
      return (
        e.forEach(function (e, n) {
          var r;
          if (((r = e.paragraph) == null ? void 0 : r.kind) === "quote") {
            var a = t[t.length - 1];
            a != null &&
            a.last === n - 1 &&
            a.isRtl === e.isRtl &&
            (e.isParagraphStart !== !0 ||
              o("WAWebABProps").getABPropConfigValue(
                "expanded_formatting_multiline_quotes",
              ))
              ? (t[t.length - 1] = babelHelpers.extends({}, a, { last: n }))
              : t.push({ first: n, last: n, isRtl: e.isRtl });
          }
        }),
        t
      );
    }
    ((l.CARD_QUOTE_BAR_RADIUS = b),
      (l.getCardParagraphIndent = v),
      (l.layoutCardTextMarks = S));
  },
  98,
);
