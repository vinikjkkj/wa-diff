__d(
  "WAWebGroupIntegrityUtils",
  [
    "WAWebChatGroupUtils",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebStateUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        marginInline15: {
          marginInlineStart: "xx6jrq6",
          marginInlineEnd: "xjx09e3",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        marginTop15: { marginTop: "xcxhlts", $$css: !0 },
      };
    function c(e) {
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
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.content,
        a = e.icon,
        i = e.testId,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [u.marginInline15, u.marginTop15]), (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] !== n
        ? ((c = s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: n,
          })),
          (t[1] = n),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== a || t[4] !== c || t[5] !== i
          ? ((d = s.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              xstyle: l,
              testid: i,
              children: [a, c],
            })),
            (t[3] = a),
            (t[4] = c),
            (t[5] = i),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    ((l.getLeaveGroupString = c), (l.SuspendedModalBodyParagraph = d));
  },
  98,
);
