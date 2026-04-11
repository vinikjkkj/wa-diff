__d(
  "WAWebFailedToSaveContactPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onOK,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Can't save contact")), (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Can't save contact right now, try again later.")),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: l })),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== n
          ? ((d = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: n,
              title: a,
              children: c,
            })),
            (t[3] = n),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = c;
  },
  226,
);
