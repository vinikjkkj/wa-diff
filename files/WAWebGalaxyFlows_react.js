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
    "react-compiler-runtime",
    "useWAWebRenderCallbacks",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.chat,
        a = e.messageData,
        i = e.msg,
        l = e.onCancel,
        u = r("useWAWebUIM")(),
        c;
      t[0] !== l || t[1] !== u
        ? ((c = function () {
            (l(), u == null || u.requestDismiss());
          }),
          (t[0] = l),
          (t[1] = u),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      t[3] !== d || t[4] !== i.id
        ? ((m = function (t) {
            t && t.id.equals(i.id) && d();
          }),
          (t[3] = d),
          (t[4] = i.id),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      t[6] !== n || t[7] !== p || t[8] !== a || t[9] !== i || t[10] !== l
        ? ((_ = function () {
            if (
              (o(
                "WAWebGalaxyFlowWamLoggerUtils",
              ).logStructuredMessageInteractionWAMEvent(
                a,
                n,
                i,
                o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START,
              ),
              i.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE)
            )
              (o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.on(
                o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(
                  a.flowId,
                  i.id.id,
                ),
                l,
              ),
                o(
                  "WAWebSendNonMessageDataRequest",
                ).sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .GALAXY_FLOW_ACTION,
                  {
                    actionType: "NOTIFY_LAUNCH",
                    flowId: a.flowId,
                    stanzaId: i.id.id,
                  },
                  { fanout: !0, skipStoringMessage: !0 },
                ));
            else if (
              i.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
            ) {
              var e,
                t = (e = i.unsafe().ctwaContext) == null ? void 0 : e.sourceId;
              (t != null &&
                o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.on(
                  o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(
                    a.flowId,
                    t,
                  ),
                  l,
                ),
                o(
                  "WAWebSendNonMessageDataRequest",
                ).sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .GALAXY_FLOW_ACTION,
                  babelHelpers.extends(
                    {
                      actionType: "NOTIFY_LAUNCH",
                      flowId: a.flowId,
                      stanzaId: i.id.id,
                    },
                    t != null ? { agmId: t } : {},
                  ),
                  { fanout: !0, skipStoringMessage: !0 },
                ));
            }
            i.getCollection().on("remove", p);
          }),
          (t[6] = n),
          (t[7] = p),
          (t[8] = a),
          (t[9] = i),
          (t[10] = l),
          (t[11] = _))
        : (_ = t[11]);
      var f;
      t[12] !== n || t[13] !== p || t[14] !== a || t[15] !== i
        ? ((f = function () {
            if (
              (a.isTerminalError !== !0 &&
                o(
                  "WAWebGalaxyFlowWamLoggerUtils",
                ).logExtensionScreenProgressWAMEvent(a, n, i),
              o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.off(
                o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(
                  a.flowId,
                  i.id.id,
                ),
              ),
              i.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE)
            ) {
              var e,
                t = (e = i.unsafe().ctwaContext) == null ? void 0 : e.sourceId;
              t != null &&
                o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.off(
                  o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(
                    a.flowId,
                    t,
                  ),
                );
            }
            (i.getCollection().off("remove", p),
              o(
                "WAWebGalaxyFlowMediaEditorCollection",
              ).GalaxyFlowMediaEditorCollection.reset());
          }),
          (t[12] = n),
          (t[13] = p),
          (t[14] = a),
          (t[15] = i),
          (t[16] = f))
        : (f = t[16]);
      var g;
      (t[17] !== _ || t[18] !== f
        ? ((g = { onMount: _, onUnmount: f }),
          (t[17] = _),
          (t[18] = f),
          (t[19] = g))
        : (g = t[19]),
        r("useWAWebRenderCallbacks")(g));
      var h;
      return (
        t[20] !== n || t[21] !== d || t[22] !== a || t[23] !== i
          ? ((h = s.jsx(r("WAWebGalaxyFlowsDrawer.react"), {
              chat: n,
              messageData: a,
              onCancel: d,
              msg: i,
            })),
            (t[20] = n),
            (t[21] = d),
            (t[22] = a),
            (t[23] = i),
            (t[24] = h))
          : (h = t[24]),
        h
      );
    }
    l.default = c;
  },
  98,
);
