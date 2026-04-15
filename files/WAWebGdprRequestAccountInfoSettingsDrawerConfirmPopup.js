__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup",
  ["fbt", "WAWebConfirmPopup.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.okDisabled,
        r = e.okSpinner,
        a = e.onCancel,
        i = e.onOK,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Delete")), (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(
            /*BTDS*/ "Delete report? Deleting the report will not delete any data from your account.",
          )),
          (t[1] = c))
        : (c = t[1]);
      var d;
      return (
        t[2] !== n || t[3] !== r || t[4] !== a || t[5] !== i
          ? ((d = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              okDisabled: n,
              okSpinner: r,
              okText: l,
              onCancel: a,
              onOK: i,
              children: c,
            })),
            (t[2] = n),
            (t[3] = r),
            (t[4] = a),
            (t[5] = i),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    l.default = c;
  },
  226,
);
