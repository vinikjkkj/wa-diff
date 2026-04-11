__d(
  "XMDSDialogPageLoadingState.react",
  [
    "fbt",
    "XMDSDialogHeader.react",
    "XMDSDialogLoadingStateImpl.react",
    "XMDSDialogPage.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onClose,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Loading...")), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n
        ? ((i = u.jsx(r("XMDSDialogHeader.react"), {
            onClose: n,
            title: a,
            titleHidden: !0,
          })),
          (t[1] = n),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(r("XMDSDialogLoadingStateImpl.react"), {})), (t[3] = l))
        : (l = t[3]);
      var c;
      return (
        t[4] !== i
          ? ((c = u.jsx(r("XMDSDialogPage.react"), {
              footer: null,
              header: i,
              children: l,
            })),
            (t[4] = i),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = c;
  },
  226,
);
