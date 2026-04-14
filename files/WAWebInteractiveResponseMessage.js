__d(
  "WAWebInteractiveResponseMessage",
  [
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveGalaxyFlowResponseMessage.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["quotedMsg"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.quotedMsg,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.msg.nativeFlowName,
        l = u.jsx(
          r("WAWebInteractiveBubble.react"),
          babelHelpers.extends({}, a, {
            header: n
              ? u.jsx("div", {
                  className: "x1198e8h x1lxpwgx xzueoph xw01apr",
                  children: n,
                })
              : null,
            displayFooter: !1,
          }),
        );
      return i === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
        o("WAWebGalaxyFlowFeatureSupport").isFlowSupported(a.msg)
        ? u.jsx(r("WAWebInteractiveGalaxyFlowResponseMessage.react"), {
            msg: a.msg,
            defaultMsg: l,
          })
        : l;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
