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
      c(o("WAWebInstantViewerFeed").buildInstantViewerFeed(e));
    }
    function c(e) {
      e.length !== 0 &&
        o("WAWebModalManager").ModalManager.openMedia(
          s.jsx(o("WAWebInstantViewerLoadable").WAWebInstantViewerLoadable, {
            msgs: e,
          }),
        );
    }
    ((l.openInstantViewer = u), (l.openInstantViewerOn = c));
  },
  98,
);
