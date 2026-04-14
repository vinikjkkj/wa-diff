__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup",
  ["fbt", "WAWebConfirmPopup.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.okDisabled,
        n = e.okSpinner,
        r = e.onCancel,
        a = e.onOK;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okDisabled: t,
        okSpinner: n,
        okText: s._(/*BTDS*/ "Delete"),
        onCancel: r,
        onOK: a,
        children: s._(
          /*BTDS*/ "Delete report? Deleting the report will not delete any data from your account.",
        ),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
