__d(
  "WAWebInteractiveResponseMessage",
  [
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveGalaxyFlowResponseMessage.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgKey", "quotedMsg"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(14),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.msgKey),
          (l = t.quotedMsg),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s;
      if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
        var c;
        ((s = [
          (c = o("WAWebMsgGetters")).getType,
          c.getNativeFlowName,
          c.getInteractiveType,
          c.getInteractivePayload,
          c.getTo,
        ]),
          (n[4] = s));
      } else s = n[4];
      var d = o("useWAWebMsgValues").useMsgValues(a, s),
        m = d[0],
        p = d[1],
        _ = d[2],
        f = d[3],
        g = d[4];
      if (m !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) return null;
      var h;
      n[5] !== l
        ? ((h = l
            ? u.jsx("div", {
                className: "x1198e8h x1lxpwgx xzueoph xw01apr",
                children: l,
              })
            : null),
          (n[5] = l),
          (n[6] = h))
        : (h = n[6]);
      var y;
      n[7] !== a || n[8] !== i || n[9] !== h
        ? ((y = u.jsx(
            r("WAWebInteractiveBubble.react"),
            babelHelpers.extends({}, i, {
              msgKey: a,
              header: h,
              displayFooter: !1,
            }),
          )),
          (n[7] = a),
          (n[8] = i),
          (n[9] = h),
          (n[10] = y))
        : (y = n[10]);
      var C = y;
      if (
        p === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
        o("WAWebGalaxyFlowFeatureSupport").isFlowResponseSupportedFor({
          buttonParamsJson: f == null ? void 0 : f.buttonParamsJson,
          interactiveType: _,
          to: g,
        })
      ) {
        var b;
        return (
          n[11] !== C || n[12] !== a
            ? ((b = u.jsx(
                r("WAWebInteractiveGalaxyFlowResponseMessage.react"),
                { msgKey: a, defaultMsg: C },
              )),
              (n[11] = C),
              (n[12] = a),
              (n[13] = b))
            : (b = n[13]),
          b
        );
      }
      return C;
    }
    l.default = c;
  },
  98,
);
