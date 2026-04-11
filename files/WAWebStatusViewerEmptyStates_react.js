__d(
  "WAWebStatusViewerEmptyStates.react",
  ["fbt", "WAWebEmptyState.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.readReceiptsOff,
        r;
      t[0] !== n
        ? ((r = n
            ? s._(
                /*BTDS*/ "Can't see views because you disabled Read receipts in Settings > Account > Privacy",
              )
            : s._(/*BTDS*/ "No views yet")),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a;
      return (
        t[2] !== r
          ? ((a = u.jsx(o("WAWebEmptyState.react").Empty, { children: r })),
            (t[2] = r),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebEmptyState.react").Empty, {
              children: s._(/*BTDS*/ "No contacts found"),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    ((l.NoViews = c), (l.NoContactsFound = d));
  },
  226,
);
