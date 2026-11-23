__d(
  "WAWebChartTickLabels",
  ["ReactKonva", "WAWebChartThemeContext", "WAWebL10N", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = e.margin,
        n = t === void 0 ? 5 : t,
        r = e.position,
        a = e.text,
        i = e.x,
        l = e.y,
        u = c(o("WAWebChartThemeContext").ChartThemeContext),
        _ = m(null),
        f = p(null),
        g = f[0],
        h = f[1];
      return (
        d(
          function () {
            var e = _.current;
            if (!(e == null || r === "start")) {
              var t = e.width() / (r === "middle" ? 2 : 1);
              h(e.x() - t);
            }
          },
          [r],
        ),
        s.jsx(
          o("ReactKonva").Text,
          {
            ref: _,
            text: a,
            x: g != null ? g : i,
            y: l + n,
            fill: u.textColor,
            fontSize: u.fontSize,
            fontFamily: u.tickLabelFontFamily,
          },
          i,
        )
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.margin,
        n = e.text,
        a = e.x,
        i = e.y,
        l = c(o("WAWebChartThemeContext").ChartThemeContext),
        u = m(null),
        _ = p(i),
        f = _[0],
        g = _[1],
        h = p(a),
        y = h[0],
        C = h[1],
        b = r("WAWebL10N").isRTL();
      return (
        d(
          function () {
            var e = u.current;
            if (e != null) {
              g(i - e.height() / 2);
              var n = b ? a + t : -e.width() - t;
              C(n);
            }
          },
          [t, a, i, b],
        ),
        s.jsx(
          o("ReactKonva").Text,
          {
            fill: l.textColor,
            ref: u,
            text: n,
            x: y,
            y: f,
            align: b ? "right" : "left",
            fontSize: l.fontSize,
            fontFamily: l.tickLabelFontFamily,
          },
          a,
        )
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.XTickLabel = _),
      (l.YTickLabel = f));
  },
  98,
);
