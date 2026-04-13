__d(
  "WAWebNewsletterFollowerInviteWithMessageModal.react",
  [
    "fbt",
    "WAWebChatInviteWithCommentModal.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.chat,
        a = e.invitees,
        i = e.onClose,
        l = e.onSend,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = ["id", "name"]), (t[0] = s))
        : (s = t[0]);
      var c = o("useWAWebModelValues").useModelValues(n, s),
        m = a.length === 1,
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = d.title()), (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f = c.name,
        g = c.id,
        h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = d.chatNameSubtitle()), (t[2] = h))
        : (h = t[2]);
      var y;
      t[3] !== c.name
        ? ((y = d.initialInviteComment(c.name)), (t[3] = c.name), (t[4] = y))
        : (y = t[4]);
      var C;
      return (
        t[5] !== c.id ||
        t[6] !== c.name ||
        t[7] !== a ||
        t[8] !== i ||
        t[9] !== l ||
        t[10] !== m ||
        t[11] !== y
          ? ((C = u.jsx(r("WAWebChatInviteWithCommentModal.react"), {
              chatName: f,
              customTitle: _,
              wid: g,
              hideParticipantList: m,
              chatNameSubtitle: h,
              initialInviteComment: y,
              invitees: a,
              onClose: i,
              onSend: l,
            })),
            (t[5] = c.id),
            (t[6] = c.name),
            (t[7] = a),
            (t[8] = i),
            (t[9] = l),
            (t[10] = m),
            (t[11] = y),
            (t[12] = C))
          : (C = t[12]),
        C
      );
    }
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
