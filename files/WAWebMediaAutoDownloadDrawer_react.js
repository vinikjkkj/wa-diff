__d(
  "WAWebMediaAutoDownloadDrawer.react",
  [
    "fbt",
    "WAWebAutoDownloadSettings.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClose,
        n = e.ref;
      return u.jsx(r("WAWebDrawer.react"), {
        ref: n,
        tsNavigationData: {
          surface: "unknown",
          viewName: "media-auto-download",
        },
        children: u.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: s._(/*BTDS*/ "Media auto-download"),
              onBack: t,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              focusBackOrCancel: !0,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsx(
                r("WAWebAutoDownloadSettings.react"),
                {},
                "auto-download",
              ),
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
