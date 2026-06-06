__d(
  "WAWebSendGalaxyFlowResponseMessage",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["originalMsgData", "response_message"],
      u,
      c;
    async function d(e, t, n) {
      var r = await p(e, n, t);
      if (r)
        try {
          var a = await o("WAWebSendMsgChatAction").addAndSendMsgToChat(
            e,
            r,
          )[1];
          a.messageSendResult !==
            o("WAWebSendMsgResultAction").SendMsgResult.OK &&
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Galaxy Response message SendMsgResult failure status",
                ])),
            );
        } catch (e) {
          throw (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Galaxy Flow message send to chat failure: ",
                  "",
                ])),
              e,
            ),
            e
          );
        }
    }
    async function m(e, t) {
      return new (r("WAWebMsgKey"))({
        id: await r("WAWebMsgKey").newId(),
        from: t,
        to: e,
        participant: void 0,
        selfDir: "out",
      });
    }
    async function p(t, n, a) {
      var i = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        l = a.msgContextInfo(t.id),
        u = n.originalMsgData,
        c = n.response_message,
        d = babelHelpers.objectWithoutPropertiesLoose(n, e),
        p = n.originalMsgData,
        _ = p.flowId,
        f = p.flowName,
        g = p.flowToken,
        h = p.label,
        y =
          c != null &&
          o("WAWebABProps").getABPropConfigValue(
            "flows_termination_message_v2_sending_enabled",
          )
            ? {
                wa_flow_response_params: {
                  response_message: c,
                  flow_name: f,
                  flow_id: _,
                  title: h,
                },
              }
            : { response_message: c };
      if (_ == null || g == null || i == null || h == null) return null;
      var C = i,
        b = t.id,
        v = babelHelpers.extends({}, y, d, {
          flow_token: g,
          flow_message_version: 1,
        }),
        S = babelHelpers.extends(
          {
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
            ack: o("WAWebAck").ACK.CLOCK,
            to: b,
            from: C,
            id: await m(b, C),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            interactivePayload: {
              type: r("WAWebInteractiveMessageType").NATIVE_FLOW,
              name: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
              buttonParamsJson: JSON.stringify(v),
            },
            nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
              .CTA_FLOW,
            interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
            viewMode: "VISIBLE",
            body: s._(/*BTDS*/ "Sent").toString(),
            quotedMsg: a,
          },
          l,
        );
      return S;
    }
    l.sendGalaxyFlowResponseMessage = d;
  },
  226,
);
