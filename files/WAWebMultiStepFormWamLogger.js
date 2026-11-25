__d(
  "WAWebMultiStepFormWamLogger",
  [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMultiStepFormData",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "a2ui_form",
      s = "a2ui_form_back",
      u = "a2ui_form_next",
      c = "a2ui_form_submit",
      d = "a2ui_form_close",
      m = "a2ui_form_background_close",
      p = 1;
    async function _(t) {
      for (var n of t) {
        var r,
          a = v(n);
        a != null &&
          new (o(
            "WAWebStructuredMessageReceiveWamEvent",
          ).StructuredMessageReceiveWamEvent)({
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT,
            businessOwnerJid:
              (r = o("WAWebMsgGetters").getSender(n)) == null ? void 0 : r.user,
            messageClassAttributes: JSON.stringify({ cta: e, step_count: a }),
          }).commit();
      }
    }
    function f(t, n) {
      b(
        t,
        e,
        p,
        n
          ? o("WAWebWamEnumInteractionType").INTERACTION_TYPE.AUTOMATIC_START
          : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START,
      );
    }
    function g(e, t) {
      b(e, s, t, o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_BACK);
    }
    function h(e, t) {
      b(
        e,
        u,
        t,
        o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_FORWARD,
      );
    }
    function y(e) {
      b(
        e,
        c,
        e.stepCount,
        o("WAWebWamEnumInteractionType").INTERACTION_TYPE.FLOW_SUCCESS,
      );
    }
    function C(e, t, n) {
      b(
        e,
        n === "close_button" ? d : m,
        t,
        o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_CANCEL,
      );
    }
    function b(e, t, n, r) {
      var a,
        i = e.msg,
        l = e.stepCount;
      new (o(
        "WAWebPsStructuredMessageInteractionWamEvent",
      ).PsStructuredMessageInteractionWamEvent)({
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT,
        messageInteraction: r,
        businessOwnerJid:
          (a = o("WAWebMsgGetters").getSender(i)) == null ? void 0 : a.user,
        messageClassAttributes: JSON.stringify({
          cta: t,
          step_count: l,
          current_step: n,
        }),
      }).commit();
    }
    function v(e) {
      var t;
      if (
        e.id.fromMe ||
        e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        e.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
        e.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE
      )
        return null;
      var n = (t = e.interactivePayload) == null ? void 0 : t.messageParamsJson;
      return n == null
        ? null
        : o("WAWebMultiStepFormData").countMultiStepFormSteps(n);
    }
    ((l.logMultiStepFormsReceived = _),
      (l.logMultiStepFormOpen = f),
      (l.logMultiStepFormBack = g),
      (l.logMultiStepFormNext = h),
      (l.logMultiStepFormSubmit = y),
      (l.logMultiStepFormClose = C));
  },
  98,
);
