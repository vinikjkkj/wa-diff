__d(
  "WAWebDaysPeriodCovered.story",
  [
    "WATimeUtils",
    "WAWebDaysPeriodCovered.react",
    "WAWebFlex.react",
    "WAWebShowroomStory.react",
    "WAWebSlider.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = 3600 * 24;
    function d() {
      var e = o("react-compiler-runtime").c(12),
        t = u(30),
        n = t[0],
        a = t[1],
        i = o("WATimeUtils").castToUnixTime(17319e5),
        l;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s.jsx(o("WAWebText.react").WAWebTextSmall, {
            children: "Days",
          })),
          (e[0] = l))
        : (l = e[0]);
      var d;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function (t) {
            a(t);
          }),
          (e[1] = d))
        : (d = e[1]);
      var m;
      e[2] !== n
        ? ((m = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            columnGap: 4,
            children: [
              l,
              s.jsx(o("WAWebSlider.react").Slider, {
                min: 0,
                max: 90,
                value: n,
                displayValue: !0,
                onChange: d,
              }),
            ],
          })),
          (e[2] = n),
          (e[3] = m))
        : (m = e[3]);
      var p = i - n * c,
        _;
      e[4] !== p
        ? ((_ = o("WATimeUtils").castToUnixTime(p)), (e[4] = p), (e[5] = _))
        : (_ = e[5]);
      var f;
      e[6] !== n || e[7] !== _
        ? ((f = s.jsx(r("WAWebDaysPeriodCovered.react"), {
            end: i,
            days: n,
            start: _,
          })),
          (e[6] = n),
          (e[7] = _),
          (e[8] = f))
        : (f = e[8]);
      var g;
      return (
        e[9] !== m || e[10] !== f
          ? ((g = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 4,
              children: [m, f],
            })),
            (e[9] = m),
            (e[10] = f),
            (e[11] = g))
          : (g = e[11]),
        g
      );
    }
    var m = {
      storyName: "WAWebDaysPeriodCovered",
      section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
      component: r("WAWebDaysPeriodCovered.react"),
      description:
        "Component designed to display a bar, filled based on percentage",
      examples: [
        {
          example: function () {
            return s.jsx(d, {});
          },
          title: "DaysPeriodCovered",
          description: "Component showing how may days are covered",
        },
      ],
    };
    l.default = m;
  },
  98,
);
