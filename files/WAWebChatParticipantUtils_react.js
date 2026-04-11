__d(
  "WAWebChatParticipantUtils.react",
  [
    "WAWebChatContact.react",
    "WAWebFlatList.react",
    "WAWebMemberLabelsFrontendUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 91;
    function c(e) {
      var t = e.chat,
        n = e.contact,
        r = e.groupMetadata,
        a = e.hideStatus,
        i = a === void 0 ? !1 : a,
        l = e.secondaryProp,
        s = l === void 0 ? null : l,
        u = e.showMemberLabel,
        c =
          o("WAWebMemberLabelsFrontendUtils").memberLabelExists({
            from: "chat_and_member",
            chat: t,
            member: n.id,
          }) ||
          o("WAWebMemberLabelsFrontendUtils").shouldShowAddMemberTagCTA(
            t,
            n.id,
          );
      return (
        u &&
        t != null &&
        c &&
        o("WAWebChatContact.react").willShowSecondaryContent({
          contact: n,
          secondaryProp: s,
          groupMetadata: r,
          hideStatus: i,
        })
      );
    }
    function d(e) {
      return c(e) ? u : o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
    }
    ((l.shouldUseTallerItemHeight = c), (l.getParticipantItemHeight = d));
  },
  98,
);
