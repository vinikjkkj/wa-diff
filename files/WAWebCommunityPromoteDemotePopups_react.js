__d(
  "WAWebCommunityPromoteDemotePopups.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.parentGroupAdminsLimit,
        r = e.onOk,
        a = r === void 0 ? o("WAWebModalManager").closeModalManager : r,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Community admin limit reached")), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { surface: "unknown", viewName: "community-admin-limit" }),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] !== n
        ? ((c = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "16",
            children: s._(
              /*BTDS*/ '_j{"*":"You reached the maximum of {adminsNumber} admins for this community.","_1":"You reached the maximum of 1 admin for this community."}',
              [s._plural(n, "adminsNumber")],
            ),
          })),
          (t[2] = n),
          (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== a || t[5] !== c
          ? ((d = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: i,
              onOK: a,
              tsNavigationData: l,
              children: c,
            })),
            (t[4] = a),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.contact,
        r = e.onParticipantPromote,
        a = e.onCancel,
        i = a === void 0 ? o("WAWebModalManager").closeModalManager : a,
        l;
      t[0] !== n
        ? ((l = n
            ? s._(
                /*BTDS*/ "{contact_name} must be a community admin to be an admin of its announcement group. If you make them a community admin, they can send announcements, manage groups, edit community information and use other admin tools.",
                [
                  s._param(
                    "contact_name",
                    u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: o("WAWebFrontendContactGetters").getFormattedName(
                        n,
                      ),
                    }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Community admins can send announcements, manage groups, edit community information and use other admin tools.",
              )),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Make community admin?")), (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { surface: "unknown", viewName: "community-promote-admin" }),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== c
        ? ((p = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "16",
            children: c,
          })),
          (t[4] = c),
          (t[5] = p))
        : (p = t[5]);
      var _;
      return (
        t[6] !== i || t[7] !== r || t[8] !== p
          ? ((_ = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: d,
              onOK: r,
              onCancel: i,
              tsNavigationData: m,
              children: p,
            })),
            (t[6] = i),
            (t[7] = r),
            (t[8] = p),
            (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onParticipantPromote,
        r = e.onCancel,
        a = r === void 0 ? o("WAWebModalManager").closeModalManager : r,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Try again")), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { surface: "unknown", viewName: "community-promote-error" }),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "16",
            children: s._(
              /*BTDS*/ "An error occurred while making this member a community admin. Please try again.",
            ),
          })),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== a || t[4] !== n
          ? ((d = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: n,
              okText: i,
              onCancel: a,
              tsNavigationData: l,
              children: c,
            })),
            (t[3] = a),
            (t[4] = n),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onOk,
        r = n === void 0 ? o("WAWebModalManager").closeModalManager : n,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            surface: "unknown",
            viewName: "community-promote-invalid-participant",
          }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "16",
            children: s._(
              /*BTDS*/ "This member is not in the community announcement group, so they cannot be a community admin. Once they join the group, you can make them a community admin.",
            ),
          })),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== r
          ? ((l = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: r,
              tsNavigationData: a,
              children: i,
            })),
            (t[2] = r),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onParticipantDemote,
        r = e.onCancel,
        a = e.isMe,
        i = r === void 0 ? o("WAWebModalManager").closeModalManager : r,
        l = a === void 0 ? !1 : a,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Try again")), (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { surface: "unknown", viewName: "community-demote-error" }),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== l
        ? ((m = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "16",
            children: l
              ? s._(
                  /*BTDS*/ "An error occurred while dismissing you as a community admin. Please try again.",
                )
              : s._(
                  /*BTDS*/ "An error occurred while dismissing this member as community admin. Please try again.",
                ),
          })),
          (t[2] = l),
          (t[3] = m))
        : (m = t[3]);
      var p;
      return (
        t[4] !== i || t[5] !== n || t[6] !== m
          ? ((p = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              okText: c,
              onOK: n,
              onCancel: i,
              tsNavigationData: d,
              children: m,
            })),
            (t[4] = i),
            (t[5] = n),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onParticipantDemote,
        r = e.onCancel,
        a = r === void 0 ? o("WAWebModalManager").closeModalManager : r,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Dismiss as community admin?")), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { surface: "unknown", viewName: "community-demote-admin" }),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "16",
            children: s._(
              /*BTDS*/ "They won't be able to send announcements, manage the community or use other admin tools.",
            ),
          })),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== a || t[4] !== n
          ? ((d = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: i,
              onOK: n,
              onCancel: a,
              tsNavigationData: l,
              children: c,
            })),
            (t[3] = a),
            (t[4] = n),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    ((l.CommunityAdminLimitPopup = c),
      (l.CommunityAdminPromotePopup = d),
      (l.CommunityAdminPromoteErrorPopup = m),
      (l.CommunityAdminPromoteInvalidParticipantErrorPopup = p),
      (l.CommunityAdminDemoteErrorPopup = _),
      (l.CommunityAdminDemotePopup = f));
  },
  226,
);
