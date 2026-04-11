__d(
  "WAWebNewsletterAdminInviteWithMessageModal.react",
  [
    "fbt",
    "WAWebChatInviteWithCommentModal.react",
    "WAWebCommonNewsletterStrings",
    "WAWebParticipantListUtils",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.chat,
        a = e.invitees,
        i = e.isDirectInvite,
        l = e.onClose,
        s = e.onSend,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["id", "name"]), (t[0] = d))
        : (d = t[0]);
      var p = o("useWAWebModelValues").useModelValues(n, d),
        _;
      t[1] !== i
        ? ((_ = i
            ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                padding: [16, 24],
                xstyle: c.customHeader,
                children: o("WAWebCommonNewsletterStrings").adminPrivacyNux(),
              })
            : void 0),
          (t[1] = i),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g = a.length === 1,
        h;
      t[3] !== a[0] || t[4] !== g
        ? ((h = g ? m.title(a[0]) : void 0),
          (t[3] = a[0]),
          (t[4] = g),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C = p.name,
        b = p.id,
        v;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = m.chatNameSubtitle()), (t[6] = v))
        : (v = t[6]);
      var S;
      t[7] !== p.name
        ? ((S = m.initialInviteComment(p.name)), (t[7] = p.name), (t[8] = S))
        : (S = t[8]);
      var R;
      return (
        t[9] !== p.id ||
        t[10] !== p.name ||
        t[11] !== y ||
        t[12] !== a ||
        t[13] !== l ||
        t[14] !== s ||
        t[15] !== f ||
        t[16] !== g ||
        t[17] !== S
          ? ((R = u.jsx(r("WAWebChatInviteWithCommentModal.react"), {
              customHeader: f,
              chatName: C,
              customTitle: y,
              wid: b,
              hideParticipantList: g,
              chatNameSubtitle: v,
              initialInviteComment: S,
              invitees: a,
              onClose: l,
              onSend: s,
            })),
            (t[9] = p.id),
            (t[10] = p.name),
            (t[11] = y),
            (t[12] = a),
            (t[13] = l),
            (t[14] = s),
            (t[15] = f),
            (t[16] = g),
            (t[17] = S),
            (t[18] = R))
          : (R = t[18]),
        R
      );
    }
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
