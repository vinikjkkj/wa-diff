__d(
  "WAWebSubmitNewGroupDetails",
  [
    "WAWebModalManager",
    "WAWebUnnamedNewGroupAlreadyExistsModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = t.existingUnnamedGroup,
        a = t.onRequireName,
        i = t.onSubmit;
      if (e.subject === "" && n != null) {
        o("WAWebModalManager").ModalManager.openAlert(
          s.jsx(r("WAWebUnnamedNewGroupAlreadyExistsModal.react"), {
            existingUnnamedGroup: n,
            onCancel: function () {
              return o("WAWebModalManager").ModalManager.closeAlert();
            },
            onCreateNewGroupClick: function () {
              (o("WAWebModalManager").ModalManager.closeAlert(), a());
            },
            onEnd: function () {
              (o("WAWebModalManager").ModalManager.closeAlert(),
                o("WAWebModalManager").ModalManager.closeSupportOrModal(),
                o("WAWebModalManager").ModalManager.close());
            },
          }),
        );
        return;
      }
      i(e);
    }
    l.submitNewGroupDetails = u;
  },
  98,
);
