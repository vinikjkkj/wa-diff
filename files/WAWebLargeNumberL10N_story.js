__d(
  "WAWebLargeNumberL10N.story",
  [
    "WAWebCommonNewsletterStrings",
    "WAWebL10N",
    "WAWebMsgType",
    "WAWebMsgViewCount",
    "WAWebRollerCounter.react",
    "WAWebShowroomStory.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = function () {};
    function c(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.n,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "xaso8d8 x1gabggj" }), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n
        ? ((i = s.jsx(
            "td",
            babelHelpers.extends({}, a, {
              children: s.jsx("code", { children: n }),
            }),
          )),
          (t[1] = n),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "xaso8d8 x1gabggj" }), (t[3] = l))
        : (l = t[3]);
      var u;
      t[4] !== n
        ? ((u = o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(
            n,
          )),
          (t[4] = n),
          (t[5] = u))
        : (u = t[5]);
      var c;
      t[6] !== u
        ? ((c = s.jsx("td", babelHelpers.extends({}, l, { children: u }))),
          (t[6] = u),
          (t[7] = c))
        : (c = t[7]);
      var d;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "xaso8d8 x1gabggj" }), (t[8] = d))
        : (d = t[8]);
      var m;
      t[9] !== n
        ? ((m = o("WAWebMsgViewCount").formatViewCount(
            n,
            o("WAWebMsgType").MSG_TYPE.CHAT,
          )),
          (t[9] = n),
          (t[10] = m))
        : (m = t[10]);
      var p;
      t[11] !== m
        ? ((p = s.jsx("td", babelHelpers.extends({}, d, { children: m }))),
          (t[11] = m),
          (t[12] = p))
        : (p = t[12]);
      var _;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "xaso8d8 x1gabggj" }), (t[13] = _))
        : (_ = t[13]);
      var f;
      t[14] !== n
        ? ((f = s.jsx(
            "td",
            babelHelpers.extends({}, _, {
              children: s.jsx(r("WAWebRollerCounter.react"), {
                counter: n,
                shouldAnimate: !1,
              }),
            }),
          )),
          (t[14] = n),
          (t[15] = f))
        : (f = t[15]);
      var g;
      return (
        t[16] !== f || t[17] !== i || t[18] !== c || t[19] !== p
          ? ((g = s.jsxs("tr", { children: [i, c, p, f] })),
            (t[16] = f),
            (t[17] = i),
            (t[18] = c),
            (t[19] = p),
            (t[20] = g))
          : (g = t[20]),
        g
      );
    }
    var d = {
      storyName: "WAWebLargeNumberL10N",
      section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
      component: u,
      description: "",
      examples: [
        {
          example: s.jsxs("table", {
            children: [
              s.jsx("thead", {
                children: s.jsxs("tr", {
                  children: [
                    s.jsx("th", {
                      className: "xaso8d8 x1gabggj",
                      children: "Count",
                    }),
                    s.jsx("th", {
                      className: "xaso8d8 x1gabggj",
                      children: "Follower Text",
                    }),
                    s.jsx("th", {
                      className: "xaso8d8 x1gabggj",
                      children: "View Text",
                    }),
                    s.jsx("th", {
                      className: "xaso8d8 x1gabggj",
                      children: "Reaction Text",
                    }),
                  ],
                }),
              }),
              s.jsx("tbody", {
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
            ],
          }),
          title: "" + r("WAWebL10N").getFullLocale(),
        },
      ],
    };
    l.default = d;
  },
  98,
);
