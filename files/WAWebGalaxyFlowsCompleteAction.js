__d(
  "WAWebGalaxyFlowsCompleteAction",
  [
    "WALogger",
    "WAWebGalaxyDisableCTACollection",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebInteractiveMessageSync",
    "WAWebMsgType",
    "WAWebSendGalaxyFlowResponseMessage",
    "WAWebWamEnumInteractionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n,
        a = t.chat,
        i = t.messageData,
        l = t.msg,
        s = t.payload;
      if (
        s != null &&
        typeof s == "object" &&
        s.extension_message_response != null &&
        ((n = s.extension_message_response) == null ? void 0 : n.params) != null
      ) {
        var u,
          c,
          d,
          m = (u = s.extension_message_response) == null ? void 0 : u.params;
        o(
          "WAWebGalaxyDisableCTACollection",
        ).GalaxyDisableCTACollection.addMessageId(l.id.toString());
        var p =
          ((c = i.flowMetadata) == null ? void 0 : c.flow_name) != null
            ? { flowName: i.flowMetadata.flow_name }
            : null;
        o(
          "WAWebGalaxyFlowWamLoggerUtils",
        ).logStructuredMessageInteractionWAMEvent(
          i,
          a,
          l,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.FLOW_SUCCESS,
        );
        var _ =
          l.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
            ? (d = l.unsafe().ctwaContext) == null
              ? void 0
              : d.sourceId
            : void 0;
        (r("WAWebInteractiveMessageSync").sendDisableCTAMutation(
          l.id,
          i.flowId,
          _,
        ),
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationEnd(2),
          o("WAWebSendGalaxyFlowResponseMessage")
            .sendGalaxyFlowResponseMessage(
              a,
              l,
              babelHelpers.extends(
                {
                  originalMsgData: babelHelpers.extends({}, p, {
                    flowId: i.flowId,
                    flowToken: i.flowToken,
                    label: i.label,
                  }),
                },
                m,
              ),
            )
            .catch(function (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Galaxy Response message: Failed to send response message: ",
                    "",
                  ])),
                t,
              );
            }));
      }
    }
    l.onFlowsCompleteAction = s;
  },
  98,
);
