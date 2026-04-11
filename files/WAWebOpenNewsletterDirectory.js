__d(
  "WAWebOpenNewsletterDirectory",
  [
    "WAWebModalManager",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.tosAcceptCallback;
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebPDFNModal.react"), {
          pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
          verifyTosAccepted: o("WAWebPDFNGatingUtils")
            .hasAckedNewsletterNuxOrTos,
          runIfTosAccepted: function () {
            t();
          },
        }),
      );
    }
    l.openNewsletterDirectory = u;
  },
  98,
);
