__d(
  "WAWebLoadingCartFlowLoadable.react",
  ["WAWebLazyLoadLoading.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.error,
        a;
      return (
        t[0] !== n
          ? ((a = s.jsx("div", {
              children: s.jsx(r("WAWebLazyLoadLoading.react"), { error: n }),
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.default = u;
  },
  98,
);
