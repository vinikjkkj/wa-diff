__d(
  "WAWebStatusDeletePopup.react",
  ["fbt", "WAWebConfirmPopup.react", "WAWebModal.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onCancel,
        n = e.onDelete,
        r = s._(/*BTDS*/ "Delete 1 status update"),
        a = s._(
          /*BTDS*/ "Delete this status update? It will also be deleted for everyone who received it.",
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.StatusReport,
        title: r,
        okText: s._(/*BTDS*/ "Delete"),
        okButtonType: "negative-destructive",
        onOK: n,
        cancelText: s._(/*BTDS*/ "Cancel"),
        onCancel: t,
        children: a,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
