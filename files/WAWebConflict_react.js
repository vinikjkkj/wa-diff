__d(
  "WAWebConflict.react",
  ["WAWebConfirmPopup.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.cancelText,
        n = e.children,
        r = e.okText,
        a = e.onCancel,
        i = e.onOK;
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        cover: !0,
        children: n,
        cancelText: t,
        onCancel: a,
        okText: r,
        onOK: i,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
