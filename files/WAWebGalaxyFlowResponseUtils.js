__d(
  "WAWebGalaxyFlowResponseUtils",
  ["WALogger", "WAWebInteractiveMessagesNativeFlowName", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if (
        t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE ||
        t.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW ||
        t.interactivePayload == null ||
        t.interactivePayload.buttonParamsJson == null
      )
        return !1;
      var n;
      try {
        n = JSON.parse(t.interactivePayload.buttonParamsJson);
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Galaxy Response message: Failed to parse the paramsJson: ",
                "",
              ])),
            t,
          ),
          !1
        );
      }
      return !(n == null || n.wa_flow_response_params == null);
    }
    l.isGalaxyFlowsResponseBubble = s;
  },
  98,
);
