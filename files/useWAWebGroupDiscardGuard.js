__d(
  "useWAWebGroupDiscardGuard",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebGroupGatingUtils",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = o("react-compiler-runtime").c(2),
        r;
      return (
        t[0] !== e
          ? ((r = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var t = o(
                    "WAWebGroupGatingUtils",
                  ).getGroupDiscardDialogThreshold();
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
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })()),
            (t[0] = e),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function (n) {
              var t = o(
                "WAWebGroupGatingUtils",
              ).getGroupDiscardDialogThreshold();
              if (t <= 0 || e < t) {
                n == null || n();
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
                      n == null || n());
                  },
                  okText: s._(/*BTDS*/ "Discard"),
                  onCancel: _,
                  cancelText: s._(/*BTDS*/ "Cancel"),
                  onOverlayClick: p,
                  children: s._(
                    /*BTDS*/ "Your changes won't be saved if you leave before adding members.",
                  ),
                }),
              );
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function p() {
      o("WAWebModalManager").ModalManager.closeSupportModal();
    }
    function _() {
      o("WAWebModalManager").ModalManager.closeSupportModal();
    }
    ((l.useGroupCreationDiscardGuard = d), (l.useAddMemberDiscardGuard = m));
  },
  226,
);
