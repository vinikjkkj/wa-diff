__d(
  "WAWebScreenshotUpload.react",
  [
    "fbt",
    "WAWebBugnubScreenshotUploadLoadable.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.customCloseMediaModal,
        a = e.customOpenMediaModal,
        i = e.customOpenSupportModal,
        l = e.mediaState,
        c = e.onChangeState,
        d = e.onUploadStateChange,
        m;
      t[0] !== c || t[1] !== d
        ? ((m = function (t) {
            (c(t), d == null || d(t.state === "uploading"));
          }),
          (t[0] = c),
          (t[1] = d),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(o("WAWebFlex.react").FlexItem, {
            marginTop: 20,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Screenshots or recordings (optional)"),
            }),
          })),
          (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "Choose up to 3 files"),
          })),
          (t[4] = f))
        : (f = t[4]);
      var g;
      return (
        t[5] !== n || t[6] !== a || t[7] !== i || t[8] !== p || t[9] !== l
          ? ((g = u.jsxs(o("WAWebFlex.react").FlexItem, {
              children: [
                _,
                f,
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  justify: "all",
                  marginTop: 8,
                  children: u.jsx(
                    o("WAWebBugnubScreenshotUploadLoadable.react")
                      .WAWebBugnubScreenshotUploadLoadable,
                    {
                      mediaState: l,
                      onChangeState: p,
                      customOpenSupportModal: i,
                      customOpenMediaModal: a,
                      customCloseMediaModal: n,
                    },
                  ),
                }),
              ],
            })),
            (t[5] = n),
            (t[6] = a),
            (t[7] = i),
            (t[8] = p),
            (t[9] = l),
            (t[10] = g))
          : (g = t[10]),
        g
      );
    }
    l.WAWebScreenshotUpload = c;
  },
  226,
);
