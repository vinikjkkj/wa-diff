__d(
  "WAWebMultiStepFormWamLogger",
  [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMultiStepFormData",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "a2ui_form";
    async function s(t) {
      for (var n of t) {
        var r,
          a = u(n);
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
    function u(e) {
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
    l.logMultiStepFormsReceived = s;
  },
  98,
);
