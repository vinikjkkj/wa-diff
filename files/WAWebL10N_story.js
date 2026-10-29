__d(
  "WAWebL10N.story",
  ["WAWebL10N", "WAWebShowroomStory.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = function () {};
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.n,
        a;
      t[0] !== n
        ? ((a = s.jsx("td", { children: s.jsx("code", { children: n }) })),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== n
        ? ((i = r("WAWebL10N").d(n)), (t[2] = n), (t[3] = i))
        : (i = t[3]);
      var l;
      t[4] !== i
        ? ((l = s.jsxs("td", { children: ["\u2192 ", i] })),
          (t[4] = i),
          (t[5] = l))
        : (l = t[5]);
      var u;
      return (
        t[6] !== a || t[7] !== l
          ? ((u = s.jsxs("tr", { children: [a, l] })),
            (t[6] = a),
            (t[7] = l),
            (t[8] = u))
          : (u = t[8]),
        u
      );
    }
    var d = {
      storyName: "WAWebL10N",
      section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
      component: u,
      description: "",
      examples: [
        {
          example: s.jsx("table", {
            children: s.jsx("tbody", {
              children: [
                0,
                1,
                10,
                Math.pow(10, 2),
                123,
                Math.pow(10, 3),
                1234,
                Math.pow(10, 4),
                12345,
                Math.pow(10, 5),
                123456,
                Math.pow(10, 6),
                1234567,
                Math.pow(10, 7),
                12345678,
                Math.pow(10, 8),
                Math.pow(10, 9),
              ].map(function (e) {
                return s.jsx(c, { n: e }, e);
              }),
            }),
          }),
          title: "" + r("WAWebL10N").getFullLocale(),
        },
      ],
    };
    l.default = d;
  },
  98,
);
