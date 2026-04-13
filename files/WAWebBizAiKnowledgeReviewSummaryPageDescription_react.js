__d(
  "WAWebBizAiKnowledgeReviewSummaryPageDescription.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var n;
        ((t = [
          (n = o("WAWebUISpacing")).uiPadding.start16,
          n.uiPadding.end16,
          n.uiMargin.bottom25,
          n.uiMargin.top48,
        ]),
          (e[0] = t));
      } else t = e[0];
      var r;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: s._(/*BTDS*/ "Your AI's new knowledge"),
          })),
          (e[1] = r))
        : (r = e[1]);
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: t,
              children: [
                r,
                u.jsx(o("WAWebText.react").WAWebTextSmall, {
                  children: s._(
                    /*BTDS*/ "Your business AI recently added knowledge it can use to help your customers in future chats.",
                  ),
                }),
              ],
            })),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    l.default = c;
  },
  226,
);
