__d(
  "WAWebSendReactionsTray.react",
  ["WAWebSendReactionsTrayV2.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "__more_reactions__";
    function c(e) {
      var t = e.disableAutoFocus,
        n = t === void 0 ? !1 : t,
        o = e.isInlineMode,
        a = e.isParentMsgSentByMe,
        i = e.reactions,
        l = e.selectedCallback,
        u = e.selectedIndex,
        c = e.showMoreOption,
        d = c === void 0 ? !1 : c;
      return s.jsx(r("WAWebSendReactionsTrayV2.react"), {
        disableAutoFocus: n,
        isParentMsgSentByMe: a,
        reactions: i,
        selectedCallback: l,
        selectedIndex: u,
        showMoreOption: d,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.MORE_REACTIONS = u),
      (l.SendReactionsTray = c));
  },
  98,
);
