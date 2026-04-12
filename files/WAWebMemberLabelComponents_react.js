__d(
  "WAWebMemberLabelComponents.react",
  [
    "fbt",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebMemberLabelCreateUpdateModal.react",
    "WAWebMemberLabelGating",
    "WAWebMemberLabelHooks",
    "WAWebMemberLabelRenderer.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebModalManager",
    "WAWebStopEvent",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n = e == null || e.trim() === "";
      return !!(
        n &&
        o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        o("WAWebMemberLabelGating").isMemberLabelSenderEnabled()
      );
    }
    function d(e) {
      var t = e.chat,
        n = e.member,
        a = { from: "chat_and_member", chat: t, member: n },
        i = o("WAWebMemberLabelHooks").useMemberLabelValue(
          o("WAWebMemberLabelsFrontendUtils").memberLabelKeyFrom(a),
        );
      if (c(i, n))
        return u.jsx(r("WAWebUnstyledButton.react"), {
          onClick: function (n) {
            (o("WAWebStopEvent").stopEvent(n),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebMemberLabelCreateUpdateModal.react")
                    .MemberLabelCreateUpdateModal,
                  {
                    chat: t,
                    entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                      .GroupMemberTagUpdateLogger.ENTRY_POINT.MEMBER_LIST,
                  },
                ),
              ));
          },
          children: u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "accent",
            children: s._(/*BTDS*/ "Add member tag"),
          }),
        });
      if (o("WAWebMemberLabelGating").isMemberLabelReceiverEnabled())
        return u.jsx(r("WAWebMemberLabelRenderer.react"), {
          memberLabelArgs: a,
          type: "Body2",
        });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.GroupParticipantContent = d));
  },
  226,
);
