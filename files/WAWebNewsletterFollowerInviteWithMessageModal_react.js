__d(
  "WAWebNewsletterFollowerInviteWithMessageModal.react",
  [
    "fbt",
    "WAWebChatInviteWithCommentModal.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.invitees,
        a = e.onClose,
        i = e.onSend,
        l = o("useWAWebModelValues").useModelValues(t, ["id", "name"]),
        s = n.length === 1,
        c = d.title();
      return u.jsx(r("WAWebChatInviteWithCommentModal.react"), {
        chatName: l.name,
        customTitle: c,
        wid: l.id,
        hideParticipantList: s,
        chatNameSubtitle: d.chatNameSubtitle(),
        initialInviteComment: d.initialInviteComment(l.name),
        invitees: n,
        onClose: a,
        onSend: i,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = {
      title: function () {
        return s._(/*BTDS*/ "Send invite to");
      },
      chatNameSubtitle: function () {
        return s._(/*BTDS*/ "Channel follow invite");
      },
      initialInviteComment: function (t) {
        return s._(
          /*BTDS*/ "Invitation to follow the channel, ' {newsletter-name} '",
          [s._param("newsletter-name", t)],
        );
      },
    };
    l.default = c;
  },
  226,
);
