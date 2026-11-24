__d(
  "WAWebDisableAnsweredFormButton",
  [
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.filter(s);
      if (
        !(
          t.length === 0 ||
          !o("WAWebABProps").getABPropConfigValue("im_a2ui_appt_web")
        )
      )
        for (var n of t) {
          var a;
          o("WAWebBackendApi").frontendFireAndForget(
            "addGalaxyDisableCTAMessageId",
            {
              messageId: new (r("WAWebMsgKey"))({
                id: (a = n.quotedStanzaID) != null ? a : "",
                fromMe: !1,
                remote: n.id.remote,
              }).toString(),
            },
          );
        }
    }
    function s(e) {
      var t;
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE &&
        ((t = e.interactivePayload) == null ? void 0 : t.name) ===
          r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE &&
        e.id.fromMe &&
        !r("isStringNullOrEmpty")(e.quotedStanzaID)
      );
    }
    l.disableFormsAnsweredOnOtherDevices = e;
  },
  98,
);
