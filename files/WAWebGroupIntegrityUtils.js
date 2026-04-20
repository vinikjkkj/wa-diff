__d(
  "WAWebGroupIntegrityUtils",
  [
    "WAWebChatGroupUtils",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = r("WAWebFbtCommon")("Exit Group");
      return (
        o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) &&
          ((t = o("WAWebStateUtils").unproxy(e).groupMetadata) == null
            ? void 0
            : t.getParentGroupChat()) != null &&
          (n = r("WAWebFbtCommon")("Exit Community")),
        n
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.content,
        r = e.icon,
        a = e.testId,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebUISpacing").uiMargin.horiz15,
            o("WAWebUISpacing").uiMargin.top15,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = s.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
            color: "primary",
            children: n,
          })),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var u;
      return (
        t[3] !== r || t[4] !== l || t[5] !== a
          ? ((u = s.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              xstyle: i,
              testid: a,
              children: [r, l],
            })),
            (t[3] = r),
            (t[4] = l),
            (t[5] = a),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    ((l.getLeaveGroupString = u), (l.SuspendedModalBodyParagraph = c));
  },
  98,
);
