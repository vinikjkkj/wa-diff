__d(
  "FDSDialogPageLoadingState.react",
  [
    "FDSDialogHeader.react",
    "FDSDialogLoadingStateImpl.react",
    "FDSDialogPage.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onClose,
        a;
      t[0] !== n
        ? ((a = s.jsx(r("FDSDialogHeader.react"), { onClose: n })),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsx(r("FDSDialogLoadingStateImpl.react"), {})), (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== a
          ? ((l = s.jsx(r("FDSDialogPage.react"), {
              footer: null,
              header: a,
              children: i,
            })),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = u;
  },
  98,
);
