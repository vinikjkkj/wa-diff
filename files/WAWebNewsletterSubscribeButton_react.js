__d(
  "WAWebNewsletterSubscribeButton.react",
  ["fbt", "WAWebButton.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.isLoading,
        r = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Follow")), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n || t[2] !== r
          ? ((i = u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
              testid: void 0,
              onClick: r,
              spinner: n,
              disabled: n,
              children: a,
            })),
            (t[1] = n),
            (t[2] = r),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = c;
  },
  226,
);
