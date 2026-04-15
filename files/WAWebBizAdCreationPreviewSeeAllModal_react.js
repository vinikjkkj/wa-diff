__d(
  "WAWebBizAdCreationPreviewSeeAllModal.react",
  [
    "WAWebBizAdPreviewContent.react",
    "WAWebConfirmPopup.react",
    "WAWebModal.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 420,
      c = 620,
      d = { root: { width: "x3p9ev8", height: "x13041zz", $$css: !0 } };
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.adAccountID,
        a = e.loggerContext,
        i = e.onClose,
        l = e.previewData,
        u;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l
          ? ((u = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.Auto,
              children: s.jsx(r("WAWebBizAdPreviewContent.react"), {
                adAccountID: n,
                loggerContext: a,
                onClose: i,
                previewData: l,
                xstyle: d.root,
              }),
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.default = m;
  },
  98,
);
