__d(
  "WAWebSendReactionsTray.react",
  ["WAWebSendReactionsTrayV2.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "__more_reactions__";
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.disableAutoFocus,
        a = e.isParentMsgSentByMe,
        i = e.reactions,
        l = e.selectedCallback,
        u = e.selectedIndex,
        c = e.showMoreOption,
        d = n === void 0 ? !1 : n,
        m = c === void 0 ? !1 : c,
        p;
      return (
        t[0] !== d ||
        t[1] !== a ||
        t[2] !== i ||
        t[3] !== l ||
        t[4] !== u ||
        t[5] !== m
          ? ((p = s.jsx(r("WAWebSendReactionsTrayV2.react"), {
              disableAutoFocus: d,
              isParentMsgSentByMe: a,
              reactions: i,
              selectedCallback: l,
              selectedIndex: u,
              showMoreOption: m,
            })),
            (t[0] = d),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u),
            (t[5] = m),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
    ((l.MORE_REACTIONS = u), (l.SendReactionsTray = c));
  },
  98,
);
