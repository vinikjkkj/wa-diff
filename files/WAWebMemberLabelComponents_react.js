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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(12),
        n = e.chat,
        a = e.member,
        i,
        l,
        d;
      t[0] !== n || t[1] !== a
        ? ((i = { from: "chat_and_member", chat: n, member: a }),
          (l = o("WAWebMemberLabelHooks").useMemberLabelValue),
          (d = o("WAWebMemberLabelsFrontendUtils").memberLabelKeyFrom(i)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = d))
        : ((i = t[2]), (l = t[3]), (d = t[4]));
      var m = l(d);
      if (c(m, a)) {
        var p;
        t[5] !== n
          ? ((p = function (t) {
              (o("WAWebStopEvent").stopEvent(t),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebMemberLabelCreateUpdateModal.react")
                      .MemberLabelCreateUpdateModal,
                    {
                      chat: n,
                      entryPoint: o("WAWebGroupMemberTagUpdateLogger")
                        .GroupMemberTagUpdateLogger.ENTRY_POINT.MEMBER_LIST,
                    },
                  ),
                ));
            }),
            (t[5] = n),
            (t[6] = p))
          : (p = t[6]);
        var _;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "accent",
              children: s._(/*BTDS*/ "Add member tag"),
            })),
            (t[7] = _))
          : (_ = t[7]);
        var f;
        return (
          t[8] !== p
            ? ((f = u.jsx(r("WAWebUnstyledButton.react"), {
                onClick: p,
                children: _,
              })),
              (t[8] = p),
              (t[9] = f))
            : (f = t[9]),
          f
        );
      }
      if (o("WAWebMemberLabelGating").isMemberLabelReceiverEnabled()) {
        var g;
        return (
          t[10] !== i
            ? ((g = u.jsx(r("WAWebMemberLabelRenderer.react"), {
                memberLabelArgs: i,
                type: "Body2",
              })),
              (t[10] = i),
              (t[11] = g))
            : (g = t[11]),
          g
        );
      }
    }
    l.GroupParticipantContent = d;
  },
  226,
);
