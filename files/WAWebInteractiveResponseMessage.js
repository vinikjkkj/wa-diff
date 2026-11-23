__d(
  "WAWebInteractiveResponseMessage",
  [
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveGalaxyFlowResponseMessage.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgKey", "quotedMsg"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = t.msgKey,
        i = t.quotedMsg,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = o("useWAWebMsgValues").useMsgValues(
          a,
          o("WAWebMsgCasts").castToInteractiveResponseMsg,
          [
            (n = o("WAWebMsgGetters")).getType,
            n.getNativeFlowName,
            n.getInteractiveType,
            n.getInteractivePayload,
            n.getTo,
          ],
        ),
        c = s[0],
        d = s[1],
        m = s[2],
        p = s[3],
        _ = s[4];
      if (c !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) return null;
      var f = u.jsx(
        r("WAWebInteractiveBubble.react"),
        babelHelpers.extends({}, l, {
          msgKey: a,
          header: i
            ? u.jsx("div", {
                className: "x1198e8h x1lxpwgx xzueoph xw01apr",
                children: i,
              })
            : null,
          displayFooter: !1,
        }),
      );
      return d === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
        o("WAWebGalaxyFlowFeatureSupport").isFlowResponseSupportedFor({
          buttonParamsJson: p == null ? void 0 : p.buttonParamsJson,
          interactiveType: m,
          to: _,
        })
        ? u.jsx(r("WAWebInteractiveGalaxyFlowResponseMessage.react"), {
            msgKey: a,
            defaultMsg: f,
          })
        : f;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
