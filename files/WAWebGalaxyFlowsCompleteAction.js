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
    function s(t, n, a, i) {
      var l;
      if (
        a != null &&
        typeof a == "object" &&
        a.extension_message_response != null &&
        ((l = a.extension_message_response) == null ? void 0 : l.params) != null
      ) {
        var s,
          u,
          c,
          d = (s = a.extension_message_response) == null ? void 0 : s.params;
        o(
          "WAWebGalaxyDisableCTACollection",
        ).GalaxyDisableCTACollection.addMessageId(n.id.toString());
        var m =
          ((u = i.flowMetadata) == null ? void 0 : u.flow_name) != null
            ? { flowName: i.flowMetadata.flow_name }
            : null;
        o(
          "WAWebGalaxyFlowWamLoggerUtils",
        ).logStructuredMessageInteractionWAMEvent(
          i,
          t,
          n,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.FLOW_SUCCESS,
        );
        var p =
          n.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
            ? (c = n.unsafe().ctwaContext) == null
              ? void 0
              : c.sourceId
            : void 0;
        (r("WAWebInteractiveMessageSync").sendDisableCTAMutation(
          n.id,
          i.flowId,
          p,
        ),
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationEnd(2),
          o("WAWebSendGalaxyFlowResponseMessage")
            .sendGalaxyFlowResponseMessage(
              t,
              n,
              babelHelpers.extends(
                {
                  originalMsgData: babelHelpers.extends({}, m, {
                    flowId: i.flowId,
                    flowToken: i.flowToken,
                    label: i.label,
                  }),
                },
                d,
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
