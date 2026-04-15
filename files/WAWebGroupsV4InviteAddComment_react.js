__d(
  "WAWebGroupsV4InviteAddComment.react",
  [
    "fbt",
    "WAWebChatInviteWithCommentModal.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.gid,
        a = e.onClose,
        i = e.onSend,
        l = e.participants,
        c = e.ref,
        m = e.subject,
        p;
      t[0] !== l ? ((p = l.map(d)), (t[0] = l), (t[1] = p)) : (p = t[1]);
      var _, f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Invitation to join my WhatsApp group")),
          (f = s._(/*BTDS*/ "WhatsApp group invite")),
          (t[2] = _),
          (t[3] = f))
        : ((_ = t[2]), (f = t[3]));
      var g;
      return (
        t[4] !== n ||
        t[5] !== a ||
        t[6] !== i ||
        t[7] !== c ||
        t[8] !== m ||
        t[9] !== p
          ? ((g = u.jsx(r("WAWebChatInviteWithCommentModal.react"), {
              ref: c,
              onClose: a,
              onSend: i,
              wid: n,
              invitees: p,
              chatName: m,
              initialInviteComment: _,
              chatNameSubtitle: f,
            })),
            (t[4] = n),
            (t[5] = a),
            (t[6] = i),
            (t[7] = c),
            (t[8] = m),
            (t[9] = p),
            (t[10] = g))
          : (g = t[10]),
        g
      );
    }
    function d(e) {
      return e.contact;
    }
    l.default = c;
  },
  226,
);
