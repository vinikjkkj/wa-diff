__d(
  "WAWebStatusDeletePopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModal.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.onCancel,
        r = e.onDelete,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Delete 1 status update")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(
            /*BTDS*/ "Delete this status update? It will also be deleted for everyone who received it.",
          )),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Delete")), (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Cancel")), (t[3] = m))
        : (m = t[3]);
      var p;
      return (
        t[4] !== n || t[5] !== r
          ? ((p = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.StatusReport,
              title: i,
              okText: d,
              okButtonType: "negative-destructive",
              onOK: r,
              cancelText: m,
              onCancel: n,
              children: c,
            })),
            (t[4] = n),
            (t[5] = r),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
    l.default = c;
  },
  226,
);
