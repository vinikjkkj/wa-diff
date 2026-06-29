__d(
  "WAWebTPEditInAcrobatUtils",
  ["WAWebMediaEditPdfModal.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, a) {
      o("WAWebModalManager").ModalManager.openSupportModal(
        s.jsx(r("WAWebMediaEditPdfModal.react"), {
          msg: e,
          mediaData: t,
          hasUnsavedAnnotations: n,
          onPreferenceSaved: a,
        }),
      );
    }
    l.openEditInAcrobatModal = u;
  },
  98,
);
