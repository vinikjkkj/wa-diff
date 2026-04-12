__d(
  "WAWebScreenshotUpload.react",
  [
    "fbt",
    "WAWebBugnubScreenshotUploadLoadable.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.customCloseMediaModal,
        n = e.customOpenMediaModal,
        a = e.customOpenSupportModal,
        i = e.mediaState,
        l = e.onChangeState,
        c = e.onUploadStateChange,
        d = function (t) {
          (l(t), c == null || c(t.state === "uploading"));
        };
      return u.jsxs(o("WAWebFlex.react").FlexItem, {
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            marginTop: 20,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Screenshots or recordings (optional)"),
            }),
          }),
          u.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "Choose up to 3 files"),
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            marginTop: 8,
            children: u.jsx(
              o("WAWebBugnubScreenshotUploadLoadable.react")
                .WAWebBugnubScreenshotUploadLoadable,
              {
                mediaState: i,
                onChangeState: d,
                customOpenSupportModal: a,
                customOpenMediaModal: n,
                customCloseMediaModal: t,
              },
            ),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.WAWebScreenshotUpload = c));
  },
  226,
);
