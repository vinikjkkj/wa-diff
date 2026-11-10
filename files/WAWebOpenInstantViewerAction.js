__d(
  "WAWebOpenInstantViewerAction",
  [
    "WAWebInstantViewerFeed",
    "WAWebInstantViewerLoadable",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("WAWebInstantViewerFeed").buildInstantViewerFeed(e);
      t.length !== 0 &&
        o("WAWebModalManager").ModalManager.openMedia(
          s.jsx(o("WAWebInstantViewerLoadable").WAWebInstantViewerLoadable, {
            msgs: t,
          }),
        );
    }
    l.openInstantViewer = u;
  },
  98,
);
