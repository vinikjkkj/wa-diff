__d(
  "WAWebGroupInviteUtils.react",
  [
    "fbt",
    "WAWebCxtUrl",
    "WAWebExternalLink.react",
    "WAWebGroupInviteLockModal.react",
    "WAWebGroupMemberLinkMode",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function () {
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebCxtUrl").getGroupInviteGrowthLockedFaqUrl(),
        );
      };
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "Invite link unavailable")), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(r("WAWebGroupInviteLockModal.react"), {
              title: t,
              onLearnMoreClicked: c,
              onOkClicked: o("WAWebModalManager").closeModalManager,
              children: s._(
                /*BTDS*/ "You can't join this group because the invite link is unavailable.",
              ),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function m(e, t, n) {
      if (
        (t === void 0 && (t = !0),
        n === void 0 &&
          (n = o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK),
        !e &&
          n !== o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK)
      ) {
        var a = s._(
          /*BTDS*/ "You can't view this group's invite link because you're not an admin.",
        );
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, { msg: a }),
        );
        return;
      }
      var i = t
          ? s._(/*BTDS*/ "Invite via link unavailable")
          : s._(/*BTDS*/ "Invite via link was unavailable"),
        l = t
          ? s._(
              /*BTDS*/ "Invite via link is temporarily unavailable for this group.",
            )
          : s._(
              /*BTDS*/ "Invite via link was temporarily unavailable for this group.",
            );
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebGroupInviteLockModal.react"), {
          title: i,
          onLearnMoreClicked: c,
          onOkClicked: o("WAWebModalManager").closeModalManager,
          children: l,
        }),
        { transition: "modal-flow" },
      );
    }
    ((l.GrowthLockedModal = d), (l.openGrowthLockedModal = m));
  },
  226,
);
