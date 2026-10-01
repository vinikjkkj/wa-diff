__d(
  "WAWebBizAIModal",
  [
    "WAWebBizAIRelayBoundary.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(o("WAWebModal.react").Modal, {
          ariaLabel: t,
          type: o("WAWebModal.react").ModalTheme.Auto,
          children: s.jsx(r("WAWebBizAIRelayBoundary.react"), { children: e }),
        }),
      );
    }
    l.openBizAIModal = u;
  },
  98,
);
