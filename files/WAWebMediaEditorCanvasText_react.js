__d(
  "WAWebMediaEditorCanvasText.react",
  [
    "ReactKonva",
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorUtilsTextInCanvas",
    "react",
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
      var t = e.layer,
        n = e.shadow,
        r = f(t.getLines()),
        a = t.getLines().map(function (e, n) {
          var a = e.width + t.getStyles().lineHorizontalPadding * 2,
            i = t.getLineHeight() + t.getStyles().lineVerticalPadding * 2;
          return s.jsx(
            o("ReactKonva").Group,
            {
              width: a,
              height: i,
              y: n * i,
              children: s.jsx(p, { line: e, layer: t, emojiImages: r }),
            },
            n,
          );
        }),
        i = t.getStyles(),
        l = i.backgroundShadow;
      return s.jsx(o("ReactKonva").Group, {
        visible: t.getWidth() !== 0,
        width: t.getWidth(),
        height: t.getHeight(),
        children: s.jsxs(o("ReactKonva").Group, {
          x: t.getStyles().layerPadding,
          y: t.getStyles().layerPadding,
          children: [
            t.getTextBackground() &&
              (n
                ? s.jsx(
                    o("ReactKonva").Path,
                    {
                      data: t.getBackgroundPath(),
                      stroke: t.getTextBackgroundColor().toHex(),
                      fill: t.getTextBackgroundColor().toHex(),
                      shadowColor: l.color.toHex(),
                      shadowBlur: l.radius,
                      shadowOffset: { x: l.offsetX, y: l.offsetY },
                      shadowOpacity: l.color.getAlpha(),
                    },
                    "1",
                  )
                : s.jsx(
                    o("ReactKonva").Path,
                    {
                      data: t.getBackgroundPath(),
                      stroke: t.getTextBackgroundColor().toHex(),
                      fill: t.getTextBackgroundColor().toHex(),
                    },
                    "2",
                  )),
            a,
          ],
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = [];
      for (var n of e)
        for (var r of n.words) {
          var o = r.emojiPath;
          o && t.push(o);
        }
      return g(t);
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
