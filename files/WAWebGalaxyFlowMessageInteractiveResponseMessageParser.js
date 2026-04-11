__d(
  "WAWebGalaxyFlowMessageInteractiveResponseMessageParser",
  [
    "WAWebBackendApi",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      if (
        (t == null || (n = t.nativeFlowResponseMessage) == null
          ? void 0
          : n.paramsJson) != null
      ) {
        var a,
          i,
          l,
          s = JSON.parse(
            t == null || (a = t.nativeFlowResponseMessage) == null
              ? void 0
              : a.paramsJson,
          ),
          u = t.contextInfo,
          c = {
            msgData: babelHelpers.extends({}, e, {
              interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
              kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
              type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
              nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                .CTA_FLOW,
            }),
            contextInfo: u,
          };
        if (u) {
          var d = u.participant,
            m = u.stanzaId;
          if (m != null && d != null) {
            var p = new (r("WAWebMsgKey"))({
              id: m,
              fromMe: !1,
              remote: e.id.remote,
            });
            o("WAWebBackendApi").frontendFireAndForget(
              "addGalaxyDisableCTAMessageId",
              { messageId: p.toString() },
            );
          }
        }
        return s.wa_flow_response_params == null
          ? c
          : babelHelpers.extends({}, c, {
              msgData: babelHelpers.extends({}, c.msgData, {
                interactivePayload: {
                  name: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
                  buttonParamsJson: JSON.stringify(
                    babelHelpers.extends({}, s, {
                      flow_message_version:
                        (i =
                          (l = t.nativeFlowResponseMessage) == null
                            ? void 0
                            : l.version) != null
                          ? i
                          : 1,
                      flow_token: s.flow_token,
                    }),
                  ),
                },
              }),
            });
      }
    }
    l.getGalaxyMessageInteractiveResponse = e;
  },
  98,
);
