__d(
  "WAWebMediaUploadQualityDrawer.react",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebMediaUploadQualitySettings.react",
    "WAWebSettingsFBT",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onClose,
        a = e.ref,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { surface: "unknown", viewName: "media-upload-quality" }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebSettingsFBT").mediaUploadQualityTitle()), (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] !== n
        ? ((u = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: l,
            onBack: n,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[2] = n),
          (t[3] = u))
        : (u = t[3]);
      var c;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsx(r("WAWebDrawerBody.react"), {
            children: s.jsx(
              r("WAWebMediaUploadQualitySettings.react"),
              {},
              "media-quality",
            ),
          })),
          (t[4] = c))
        : (c = t[4]);
      var d;
      return (
        t[5] !== a || t[6] !== u
          ? ((d = s.jsxs(r("WAWebDrawer.react"), {
              ref: a,
              tsNavigationData: i,
              children: [u, c],
            })),
            (t[5] = a),
            (t[6] = u),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    l.default = u;
  },
  98,
);
