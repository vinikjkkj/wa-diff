__d(
  "WAWebMultiStepFormButton",
  ["WAWebInteractiveMessagesNativeFlowName", "WAWebMultiStepFormPayloadParser"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      if (
        e.nativeFlowName !==
        r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE
      )
        return null;
      var n = (t = e.interactivePayload) == null ? void 0 : t.messageParamsJson;
      return n == null
        ? null
        : o("WAWebMultiStepFormPayloadParser").parseMultiStepFormPayload(n);
    }
    function s(e) {
      return o("WAWebMultiStepFormPayloadParser").parseMultiStepFormPayload(e);
    }
    function u(e) {
      return e.isSupportAgentBot();
    }
    ((l.getMultiStepFormInfo = e),
      (l.parseMultiStepFormButton = s),
      (l.opensMultiStepFormFromButton = u));
  },
  98,
);
