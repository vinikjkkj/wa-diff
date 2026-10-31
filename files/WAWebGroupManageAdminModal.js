__d(
  "WAWebGroupManageAdminModal",
  [
    "WAWebGroupAdminSelection.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n;
      (n = o("WAWebModalManager")).ModalManager.open(
        s.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.Tower,
          tsNavigationData: {
            surface: "unknown",
            viewName: "manage-group-admins",
          },
          onOverlayClick: n.closeModalManager,
          children: s.jsx(r("WAWebGroupAdminSelection.react"), {
            chat: e,
            groupMetadata: t,
            onConfirm: n.closeModalManager,
            onCancel: n.closeModalManager,
          }),
        }),
      );
    }
    l.openManageAdminModal = u;
  },
  98,
);
