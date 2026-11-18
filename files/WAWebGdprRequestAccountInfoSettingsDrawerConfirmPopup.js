__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "justknobx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.okDisabled,
        a = e.okSpinner,
        i = e.onCancel,
        l = e.onOK,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Delete")), (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = r("justknobx")._("8068")
            ? s._(
                /*BTDS*/ "Delete report? Deleting the report won't delete any data from your account.",
              )
            : s._(
                /*BTDS*/ "Delete report? Deleting the report will not delete any data from your account.",
              )),
          (t[1] = d))
        : (d = t[1]);
      var m;
      return (
        t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== l
          ? ((m = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              okDisabled: n,
              okSpinner: a,
              okText: c,
              onCancel: i,
              onOK: l,
              children: d,
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = i),
            (t[5] = l),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    l.default = c;
  },
  226,
);
