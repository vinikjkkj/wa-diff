__d(
  "WAWebBizAIModal",
  [
    "WALogger",
    "WAWebBizAIQueryError.react",
    "WAWebBizAIRelayBoundary.react",
    "WAWebErrorBoundary.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e, t) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebModal.react").Modal, {
          ariaLabel: t,
          autoHeight: !0,
          type: o("WAWebModal.react").ModalTheme.Auto,
          children: u.jsx(r("WAWebBizAIRelayBoundary.react"), { children: e }),
        }),
      );
    }
    function d(e, t) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebModal.react").Modal, {
          ariaLabel: t,
          autoHeight: !0,
          type: o("WAWebModal.react").ModalTheme.Auto,
          children: u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            fallback: function () {
              return u.jsx(r("WAWebBizAIQueryError.react"), {
                testid: "biz-ai-entrypoint-modal-error",
              });
            },
            name: "biz-ai-entrypoint-modal-boundary",
            onError: m,
            children: u.jsx(u.Fragment, { children: e }),
          }),
        }),
      );
    }
    function m(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "BizAI entry point modal render failed",
            ])),
        )
        .catching(t)
        .sendLogs("biz-ai-entrypoint-modal-render-failed");
    }
    ((l.openBizAIModal = c), (l.openBizAIEntryPointModal = d));
  },
  98,
);
