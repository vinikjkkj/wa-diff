__d(
  "WAWebOpenOrgAdminInviteMembersModal",
  ["WAWebOrgAdminInviteMembersModal.react", "WDSDialogBridge", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(r("WAWebOrgAdminInviteMembersModal.react"), {
          initialEmails: t,
          onClose: o("WDSDialogBridge").closeWDSDialog,
          onInviteMembers: e,
        }),
      );
    }
    l.default = u;
  },
  98,
);
