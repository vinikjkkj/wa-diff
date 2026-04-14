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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.parentGroupAdminsLimit,
        n = e.onOk,
        r = n === void 0 ? o("WAWebModalManager").closeModalManager : n;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Community admin limit reached"),
        onOK: r,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-admin-limit",
        },
        children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
          size: "16",
          children: s._(
            /*BTDS*/ '_j{"*":"You reached the maximum of {adminsNumber} admins for this community.","_1":"You reached the maximum of 1 admin for this community."}',
            [s._plural(t, "adminsNumber")],
          ),
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.contact,
        n = e.onParticipantPromote,
        r = e.onCancel,
        a = r === void 0 ? o("WAWebModalManager").closeModalManager : r,
        i = t
          ? s._(
              /*BTDS*/ "{contact_name} must be a community admin to be an admin of its announcement group. If you make them a community admin, they can send announcements, manage groups, edit community information and use other admin tools.",
              [
                s._param(
                  "contact_name",
                  u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: o("WAWebFrontendContactGetters").getFormattedName(t),
                  }),
                ),
              ],
            )
          : s._(
              /*BTDS*/ "Community admins can send announcements, manage groups, edit community information and use other admin tools.",
            );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Make community admin?"),
        onOK: n,
        onCancel: a,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-promote-admin",
        },
        children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
          size: "16",
          children: i,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.onParticipantPromote,
        n = e.onCancel,
        r = n === void 0 ? o("WAWebModalManager").closeModalManager : n;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: t,
        okText: s._(/*BTDS*/ "Try again"),
        onCancel: r,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-promote-error",
        },
        children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
          size: "16",
          children: s._(
            /*BTDS*/ "An error occurred while making this member a community admin. Please try again.",
          ),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.onOk,
        n = t === void 0 ? o("WAWebModalManager").closeModalManager : t;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: n,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-promote-invalid-participant",
        },
        children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
          size: "16",
          children: s._(
            /*BTDS*/ "This member is not in the community announcement group, so they cannot be a community admin. Once they join the group, you can make them a community admin.",
          ),
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.onParticipantDemote,
        n = e.onCancel,
        r = n === void 0 ? o("WAWebModalManager").closeModalManager : n,
        a = e.isMe,
        i = a === void 0 ? !1 : a;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okText: s._(/*BTDS*/ "Try again"),
        onOK: t,
        onCancel: r,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-demote-error",
        },
        children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
          size: "16",
          children: i
            ? s._(
                /*BTDS*/ "An error occurred while dismissing you as a community admin. Please try again.",
              )
            : s._(
                /*BTDS*/ "An error occurred while dismissing this member as community admin. Please try again.",
              ),
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.onParticipantDemote,
        n = e.onCancel,
        r = n === void 0 ? o("WAWebModalManager").closeModalManager : n;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Dismiss as community admin?"),
        onOK: t,
        onCancel: r,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-demote-admin",
        },
        children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
          size: "16",
          children: s._(
            /*BTDS*/ "They won't be able to send announcements, manage the community or use other admin tools.",
          ),
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.CommunityAdminLimitPopup = c),
      (l.CommunityAdminPromotePopup = d),
      (l.CommunityAdminPromoteErrorPopup = m),
      (l.CommunityAdminPromoteInvalidParticipantErrorPopup = p),
      (l.CommunityAdminDemoteErrorPopup = _),
      (l.CommunityAdminDemotePopup = f));
  },
  226,
);
