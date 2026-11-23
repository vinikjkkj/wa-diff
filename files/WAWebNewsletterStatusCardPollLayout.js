__d(
  "WAWebNewsletterStatusCardPollLayout",
  [
    "WABidi",
    "WAWebNewsletterStatusCardRichText",
    "WAWebNewsletterStatusCardText",
    "WAWebNewsletterStatusCardTextLine",
    "WAWebNewsletterStatusCardTypography",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 12,
      u = (e = o("WAWebNewsletterStatusCardTypography")).fromAndroidDp(4),
      c = e.fromAndroidDp(15),
      d = e.fromAndroidDp(20),
      m = e.fromAndroidDp(13),
      p = e.CARD_TYPE.pollTitle.size * e.ROBOTO_LINE_SPACING,
      _ = 3,
      f = e.CARD_TYPE.pollOption.size * e.ROBOTO_PADDED_LINE_HEIGHT,
      g = e.fromAndroidDp(20),
      h = 20,
      y = 12,
      C = 8,
      b = e.fromAndroidDp(6),
      v = e.fromAndroidDp(8),
      S = 1;
    function R(e) {
      var t = e.fontFamily,
        n = e.fontWeights,
        r = e.maxHeight,
        a = e.measure,
        i = e.monospaceFontFamily,
        l = e.poll,
        _ = e.width,
        f = e.x,
        h = e.y,
        y = L(t, i, n),
        C = _ - s * 2,
        b =
          l.title.length === 0
            ? []
            : o("WAWebNewsletterStatusCardRichText").wrapCardRichText(
                l.title,
                y.title,
                C,
                a,
              ),
        v = E(b, y.title, C, a),
        S = D(l, v.length, r),
        R = f + s,
        $ = h + s,
        N = k({
          contentWidth: C,
          fonts: y,
          isWrapped: b.length > I(l.title),
          left: R,
          lines: v,
          measure: a,
          top: $,
        });
      $ += v.length * p + c;
      var M = l.options.slice(0, S).map(function (e, t) {
        return x({
          contentWidth: C,
          fonts: y,
          left: R,
          measure: a,
          option: e,
          showsResults: l.showsResults,
          top: $ + t * (T(l) + d),
        });
      });
      $ += S * T(l) + Math.max(0, S - 1) * d + m;
      var w = l.options.length - S,
        A =
          w > 0
            ? P(
                l.getMoreOptionsText(w),
                R,
                $ + g / 2,
                y.moreOptions,
                o("WAWebNewsletterStatusCardTypography").CARD_TYPE
                  .pollMoreOptions.letterSpacing,
              )
            : null;
      return (
        A != null && ($ += g),
        { layout: { title: N, options: M, moreOptions: A }, height: $ + u - h }
      );
    }
    function L(e, t, n) {
      var r,
        a = n.bold,
        i = n.medium,
        l = n.regular;
      return {
        title: function (r) {
          return o("WAWebNewsletterStatusCardTypography").getStyledCardFont({
            boldWeight: a,
            fontFamily: e,
            monospaceFontFamily: t,
            style: r,
            type: o("WAWebNewsletterStatusCardTypography").CARD_TYPE.pollTitle,
            weight: i,
          });
        },
        option: function (r) {
          return o("WAWebNewsletterStatusCardTypography").getStyledCardFont({
            boldWeight: a,
            fontFamily: e,
            monospaceFontFamily: t,
            style: r,
            type: o("WAWebNewsletterStatusCardTypography").CARD_TYPE.pollOption,
            weight: l,
          });
        },
        count: (r = o("WAWebNewsletterStatusCardTypography")).getCardFont(
          l,
          r.CARD_TYPE.pollCount,
          e,
        ),
        moreOptions: r.getCardFont(i, r.CARD_TYPE.pollMoreOptions, e),
      };
    }
    function E(e, t, n, r) {
      if (e.length <= _) return e;
      var a = e.slice(0, _),
        i = a.length - 1;
      return (
        (a[i] = babelHelpers.extends({}, a[i], {
          spans: o("WAWebNewsletterStatusCardRichText").shortenCardRichText(
            a[i],
            t,
            n,
            o("WAWebNewsletterStatusCardText").measureInDirection(
              r,
              a[i].isRtl,
            ),
            o("WAWebNewsletterStatusCardText").ELLIPSIS,
          ),
        })),
        a
      );
    }
    function k(e) {
      var t = e.contentWidth,
        n = e.fonts,
        r = e.isWrapped,
        a = e.left,
        i = e.lines,
        l = e.measure,
        s = e.top,
        u = r
          ? t
          : Math.max.apply(
              Math,
              [0].concat(
                i.map(function (e) {
                  return o(
                    "WAWebNewsletterStatusCardRichText",
                  ).measureCardRichText(
                    e.spans,
                    n.title,
                    o("WAWebNewsletterStatusCardText").measureInDirection(
                      l,
                      e.isRtl,
                    ),
                  );
                }),
              ),
            ),
        c = i.flatMap(function (e, t) {
          return o(
            "WAWebNewsletterStatusCardTextLine",
          ).positionCardRichTextLine({
            fontFor: n.title,
            left: a,
            line: e,
            lineHeight: p,
            measure: l,
            width: u,
            y: s + t * p + p / 2,
          }).runs;
        });
      return { runs: c, x: a, width: u };
    }
    function I(e) {
      return o("WAWebNewsletterStatusCardRichText")
        .getCardRichTextString(e)
        .split("\n").length;
    }
    function T(e) {
      return e.showsResults ? f + b + v : f;
    }
    function D(e, t, n) {
      for (
        var r = T(e),
          o = s + t * p + c + m + u,
          a = function (n) {
            return o + n * r + (n - 1) * d + (n < e.options.length ? g : 0);
          },
          i = e.options.length;
        i > S && a(i) > n;
      )
        i -= 1;
      return Math.min(i, e.options.length);
    }
    function x(e) {
      var t = e.contentWidth,
        n = e.fonts,
        r = e.left,
        a = e.measure,
        i = e.option,
        l = e.showsResults,
        s = e.top,
        u = r + h + y,
        c = t - h - y,
        d = r + t,
        m = s + f / 2,
        p = l ? a(i.countText, n.count) : 0,
        _ = l ? { x: u, y: s + f + b, width: c, height: v } : null,
        g = Math.min(1, Math.max(0, i.voteRatio));
      return {
        radio: { x: r, y: m - h / 2, width: h, height: h },
        title: $({
          fonts: n,
          left: u,
          maxWidth: l ? c - p - C : c,
          measure: a,
          title: i.title,
          y: m,
        }),
        count: l
          ? {
              text: i.countText,
              x: d,
              y: m,
              font: n.count,
              align: "right",
              isRtl: o("WAWebNewsletterStatusCardText").isRtlText(i.countText),
            }
          : null,
        barTrack: _,
        barFill:
          _ != null && g > 0
            ? babelHelpers.extends({}, _, { width: _.width * g })
            : null,
      };
    }
    function $(e) {
      var t = e.fonts,
        n = e.left,
        r = e.maxWidth,
        a = e.measure,
        i = e.title,
        l = e.y,
        s =
          o("WABidi").bidiDir(
            o("WAWebNewsletterStatusCardRichText").getCardRichTextString(i),
          ) === "rtl",
        u = o("WAWebNewsletterStatusCardText").measureInDirection(a, s),
        c = o("WAWebNewsletterStatusCardRichText").toDrawableCardRichText(i, s),
        d =
          o("WAWebNewsletterStatusCardRichText").measureCardRichText(
            c,
            t.option,
            u,
          ) <= r
            ? c
            : o("WAWebNewsletterStatusCardRichText").shortenCardRichText(
                { spans: c, isRtl: s },
                t.option,
                r,
                u,
                o("WAWebNewsletterStatusCardText").ELLIPSIS,
              ),
        m = o("WAWebNewsletterStatusCardRichText").measureCardRichText(
          d,
          t.option,
          u,
        ),
        p = o("WAWebNewsletterStatusCardTextLine").positionCardRichTextLine({
          fontFor: t.option,
          left: n,
          line: { spans: d, isRtl: s },
          lineHeight: f,
          measure: a,
          width: m,
          y: l,
        }),
        _ = p.runs;
      return { runs: _, x: n, width: m };
    }
    function P(e, t, n, r, a) {
      a === void 0 && (a = 0);
      var i = {
          text: e,
          x: t,
          y: n,
          font: r,
          align: "left",
          isRtl: o("WAWebNewsletterStatusCardText").isRtlText(e),
        },
        l = o("WAWebNewsletterStatusCardTypography").getDrawnLetterSpacing(a);
      return l === 0 ? i : babelHelpers.extends({}, i, { letterSpacing: l });
    }
    l.layoutCardPoll = R;
  },
  98,
);
