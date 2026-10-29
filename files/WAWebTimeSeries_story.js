__d(
  "WAWebTimeSeries.story",
  [
    "WAWebChartUtils",
    "WAWebCheckBox.react",
    "WAWebFlex.react",
    "WAWebTimeSeries.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        storyName: "WAWebTimeSeries",
        component: r("WAWebTimeSeries.react"),
        description: "Time series chart, displaying series over a time period.",
        descriptionNode: s.jsx("div", {
          children: "Time series chart, displaying series over a time period.",
        }),
        examples: [
          {
            example: function () {
              return s.jsx(p, { data: m() });
            },
            title: "Time Series",
          },
          {
            example: function () {
              return s.jsx(p, { data: m(2) });
            },
            title: "Time Series - 2 points",
          },
        ],
      },
      d = [
        [new Date(2024, 11, 1), 100],
        [new Date(2024, 11, 2), 200],
        [new Date(2024, 11, 3), 150],
        [new Date(2024, 11, 4), 400],
        [new Date(2024, 11, 5), 534],
        [new Date(2024, 11, 6), 600],
        [new Date(2024, 11, 7), 710],
        [new Date(2024, 11, 8), 720],
        [new Date(2024, 11, 9), 750],
        [new Date(2024, 11, 10), 800],
        [new Date(2024, 11, 11), 1e3],
        [new Date(2024, 11, 12), 1200],
        [new Date(2024, 11, 13), 1140],
        [new Date(2024, 11, 14), 1700],
        [new Date(2024, 11, 15), 2700],
        [new Date(2024, 11, 16), 2300],
        [new Date(2024, 11, 17), 2700],
        [new Date(2024, 11, 18), 4500],
        [new Date(2024, 11, 19), 10700],
        [new Date(2024, 11, 20), 100],
        [new Date(2024, 11, 21), 200],
        [new Date(2024, 11, 22), 300],
        [new Date(2024, 11, 23), 700],
        [new Date(2024, 11, 24), 500],
        [new Date(2024, 11, 25), 600],
        [new Date(2024, 11, 26), 700],
        [new Date(2024, 11, 27), 100],
        [new Date(2024, 11, 28), 700],
        [new Date(2024, 11, 29), 200],
        [new Date(2024, 11, 30), 700],
      ],
      m = function (t) {
        return (
          t === void 0 && (t = d.length),
          [
            d.slice(0, t).map(function (e) {
              var t = e[0],
                n = e[1];
              return [t.valueOf(), n];
            }),
            d.slice(0, t).map(function (e) {
              var t = e[0],
                n = e[1];
              return [t.valueOf(), -n];
            }),
          ]
        );
      };
    function p(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(22),
        i = e.data,
        l;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = []), (a[0] = l))
        : (l = a[0]);
      var c = u(l),
        d = c[0],
        m = c[1],
        p = u(!1),
        _ = p[0],
        f = p[1],
        g;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s.jsx("label", {
            htmlFor: "loading-checkbox",
            style: { marginRight: 8 },
            children: "Animated:",
          })),
          (a[1] = g))
        : (g = a[1]);
      var h;
      a[2] !== _
        ? ((h = function () {
            return f(!_);
          }),
          (a[2] = _),
          (a[3] = h))
        : (h = a[3]);
      var y;
      a[4] !== _ || a[5] !== h
        ? ((y = s.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              g,
              s.jsx(o("WAWebCheckBox.react").CheckBox, {
                id: "loading-checkbox",
                checked: _,
                onChange: h,
              }),
            ],
          })),
          (a[4] = _),
          (a[5] = h),
          (a[6] = y))
        : (y = a[6]);
      var C = d == null || (t = d[0]) == null ? void 0 : t[1],
        b;
      a[7] !== C
        ? ((b = s.jsxs("div", { children: ["Series 1 ", C] })),
          (a[7] = C),
          (a[8] = b))
        : (b = a[8]);
      var v = d == null || (n = d[1]) == null ? void 0 : n[1],
        S;
      a[9] !== v
        ? ((S = s.jsxs("div", { children: ["Series 2 ", v] })),
          (a[9] = v),
          (a[10] = S))
        : (S = a[10]);
      var R;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s.jsx("br", {})), (a[11] = R))
        : (R = a[11]);
      var L;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = o("WAWebChartUtils").makeGetChartColorFromTheme("light")),
          (a[12] = L))
        : (L = a[12]);
      var E;
      a[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function (t) {
            return m(t);
          }),
          (a[13] = E))
        : (E = a[13]);
      var k;
      a[14] !== _ || a[15] !== i
        ? ((k = s.jsx(r("WAWebTimeSeries.react"), {
            animate: _,
            getChartColor: L,
            data: i,
            width: 360,
            height: 244,
            onHover: E,
          })),
          (a[14] = _),
          (a[15] = i),
          (a[16] = k))
        : (k = a[16]);
      var I;
      return (
        a[17] !== k || a[18] !== y || a[19] !== b || a[20] !== S
          ? ((I = s.jsxs("div", { children: [y, b, S, R, k] })),
            (a[17] = k),
            (a[18] = y),
            (a[19] = b),
            (a[20] = S),
            (a[21] = I))
          : (I = a[21]),
        I
      );
    }
    l.default = c;
  },
  98,
);
