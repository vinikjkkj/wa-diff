__d(
  "WAWebVoipPostCallSurvey.story",
  [
    "WAWebFlex.react",
    "WAWebShowroomStory.react",
    "WAWebVoipPostCallSurvey.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        storyName: "WAWebVoipPostCallSurvey",
        section: o("WAWebShowroomStory.react").StorySectionType.OTHER,
        component: r("WAWebVoipPostCallSurvey.react"),
        description:
          "Post-call survey component that asks users to rate their call quality with a 5-star rating system.",
        examples: [
          {
            example: d,
            title: "Post Call Survey (star rating, submit, dismiss)",
          },
        ],
      };
    function d() {
      var e = o("react-compiler-runtime").c(6),
        t = u("None"),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a("Survey dismissed");
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = i,
        c;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function (t) {
            a("Survey submitted with rating: " + t);
          }),
          (e[1] = c))
        : (c = e[1]);
      var d = c,
        m,
        p;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsx(o("WAWebFlex.react").FlexItem, {
            children: s.jsx("div", {
              className:
                "x1c7u0tx xyi3aci xwf5gio x1p453bz x1suzm8a xyamay9 xv54qhq x1l90r2v xf7dkkf x1htk8sl x1lpwdgh",
              children: s.jsx(r("WAWebVoipPostCallSurvey.react"), {
                onDismiss: l,
                onSubmit: d,
              }),
            }),
          })),
          (p = { className: "xhslqc4 x1pg5gke x1xmf6yo" }),
          (e[2] = m),
          (e[3] = p))
        : ((m = e[2]), (p = e[3]));
      var _;
      return (
        e[4] !== n
          ? ((_ = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 16,
              testid: "voip-post-call-survey-container",
              children: [
                m,
                s.jsxs(
                  "div",
                  babelHelpers.extends({}, p, {
                    "data-testid": "last-action",
                    children: ["Last action: ", n],
                  }),
                ),
              ],
            })),
            (e[4] = n),
            (e[5] = _))
          : (_ = e[5]),
        _
      );
    }
    l.default = c;
  },
  98,
);
