__d(
  "WAWebEmptyResponsesList.react",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebQuestions.flow",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
    "useWAWebNewsletterResponseMessages",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        column: { maxHeight: "x1w83phm", $$css: !0 },
        cta: { marginTop: "x1nmyh1g", $$css: !0 },
        msg: { maxWidth: "x1cxeki3", $$css: !0 },
      };
    function d(e) {
      var t = e.onTryAgain,
        n = e.onViewAllResponses,
        a = e.selectedFilter,
        i = e.status,
        l = e.testid,
        d,
        m,
        p;
      return (
        i ===
        o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus
          .SUCCESS
          ? ((d =
              a === o("WAWebQuestions.flow").ResponsesFilterType.ALL
                ? s._(/*BTDS*/ "No responses to this question")
                : a === o("WAWebQuestions.flow").ResponsesFilterType.CONTACTS
                  ? s._(/*BTDS*/ "No responses from contacts")
                  : a === o("WAWebQuestions.flow").ResponsesFilterType.REPLIED
                    ? s._(/*BTDS*/ "No responses in replied")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            a,
                        );
                      })()),
            a !== o("WAWebQuestions.flow").ResponsesFilterType.ALL &&
              ((m = s._(/*BTDS*/ "View all responses")), (p = n)))
          : ((m = r("WAWebFbtCommon")("Try again")),
            (p = t),
            i ===
            o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus
              .OFFLINE
              ? (d = s._(
                  /*BTDS*/ "Check your internet connection and try again.",
                ))
              : i ===
                  o("useWAWebNewsletterResponseMessages")
                    .FetchQuestionResponsesStatus.ERROR &&
                (d = s._(
                  /*BTDS*/ "WhatsApp can\u2019t load responses right now. Please try again later.",
                ))),
        u.jsxs(o("WAWebFlex.react").FlexColumn, {
          testid: void 0,
          align: "center",
          justify: "center",
          grow: 1,
          xstyle: c.column,
          children: [
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              xstyle: c.msg,
              colorName: "contentDeemphasized",
              textAlign: "center",
              children: d,
            }),
            m != null &&
              u.jsx(r("WAWebUnstyledButton.react"), {
                onClick: p,
                xstyle: c.cta,
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentActionEmphasized",
                  children: m,
                }),
              }),
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
