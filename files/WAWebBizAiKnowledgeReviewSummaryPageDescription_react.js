__d(
  "WAWebBizAiKnowledgeReviewSummaryPageDescription.react",
  ["fbt", "WAWebFlex.react", "WAWebText.react", "WAWebUISpacing", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: [
          (e = o("WAWebUISpacing")).uiPadding.start16,
          e.uiPadding.end16,
          e.uiMargin.bottom25,
          e.uiMargin.top48,
        ],
        children: [
          u.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: s._(/*BTDS*/ "Your AI's new knowledge"),
          }),
          u.jsx(o("WAWebText.react").WAWebTextSmall, {
            children: s._(
              /*BTDS*/ "Your business AI recently added knowledge it can use to help your customers in future chats.",
            ),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
