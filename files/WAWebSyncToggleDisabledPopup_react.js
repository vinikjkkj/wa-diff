__d(
  "WAWebSyncToggleDisabledPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onOK;
      r("vulture")("qS87KIAcwljjBJPgcwUNk6n165o=");
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Turn on contact permissions")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(
            /*BTDS*/ "To sync this contact to your phone, turn on contact permissions on your primary device.",
          )),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: c })),
          (t[2] = d))
        : (d = t[2]);
      var m;
      return (
        t[3] !== n
          ? ((m = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: n,
              title: i,
              children: d,
            })),
            (t[3] = n),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
    l.default = c;
  },
  226,
);
