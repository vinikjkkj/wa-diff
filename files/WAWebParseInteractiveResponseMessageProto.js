__d(
  "WAWebParseInteractiveResponseMessageProto",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebE2EProtoUtils",
    "WAWebGalaxyFlowMessageInteractiveResponseMessageParser",
    "WAWebGalaxyFlowsUtils",
    "WAWebHsmGatingUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t,
        n = e.baseMessage,
        a = e.bizInfo,
        i = e.messageProtobuf,
        l = e.msgContext,
        s = i.interactiveResponseMessage;
      if (s != null) {
        var u =
          o("WAWebE2EProtoUtils").getInteractiveResponseMessageTypeForProto(s);
        if (
          !o(
            "WAWebHsmGatingUtils",
          ).interactiveNativeFlowResponseMessagesEnabled() ||
          !u ||
          !o("WAWebE2EProtoUtils").isInteractiveResponseMessageTypeEnabled(u)
        )
          return {
            msgData: babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: s.contextInfo,
          };
        var c =
          (t = s.nativeFlowResponseMessage) == null ? void 0 : t.paramsJson;
        if (m(c))
          return {
            msgData: babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: s.contextInfo,
          };
        if (o("WAWebGalaxyFlowsUtils").isResponseFlowSupported(s))
          return d(n, s);
        try {
          var p,
            _,
            f = o("WAWebE2EProtoUtils").getInteractiveResponsePayload({
              type: u,
              message: s,
              bizInfo: a,
              msgContext: l,
            }),
            g =
              (f == null ? void 0 : f.name) ===
              r("WAWebInteractiveMessagesNativeFlowName")
                .CALL_PERMISSION_REQUEST;
          return {
            msgData: babelHelpers.extends(
              {},
              n,
              {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                body:
                  (p = o(
                    "WAWebE2EProtoUtils",
                  ).convertToTextWithoutSpecialEmojis(
                    (_ = s.body) == null ? void 0 : _.text,
                  )) != null
                    ? p
                    : "",
                interactivePayload: f,
              },
              g
                ? { viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN }
                : null,
            ),
            contextInfo: s.contextInfo,
          };
        } catch (e) {
          return {
            msgData: babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: s.contextInfo,
          };
        }
      }
    }
    function d(t, n) {
      if (o("WAWebGalaxyFlowsUtils").isFlexibleCheckoutForm(n))
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: o("WAWebMsgType").MsgKind.Unknown,
            subtype: "phone_only_feature",
          }),
          contextInfo: n.contextInfo,
        };
      try {
        return o(
          "WAWebGalaxyFlowMessageInteractiveResponseMessageParser",
        ).getGalaxyMessageInteractiveResponse(t, n);
      } catch (r) {
        return (
          r instanceof SyntaxError
            ? o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[NFM response] failed to parse Galaxy paramsJson",
                    ])),
                )
                .sendLogs("wa-web-nfm-response-params-json-parse-failed")
            : o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[NFM response] unexpected Galaxy response failure",
                    ])),
                )
                .sendLogs("wa-web-nfm-galaxy-response-unexpected-failure"),
          {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: n.contextInfo,
          }
        );
      }
    }
    function m(e) {
      return e == null ||
        e.length <=
          o("WAWebABProps").getABPropConfigValue(
            "native_flow_response_message_params_json_max_size",
          )
        ? !1
        : (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[NFM response] paramsJson over protocol limit: ",
                  "",
                ])),
              e.length,
            )
            .sendLogs("wa-web-nfm-response-params-json-over-limit"),
          !0);
    }
    l.default = c;
  },
  98,
);
