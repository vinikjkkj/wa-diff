__d(
  "WAWebOpenHatchWorkspaceMedia",
  [
    "WAWebDrawerManager",
    "WAWebHatchWorkspaceMedia",
    "WAWebHatchWorkspaceMediaViewerLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      (t === void 0 && (t = o("WAWebDrawerManager").closeDrawerRight),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          s.jsx(
            o("WAWebHatchWorkspaceMediaViewerLoadable")
              .WAWebHatchWorkspaceMediaViewerLoadable,
            {
              item: e,
              onBack: t,
              onClose: o("WAWebDrawerManager").closeDrawerRight,
              pinnedChannel: o(
                "WAWebHatchWorkspaceMedia",
              ).pinHatchWorkspaceMediaChannel(),
            },
          ),
        ));
    }
    l.openHatchWorkspaceMedia = u;
  },
  98,
);
