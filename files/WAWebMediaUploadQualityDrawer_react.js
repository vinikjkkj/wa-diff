__d(
  "WAWebMediaUploadQualityDrawer.react",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebMediaUploadQualitySettings.react",
    "WAWebSettingsFBT",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.onClose,
        n = e.ref;
      return s.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        tsNavigationData: {
          surface: "unknown",
          viewName: "media-upload-quality",
        },
        children: [
          s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: o("WAWebSettingsFBT").mediaUploadQualityTitle(),
            onBack: t,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          s.jsx(r("WAWebDrawerBody.react"), {
            children: s.jsx(
              r("WAWebMediaUploadQualitySettings.react"),
              {},
              "media-quality",
            ),
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
