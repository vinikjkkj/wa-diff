__d(
  "WAWebGetGalaxyFlowsActionFromButton",
  [
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowsOpenDrawer",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQbmMessageClickLogEvent",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = t.unsafe(),
        i = o("WAWebFrontendMsgGetters").getChat(a),
        l = e.data;
      if (l.flowId == null) return null;
      var s = a.galaxyFlowDisabled,
        u =
          a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          o("WAWebMsgGetters").getIsSentByMe(a),
        c = function () {
          (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
            msg: a,
            chat: i,
            buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType")
              .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.FLOW,
            nativeFlowName: e.name,
          }),
            o("WAWebGalaxyFlowsOpenDrawer").openGalaxyFlowsDrawer(
              t,
              l,
              i,
              l.flowId,
            )());
        };
      return {
        label: l.label,
        onClick: c,
        disabled: (n = u || s) != null ? n : !1,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
      };
    }
    l.getCtaFlowInteractiveAction = e;
  },
  98,
);
