__d(
  "WAWebOpenInstantViewerAction",
  [
    "WAWebInstantViewerFeed",
    "WAWebInstantViewerLoadable",
    "WAWebInstantViewerOpenLogger",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("WAWebInstantViewerFeed").buildInstantViewerFeed(e),
        n = t[0];
      c(
        t,
        n != null
          ? o("WAWebInstantViewerOpenLogger").startInstantViewerOpenLog(n)
          : null,
      );
    }
    function c(e, t) {
      e.length !== 0 &&
        o("WAWebModalManager").ModalManager.openMedia(
          s.jsx(o("WAWebInstantViewerLoadable").WAWebInstantViewerLoadable, {
            msgs: e,
            openLog: t,
          }),
        );
    }
    ((l.openInstantViewer = u), (l.openInstantViewerOn = c));
  },
  98,
);
