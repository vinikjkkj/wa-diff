__d(
  "FDSDialogLoadingState.react",
  [
    "fbt",
    "CometDialogLoadingStateContext",
    "FDSDialog.react",
    "FDSDialogLoadingStateHeader.react",
    "FDSDialogLoadingStateImpl.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e["aria-label"],
        a = e.onClose,
        i = e.withCloseButton,
        l;
      t[0] !== n
        ? ((l = n != null ? n : s._(/*BTDS*/ "Loading...")),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] !== a || t[3] !== i
        ? ((c = u.jsx(r("FDSDialogLoadingStateHeader.react"), {
            onClose: a,
            withCloseButton: i,
          })),
          (t[2] = a),
          (t[3] = i),
          (t[4] = c))
        : (c = t[4]);
      var d;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(r("FDSDialogLoadingStateImpl.react"), {})), (t[5] = d))
        : (d = t[5]);
      var m;
      return (
        t[6] !== a || t[7] !== l || t[8] !== c
          ? ((m = u.jsx(r("CometDialogLoadingStateContext").Provider, {
              value: !0,
              children: u.jsx(r("FDSDialog.react"), {
                "aria-label": l,
                footer: null,
                header: c,
                onClose: a,
                children: d,
              }),
            })),
            (t[6] = a),
            (t[7] = l),
            (t[8] = c),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    l.default = c;
  },
  226,
);
