__d(
  "WAWebNewsletterFullPendingInvitesList.react",
  [
    "WAWebBoolFunc",
    "WAWebCommonNewsletterStrings",
    "WAWebContactsModal.react",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterPendingInvites",
    "useWAWebNewsletterSubscribersContextMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.newsletter,
        a = e.onCancel,
        i = e.onVerification,
        l = o("useWAWebNewsletterPendingInvites").useNewsletterPendingInvites(
          n,
        ),
        u;
      t[0] !== l
        ? ((u = new Map(l.map(d))), (t[0] = l), (t[1] = u))
        : (u = t[1]);
      var m;
      t[2] !== n || t[3] !== i || t[4] !== u
        ? ((m = {
            chat: n,
            isFullModal: !0,
            onVerification: i,
            followerInformation: u,
            newsletter: n,
          }),
          (t[2] = n),
          (t[3] = i),
          (t[4] = u),
          (t[5] = m))
        : (m = t[5]);
      var p = o(
          "useWAWebNewsletterSubscribersContextMenu",
        ).useNewsletterSubscribersContextMenu(m),
        _ = p[0],
        f = p[1],
        g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = o(
            "WAWebCommonNewsletterStrings",
          ).getSearchForPendingInvitesText()),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== l
        ? ((h = new Map(l.map(c))), (t[7] = l), (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] !== f || t[10] !== a || t[11] !== l || t[12] !== h
        ? ((y = s.jsx(r("WAWebContactsModal.react"), {
            title: g,
            onCancel: a,
            contacts: l,
            isParentGroup: !0,
            newsletterRoles: h,
            openContextOnClick: !0,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            contextMenu: o("WAWebBoolFunc").returnTrue,
            onContext: f,
          })),
          (t[9] = f),
          (t[10] = a),
          (t[11] = l),
          (t[12] = h),
          (t[13] = y))
        : (y = t[13]);
      var C;
      return (
        t[14] !== y || t[15] !== _
          ? ((C = s.jsxs(s.Fragment, { children: [y, _] })),
            (t[14] = y),
            (t[15] = _),
            (t[16] = C))
          : (C = t[16]),
        C
      );
    }
    function c(e) {
      return [e.id, { pendingInvitee: !0 }];
    }
    function d(e) {
      return [e.id, { newsletterRole: null }];
    }
    l.default = u;
  },
  98,
);
