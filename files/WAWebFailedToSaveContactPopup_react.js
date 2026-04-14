__d(
  "WAWebFailedToSaveContactPopup.react",
  ["fbt", "WAWebConfirmPopup.react", "WAWebText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onOK,
        n = s._(/*BTDS*/ "Can't save contact"),
        r = s._(/*BTDS*/ "Can't save contact right now, try again later.");
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: t,
        title: n,
        children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: r }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
