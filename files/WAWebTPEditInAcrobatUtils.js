__d(
  "WAWebTPEditInAcrobatUtils",
  [
    "WAWebMediaEditPdfModal.react",
    "WAWebModalManager",
    "WAWebTPLoggingUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.hasUnsavedAnnotations,
        n = e.mediaData,
        a = e.msg,
        i = e.onPreferenceSaved,
        l = e.source;
      (o("WAWebTPLoggingUtils").logEditInAcrobatClickEvent(t, l, n.filehash),
        o("WAWebModalManager").ModalManager.openSupportModal(
          s.jsx(r("WAWebMediaEditPdfModal.react"), {
            msg: a,
            mediaData: n,
            hasUnsavedAnnotations: t,
            onPreferenceSaved: i,
          }),
        ));
    }
    l.openEditInAcrobatModal = u;
  },
  98,
);
