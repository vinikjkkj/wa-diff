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
      var t = e.content,
        n = e.icon,
        r = e.testId;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        justify: "center",
        align: "center",
        xstyle: [
          o("WAWebUISpacing").uiMargin.horiz15,
          o("WAWebUISpacing").uiMargin.top15,
        ],
        testid: void 0,
        children: [
          n,
          s.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
            color: "primary",
            children: t,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.getLeaveGroupString = u),
      (l.SuspendedModalBodyParagraph = c));
  },
  98,
);
