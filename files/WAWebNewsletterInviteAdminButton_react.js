__d(
  "WAWebNewsletterInviteAdminButton.react",
  [
    "fbt",
    "WAWebCellV2.react",
    "WAWebNewsletterAdminSelectionFlow.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebPlusIcon.react",
    "WAWebRoundShape.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.chat,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = ["newsletterMetadata"]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebModelValues").useModelValues(n, r),
        i;
      t[1] !== a
        ? ((i = function () {
            o("WAWebNewsletterAdminSelectionFlow.react").startAdminInviteFlow({
              chat: a,
            });
          }),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i;
      if (
        !o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() ||
        !o("WAWebNewsletterMembershipUtil").iAmOwner(a.newsletterMetadata)
      )
        return null;
      var s;
      return (
        t[3] !== l
          ? ((s = u.jsx(m, { onInviteAdmin: l })), (t[3] = l), (t[4] = s))
          : (s = t[4]),
        s
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onInviteAdmin,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WAWebRoundShape.react"), {
            theme: "group-modal",
            children: u.jsx(o("WAWebPlusIcon.react").PlusIcon, {
              directional: !0,
            }),
          })),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: s._(/*BTDS*/ "Invite admins"),
          })),
          (t[1] = l))
        : (l = t[1]);
      var c;
      return (
        t[2] !== n
          ? ((c = u.jsx(r("WAWebCellV2.react"), {
              testid: void 0,
              detailLeft: i,
              primary: l,
              onClick: n,
              size: "medium",
              isRefresh: !0,
            })),
            (t[2] = n),
            (t[3] = c))
          : (c = t[3]),
        c
      );
    }
    l.default = d;
  },
  226,
);
