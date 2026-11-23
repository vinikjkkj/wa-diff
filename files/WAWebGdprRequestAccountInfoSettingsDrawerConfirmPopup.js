__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup",
  ["fbt", "WAWebConfirmPopup.react", "justknobx", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.okDisabled,
        n = e.okSpinner,
        a = e.onCancel,
        i = e.onOK;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okDisabled: t,
        okSpinner: n,
        okText: s._(/*BTDS*/ ""),
        onCancel: a,
        onOK: i,
        children: r("justknobx")._("8068")
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ ""),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
