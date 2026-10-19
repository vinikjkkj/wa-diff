__d(
  "WAWebOpenCustomerManagerEducationDialog",
  ["WAWebCustomerManagerEducationDialog.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.initialIndex,
        n = e.units;
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebCustomerManagerEducationDialog.react"), {
          initialIndex: t,
          units: n,
        }),
      );
    }
    l.openCustomerManagerEducationDialog = u;
  },
  98,
);
