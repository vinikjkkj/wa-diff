__d(
  "WAWebMediaEditorCanvasText.react",
  [
    "ReactKonva",
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorUtilsTextInCanvas",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(e) {
      var t = e.emojiImages,
        n = e.layer,
        r = e.line,
        a = Math.max.apply(Math, n.getLineWidths()),
        i = 0;
      switch (n.getAlignment()) {
        case o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT:
          i = 0;
          break;
        case o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER:
          i = (a - r.width) / 2;
          break;
        case o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT:
          i = a - r.width;
          break;
      }
      var l = 0;
      return r.words.map(function (e, r) {
        var a = e.emojiPath,
          u = e.text,
          c = e.width,
          d = i + n.getStyles().lineHorizontalPadding + l,
          m = n.getStyles().lineVerticalPadding,
          p;
        if (a) {
          var _ = t[a];
          _
            ? (p = s.jsx(
                o("ReactKonva").Image,
                {
                  x: d,
                  y: m,
                  width: n.getLineHeight(),
                  height: n.getLineHeight(),
                  image: _,
                },
                r,
              ))
            : (p = s.jsx(
                o("ReactKonva").Rect,
                {
                  x: d,
                  y: m,
                  width: n.getLineHeight(),
                  height: n.getLineHeight(),
                  fill: "rgba(0,0,0,0)",
                },
                r,
              ));
        } else {
          var f = o("WAWebMediaEditorUtilsTextInCanvas").getTextBounds(
            n.getFont(),
            n.getFontSize(),
          );
          p = s.jsx(
            o("ReactKonva").Text,
            {
              x: d,
              y: m - f.top + (f.top + f.bottom) / 2,
              width: c,
              height: n.getLineHeight(),
              text: u,
              fill: n.getTextColor().toHex(),
              fontFamily: o("WAWebMediaEditorEnumsFonts").getFontStyle(
                n.getFont(),
              ).fontFamily,
              fontSize: n.getFontSize(),
            },
            r,
          );
        }
        return ((l += c), p);
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.layer,
        r = e.shadow,
        a;
      t[0] !== n ? ((a = n.getLines()), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = f(a),
        l;
      t[2] !== i || t[3] !== n
        ? ((l = n.getLines().map(function (e, t) {
            var r = e.width + n.getStyles().lineHorizontalPadding * 2,
              a = n.getLineHeight() + n.getStyles().lineVerticalPadding * 2;
            return s.jsx(
              o("ReactKonva").Group,
              {
                width: r,
                height: a,
                y: t * a,
                children: s.jsx(p, { line: e, layer: n, emojiImages: i }),
              },
              t,
            );
          })),
          (t[2] = i),
          (t[3] = n),
          (t[4] = l))
        : (l = t[4]);
      var u = l,
        c,
        d,
        m,
        _,
        g,
        h,
        y,
        C;
      if (t[5] !== n || t[6] !== r) {
        var b = n.getStyles(),
          v = b.backgroundShadow;
        d = o("ReactKonva").Group;
        var S;
        (t[15] !== n
          ? ((S = n.getWidth()), (t[15] = n), (t[16] = S))
          : (S = t[16]),
          (h = S !== 0),
          t[17] !== n
            ? ((y = n.getWidth()), (t[17] = n), (t[18] = y))
            : (y = t[18]),
          t[19] !== n
            ? ((C = n.getHeight()), (t[19] = n), (t[20] = C))
            : (C = t[20]),
          (c = o("ReactKonva").Group));
        var R;
        (t[21] !== n
          ? ((R = n.getStyles()), (t[21] = n), (t[22] = R))
          : (R = t[22]),
          (m = R.layerPadding));
        var L;
        (t[23] !== n
          ? ((L = n.getStyles()), (t[23] = n), (t[24] = L))
          : (L = t[24]),
          (_ = L.layerPadding),
          (g =
            n.getTextBackground() &&
            (r
              ? s.jsx(
                  o("ReactKonva").Path,
                  {
                    data: n.getBackgroundPath(),
                    stroke: n.getTextBackgroundColor().toHex(),
                    fill: n.getTextBackgroundColor().toHex(),
                    shadowColor: v.color.toHex(),
                    shadowBlur: v.radius,
                    shadowOffset: { x: v.offsetX, y: v.offsetY },
                    shadowOpacity: v.color.getAlpha(),
                  },
                  "1",
                )
              : s.jsx(
                  o("ReactKonva").Path,
                  {
                    data: n.getBackgroundPath(),
                    stroke: n.getTextBackgroundColor().toHex(),
                    fill: n.getTextBackgroundColor().toHex(),
                  },
                  "2",
                ))),
          (t[5] = n),
          (t[6] = r),
          (t[7] = c),
          (t[8] = d),
          (t[9] = m),
          (t[10] = _),
          (t[11] = g),
          (t[12] = h),
          (t[13] = y),
          (t[14] = C));
      } else
        ((c = t[7]),
          (d = t[8]),
          (m = t[9]),
          (_ = t[10]),
          (g = t[11]),
          (h = t[12]),
          (y = t[13]),
          (C = t[14]));
      var E;
      t[25] !== c || t[26] !== u || t[27] !== m || t[28] !== _ || t[29] !== g
        ? ((E = s.jsxs(c, { x: m, y: _, children: [g, u] })),
          (t[25] = c),
          (t[26] = u),
          (t[27] = m),
          (t[28] = _),
          (t[29] = g),
          (t[30] = E))
        : (E = t[30]);
      var k;
      return (
        t[31] !== d || t[32] !== h || t[33] !== y || t[34] !== C || t[35] !== E
          ? ((k = s.jsx(d, { visible: h, width: y, height: C, children: E })),
            (t[31] = d),
            (t[32] = h),
            (t[33] = y),
            (t[34] = C),
            (t[35] = E),
            (t[36] = k))
          : (k = t[36]),
        k
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      if (t[0] !== e) {
        n = [];
        for (var r of e)
          for (var a of r.words) {
            var i = a.emojiPath;
            i && n.push(i);
          }
        ((t[0] = e), (t[1] = n));
      } else n = t[1];
      return g(n);
    }
    function g(e) {
      var t = Array.from(new Set(e)),
        n = t.join(""),
        r = d({}),
        o = m(0),
        a = o[1];
      return (
        c(
          function () {
            ((r.current = {}),
              a(0),
              t.forEach(function (e) {
                var t = new Image();
                ((t.onload = function () {
                  ((r.current[e] = t), a(Object.keys(r.current).length));
                }),
                  (t.src = e));
              }));
          },
          [a, n],
        ),
        r.current
      );
    }
    l.default = _;
  },
  98,
);
