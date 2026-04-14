__d(
  "WAWebUnblockLidUserModal.react",
  [
    "fbt",
    "WAWebBlockContactAction",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      r("vulture")("Rm90vGSQDdi9zauMbkem12JDw5Y=");
      var t = e.contact;
      function a() {
        return i.apply(this, arguments);
      }
      function i() {
        return (
          (i = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield t.addPendingAction(
              o("WAWebBlockContactAction").unblockContact(t),
            ),
              o("WAWebModalManager").ModalManager.close());
          })),
          i.apply(this, arguments)
        );
      }
      var l = function () {
          return o("WAWebModalManager").ModalManager.close();
        },
        c = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          as: "span",
          children: s._(/*BTDS*/ "Unblock contact"),
        });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "unblock-lid-user" },
        onOK: a,
        okText: s._(/*BTDS*/ "Unblock"),
        onCancel: l,
        cancelText: s._(/*BTDS*/ "Cancel"),
        title: c,
        children: s._(
          /*BTDS*/ "You cannot request or share phone number for a blocked contact. Click Unblock to request\/share phone number.",
        ),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
