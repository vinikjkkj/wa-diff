__d(
  "XMDSDialogLoadingState.react",
  [
    "fbt",
    "XMDSDialog.react",
    "XMDSDialogHeader.react",
    "XMDSDialogLoadingStateImpl.react",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.inline,
        a = e.withCloseButton,
        i = e.onClose,
        l = e.size,
        c = a === void 0 ? !1 : a,
        d = i === void 0 ? r("emptyFunction") : i,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Loading...")), (t[0] = m))
        : (m = t[0]);
      var p;
      t[1] !== d || t[2] !== c
        ? ((p = u.jsx(r("XMDSDialogHeader.react"), {
            onClose: d,
            withCloseButton: c,
          })),
          (t[1] = d),
          (t[2] = c),
          (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(r("XMDSDialogLoadingStateImpl.react"), {})), (t[4] = _))
        : (_ = t[4]);
      var f;
      return (
        t[5] !== n || t[6] !== d || t[7] !== l || t[8] !== p
          ? ((f = u.jsx(r("XMDSDialog.react"), {
              "aria-label": m,
              footer: null,
              header: p,
              inline: n,
              onClose: d,
              size: l,
              children: _,
            })),
            (t[5] = n),
            (t[6] = d),
            (t[7] = l),
            (t[8] = p),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    l.default = c;
  },
  226,
);
