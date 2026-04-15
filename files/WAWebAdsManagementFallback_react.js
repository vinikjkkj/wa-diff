__d(
  "WAWebAdsManagementFallback.react",
  [
    "fbt",
    "WAWebAdsManagementLoadError.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onClickRetry,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Something went wrong, try again.")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      return (
        t[1] !== n
          ? ((l = u.jsx(r("WAWebAdsManagementLoadError.react"), {
              onClickRetry: n,
              errorText: i,
            })),
            (t[1] = n),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.default = c;
  },
  226,
);
