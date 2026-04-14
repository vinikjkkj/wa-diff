__d(
  "WAWebNewsletterAdminInviteWithMessageModal.react",
  [
    "fbt",
    "WAWebChatInviteWithCommentModal.react",
    "WAWebCommonNewsletterStrings",
    "WAWebParticipantListUtils",
    "WAWebText.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        customHeader: {
          backgroundColor: "x1280gxy",
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.chat,
        n = e.invitees,
        a = e.isDirectInvite,
        i = e.onClose,
        l = e.onSend,
        s = o("useWAWebModelValues").useModelValues(t, ["id", "name"]),
        d = a
          ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
              padding: [16, 24],
              xstyle: c.customHeader,
              children: o("WAWebCommonNewsletterStrings").adminPrivacyNux(),
            })
          : void 0,
        p = n.length === 1,
        _ = p ? m.title(n[0]) : void 0;
      return u.jsx(r("WAWebChatInviteWithCommentModal.react"), {
        customHeader: d,
        chatName: s.name,
        customTitle: _,
        wid: s.id,
        hideParticipantList: p,
        chatNameSubtitle: m.chatNameSubtitle(),
        initialInviteComment: m.initialInviteComment(s.name),
        invitees: n,
        onClose: i,
        onSend: l,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = {
      title: function (t) {
        var e = o("WAWebParticipantListUtils").getFirstNameForContact(t);
        return s._(/*BTDS*/ "Invite {first-name} as admin?", [
          s._param("first-name", e),
        ]);
      },
      chatNameSubtitle: function () {
        return s._(/*BTDS*/ "Channel admin invite");
      },
      initialInviteComment: function (t) {
        return s._(
          /*BTDS*/ "Accept this invitation to be an admin for my WhatsApp channel, {newsletter-name}",
          [s._param("newsletter-name", t)],
        );
      },
    };
    l.default = d;
  },
  226,
);
