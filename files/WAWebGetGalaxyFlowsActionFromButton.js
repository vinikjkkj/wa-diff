__d(
  "WAWebGetGalaxyFlowsActionFromButton",
  [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowsOpenDrawer",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQbmMessageClickLogEvent",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n = t.unsafe();
      return u(e, t.id, {
        chat: o("WAWebFrontendMsgGetters").getChat(n),
        galaxyFlowDisabled: n.galaxyFlowDisabled,
        isFlowDisabledForSender:
          n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          o("WAWebMsgGetters").getIsSentByMe(n),
      });
    }
    function u(t, n, a) {
      var i,
        l = a.chat,
        s = a.galaxyFlowDisabled,
        u = a.isFlowDisabledForSender,
        c = t.data;
      if (c.flowId == null) return null;
      var d = function () {
        var r,
          a =
            (r = o("WAWebMsgCollection").MsgCollection.get(n)) == null
              ? void 0
              : r.safe();
        if (
          a == null ||
          (a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
            a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE)
        ) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[galaxy-flow] flow button click skipped, message left the collection",
              ])),
          );
          return;
        }
        (o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
          msg: a.unsafe(),
          chat: l,
          buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType")
            .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.FLOW,
          nativeFlowName: t.name,
        }),
          o("WAWebGalaxyFlowsOpenDrawer").openGalaxyFlowsDrawer(
            a,
            c,
            l,
            c.flowId,
          )());
      };
      return {
        label: c.label,
        onClick: d,
        disabled: (i = u || s) != null ? i : !1,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
        testid: "cta-flow-button",
      };
    }
    ((l.getCtaFlowInteractiveAction = s),
      (l.getCtaFlowInteractiveActionFor = u));
  },
  98,
);
