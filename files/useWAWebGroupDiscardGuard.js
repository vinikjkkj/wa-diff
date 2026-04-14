__d(
  "useWAWebGroupDiscardGuard",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebGroupGatingUtils",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      return c(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebGroupGatingUtils").getGroupDiscardDialogThreshold();
          return t <= 0 || e < t
            ? !0
            : yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                title: s._(/*BTDS*/ "Discard group?"),
                children: s._(
                  /*BTDS*/ "Your changes won't be saved if you leave before creating the group.",
                ),
                okText: s._(/*BTDS*/ "Discard"),
                cancelText: s._(/*BTDS*/ "Cancel"),
              });
        }),
        [e],
      );
    }
    function m(e) {
      return c(
        function (t) {
          var n = o("WAWebGroupGatingUtils").getGroupDiscardDialogThreshold();
          if (n <= 0 || e < n) {
            t == null || t();
            return;
          }
          o("WAWebModalManager").ModalManager.openSupportModal(
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "group-discard-guard",
              },
              title: s._(/*BTDS*/ "Discard change?"),
              onOK: function () {
                (o("WAWebModalManager").ModalManager.closeSupportModal(),
                  t == null || t());
              },
              okText: s._(/*BTDS*/ "Discard"),
              onCancel: function () {
                o("WAWebModalManager").ModalManager.closeSupportModal();
              },
              cancelText: s._(/*BTDS*/ "Cancel"),
              onOverlayClick: function () {
                o("WAWebModalManager").ModalManager.closeSupportModal();
              },
              children: s._(
                /*BTDS*/ "Your changes won't be saved if you leave before adding members.",
              ),
            }),
          );
        },
        [e],
      );
    }
    ((l.useGroupCreationDiscardGuard = d), (l.useAddMemberDiscardGuard = m));
  },
  226,
);
