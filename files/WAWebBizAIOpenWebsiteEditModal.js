__d(
  "WAWebBizAIOpenWebsiteEditModal",
  [
    "WAWebBizAIModal",
    "WAWebBizAIWebsiteEditModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.initialWebsites,
        n = e.onSaved;
      o("WAWebBizAIModal").openBizAIModal(
        s.jsx(r("WAWebBizAIWebsiteEditModal.react"), {
          initialWebsites: t,
          onClose: o("WAWebModalManager").closeModalManager,
          onSaved: function () {
            (o("WAWebModalManager").ModalManager.close(), n());
          },
        }),
      );
    }
    l.openWebsiteEditModal = u;
  },
  98,
);
