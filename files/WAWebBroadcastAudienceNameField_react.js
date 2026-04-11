__d(
  "WAWebBroadcastAudienceNameField.react",
  [
    "fbt",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WDSTextField.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.defaultValue,
        a = e.onFocus,
        i = e.onValueChange,
        l = e.testid,
        d = e.value,
        m = c(null),
        p = m[0],
        _ = m[1],
        f;
      t[0] !== p || t[1] !== i
        ? ((f = function (t) {
            (i(t),
              p != null && _(null),
              t.trim() === "" &&
                _(s._(/*BTDS*/ "Please enter a name for the audience")));
          }),
          (t[0] = p),
          (t[1] = i),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h = p != null,
        y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getAudienceNameInputLabel()),
          (t[3] = y))
        : (y = t[3]);
      var C;
      return (
        t[4] !== n ||
        t[5] !== g ||
        t[6] !== p ||
        t[7] !== a ||
        t[8] !== h ||
        t[9] !== l ||
        t[10] !== d
          ? ((C = u.jsx(r("WDSTextField.react"), {
              defaultValue: n,
              error: h,
              errorText: p,
              label: y,
              onFocus: a,
              onValueChange: g,
              testid: void 0,
              value: d,
            })),
            (t[4] = n),
            (t[5] = g),
            (t[6] = p),
            (t[7] = a),
            (t[8] = h),
            (t[9] = l),
            (t[10] = d),
            (t[11] = C))
          : (C = t[11]),
        C
      );
    }
    l.default = d;
  },
  226,
);
