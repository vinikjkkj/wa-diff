__d(
  "WAWebDonutChart.story",
  [
    "WAWebChartUtils",
    "WAWebCheckBox.react",
    "WAWebDonutChart.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        storyName: "WAWebDonutChart",
        component: r("WAWebDonutChart.react"),
        description: "Donut chart.",
        descriptionNode: s.jsx("div", { children: "Donut chart" }),
        examples: [
          {
            example: function () {
              return s.jsx(d, { data: [0.277, 0.723] });
            },
            title: "Two slices",
          },
          {
            example: function () {
              return s.jsx(d, { data: [0.2, 0.2, 0.6] });
            },
            title: "Many slices",
          },
          {
            example: function () {
              return s.jsx(d, { data: [1] });
            },
            title: "One slice (no gaps)",
          },
        ],
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.data,
        a = u(!1),
        i = a[0],
        l = a[1],
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsx("label", {
            htmlFor: "loading-checkbox",
            style: { marginRight: 8 },
            children: "Animated:",
          })),
          (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] !== i
        ? ((d = function () {
            return l(!i);
          }),
          (t[1] = i),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== i || t[4] !== d
        ? ((m = s.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              c,
              s.jsx(o("WAWebCheckBox.react").CheckBox, {
                id: "loading-checkbox",
                checked: i,
                onChange: d,
              }),
            ],
          })),
          (t[3] = i),
          (t[4] = d),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = o("WAWebChartUtils").makeGetChartColorFromTheme("light")),
          (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== i || t[8] !== n
        ? ((_ = s.jsx(r("WAWebDonutChart.react"), {
            animate: i,
            size: 300,
            thickness: 50,
            data: n,
            getChartColor: p,
          })),
          (t[7] = i),
          (t[8] = n),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      return (
        t[10] !== m || t[11] !== _
          ? ((f = s.jsxs(s.Fragment, { children: [m, _] })),
            (t[10] = m),
            (t[11] = _),
            (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    l.default = c;
  },
  98,
);
