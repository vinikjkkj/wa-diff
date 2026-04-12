__d(
  "WAWebGalaxyFlows.react",
  [
    "WAWebGalaxyFlowCloseEvent",
    "WAWebGalaxyFlowMediaEditorCollection",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGalaxyFlowsDrawer.react",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebWamEnumInteractionType",
    "react",
    "useWAWebRenderCallbacks",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.chat,
        n = e.messageData,
        a = e.msg,
        i = e.onCancel,
        l = r("useWAWebUIM")(),
        c = u(
          function () {
            (i(), l == null || l.requestDismiss());
          },
          [i, l],
        ),
        d = u(
          function (e) {
            e && e.id.equals(a.id) && c();
          },
          [c, a.id],
        );
      return (
        r("useWAWebRenderCallbacks")({
          onMount: function () {
            if (
              (o(
                "WAWebGalaxyFlowWamLoggerUtils",
              ).logStructuredMessageInteractionWAMEvent(
                n,
                t,
                a,
                o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START,
              ),
              a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE)
            )
              (o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.on(
                o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(
                  n.flowId,
                  a.id.id,
                ),
                i,
              ),
                o(
                  "WAWebSendNonMessageDataRequest",
                ).sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .GALAXY_FLOW_ACTION,
                  {
                    actionType: "NOTIFY_LAUNCH",
                    flowId: n.flowId,
                    stanzaId: a.id.id,
                  },
                  { fanout: !0, skipStoringMessage: !0 },
                ));
            else if (
              a.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
            ) {
              var e,
                r = (e = a.unsafe().ctwaContext) == null ? void 0 : e.sourceId;
              (r != null &&
                o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.on(
                  o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(
                    n.flowId,
                    r,
                  ),
                  i,
                ),
                o(
                  "WAWebSendNonMessageDataRequest",
                ).sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .GALAXY_FLOW_ACTION,
                  babelHelpers.extends(
                    {
                      actionType: "NOTIFY_LAUNCH",
                      flowId: n.flowId,
                      stanzaId: a.id.id,
                    },
                    r != null ? { agmId: r } : {},
                  ),
                  { fanout: !0, skipStoringMessage: !0 },
                ));
            }
            a.getCollection().on("remove", d);
          },
          onUnmount: function () {
            if (
              (n.isTerminalError !== !0 &&
                o(
                  "WAWebGalaxyFlowWamLoggerUtils",
                ).logExtensionScreenProgressWAMEvent(n, t, a),
              o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.off(
                o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(
                  n.flowId,
                  a.id.id,
                ),
              ),
              a.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE)
            ) {
              var e,
                r = (e = a.unsafe().ctwaContext) == null ? void 0 : e.sourceId;
              r != null &&
                o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.off(
                  o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(
                    n.flowId,
                    r,
                  ),
                );
            }
            (a.getCollection().off("remove", d),
              o(
                "WAWebGalaxyFlowMediaEditorCollection",
              ).GalaxyFlowMediaEditorCollection.reset());
          },
        }),
        s.jsx(r("WAWebGalaxyFlowsDrawer.react"), {
          chat: t,
          messageData: n,
          onCancel: c,
          msg: a,
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
