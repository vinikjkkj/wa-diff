__d(
  "WAWebFlexRow.story",
  [
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebShowroomStory.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        item: {
          width: "x1fsd2vl",
          height: "x170jfvy",
          marginTop: "xr9ek0c",
          marginInlineEnd: "xnnr8r",
          marginBottom: "xjpr12u",
          marginInlineStart: "xwklpps",
          textIndent: "xz9v999",
          backgroundColor: "xrkmrrc",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        container: {
          backgroundColor: "x10v9rud",
          paddingTop: "x123j3cw",
          paddingInlineEnd: "x1gabggj",
          paddingBottom: "xs9asl8",
          paddingInlineStart: "xaso8d8",
          height: "xpyat2d",
          width: "x1exxlbk",
          $$css: !0,
        },
      };
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(r("WAWebFlexItem.react"), {
              xstyle: u.item,
              children: "item",
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    var d = {
      storyName: "WAWebFlexRow",
      section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
      component: o("WAWebFlex.react").FlexRow,
      description: "Horizontal flex container",
      examples: [
        {
          example: function () {
            return s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: u.container,
              children: [s.jsx(c, {}), s.jsx(c, {}), s.jsx(c, {})],
            });
          },
          title: "default",
          description: "FlexRow: Use for horizontal layout.",
        },
        {
          example: function () {
            return s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: u.container,
              children: [s.jsx(c, {}), s.jsx(c, {}), s.jsx(c, {})],
            });
          },
          title: 'align = "center"',
          description: "FlexRow: Use for horizontal layout.",
        },
        {
          example: function () {
            return s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: u.container,
              children: [s.jsx(c, {}), s.jsx(c, {}), s.jsx(c, {})],
            });
          },
          title: 'align = "center", justify = "center"',
          description: "FlexRow: Use for horizontal layout.",
        },
        {
          example: function () {
            return s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "end",
              xstyle: u.container,
              children: [s.jsx(c, {}), s.jsx(c, {}), s.jsx(c, {})],
            });
          },
          title: 'align = "end"',
          description: "FlexRow: Use for horizontal layout.",
        },
        {
          example: function () {
            return s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "end",
              justify: "end",
              xstyle: u.container,
              children: [s.jsx(c, {}), s.jsx(c, {}), s.jsx(c, {})],
            });
          },
          title: 'align = "end", justify = "end"',
          description: "FlexRow: Use for horizontal layout.",
        },
      ],
    };
    l.default = d;
  },
  98,
);
