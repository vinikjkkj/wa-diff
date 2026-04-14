__d(
  "WAWebGroupsV4InviteAddComment.react",
  ["fbt", "WAWebChatInviteWithCommentModal.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.gid,
        n = e.groupDesc,
        o = e.onClose,
        a = e.onSend,
        i = e.participants,
        l = e.ref,
        c = e.subject;
      return u.jsx(r("WAWebChatInviteWithCommentModal.react"), {
        ref: l,
        onClose: o,
        onSend: a,
        wid: t,
        invitees: i.map(function (e) {
          return e.contact;
        }),
        chatName: c,
        initialInviteComment: s._(
          /*BTDS*/ "Invitation to join my WhatsApp group",
        ),
        chatNameSubtitle: s._(/*BTDS*/ "WhatsApp group invite"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
