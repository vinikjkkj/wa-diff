__d(
  "WAWebDeltaText.story",
  [
    "WAWebDeltaText.react",
    "WAWebFlex.react",
    "WAWebShowroomStory.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.delta,
        a;
      return (
        t[0] !== n
          ? ((a = s.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 16,
              align: "center",
              children: [
                s.jsx(r("WAWebDeltaText.react"), { delta: n, size: "small" }),
                s.jsx(r("WAWebDeltaText.react"), { delta: n, size: "large" }),
              ],
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t = u(0.087),
        n = t[0],
        r = t[1],
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s.jsx("input", {
            onChange: function (t) {
              return r(parseFloat(t.currentTarget.value));
            },
          })),
          (e[0] = a))
        : (a = e[0]);
      var i;
      return (
        e[1] !== n
          ? ((i = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [a, s.jsx(c, { delta: n })],
            })),
            (e[1] = n),
            (e[2] = i))
          : (i = e[2]),
        i
      );
    }
    var m = {
      storyName: "WAWebDeltaText",
      section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
      component: r("WAWebDeltaText.react"),
      description:
        "Component designed to display delta value percentage, showing visual colour indication of positive/negative/neutral change",
      examples: [
        {
          example: function () {
            return s.jsx(d, {});
          },
          title: "Custom Delta",
          description: "Try different delta values",
        },
        {
          example: function () {
            return s.jsx(c, { delta: 0.087 });
          },
          title: "Positive Delta",
          description: "Delta is positive",
        },
        {
          example: function () {
            return s.jsx(c, { delta: -0.09 });
          },
          title: "Negative Delta",
          description: "Delta is negative",
        },
        {
          example: function () {
            return s.jsx(c, { delta: 0 });
          },
          title: "Neutral Delta",
          description: "Delta is 0",
        },
        {
          example: function () {
            return s.jsx(c, { delta: 1e8 });
          },
          title: "Very Large Delta",
          description: "Massive delta value",
        },
        {
          example: function () {
            return s.jsx(c, { delta: -1e-11 });
          },
          title: "Very Small Delta",
          description: "Minimal delta value",
        },
      ],
    };
    l.default = m;
  },
  98,
);
