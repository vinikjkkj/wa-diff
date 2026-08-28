__d(
  "FBWebBloksBottomsheetContainer",
  [
    "WebBloksBottomSheetBase",
    "WebBloksComponentContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        a = e.containerConfig,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.objectSet,
        u = i.renderNode,
        c;
      t[0] !== a.navbar || t[1] !== u
        ? ((c = u(a.navbar)), (t[0] = a.navbar), (t[1] = u), (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      t[3] !== l.navigationManager
        ? ((m = function () {
            l.navigationManager.close("close");
          }),
          (t[3] = l.navigationManager),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      return (
        t[5] !== n || t[6] !== p || t[7] !== d
          ? ((_ = s.jsx(r("WebBloksBottomSheetBase"), {
              closeDialog: p,
              content: n,
              height: "100%",
              name: "bk.data.screen.containerconfig.bottomsheet.Fb",
              navbar: d,
            })),
            (t[5] = n),
            (t[6] = p),
            (t[7] = d),
            (t[8] = _))
          : (_ = t[8]),
        _
      );
    }
    l.default = c;
  },
  98,
);
