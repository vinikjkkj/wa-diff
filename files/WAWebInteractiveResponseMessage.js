__d(
  "WAWebInteractiveResponseMessage",
  [
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveGalaxyFlowResponseMessage.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["quotedMsg"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(11),
        a,
        i;
      n[0] !== t
        ? ((i = t.quotedMsg),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a.msg.nativeFlowName,
        s;
      n[3] !== i
        ? ((s = i
            ? u.jsx("div", {
                className: "x1198e8h x1lxpwgx xzueoph xw01apr",
                children: i,
              })
            : null),
          (n[3] = i),
          (n[4] = s))
        : (s = n[4]);
      var c;
      n[5] !== a || n[6] !== s
        ? ((c = u.jsx(
            r("WAWebInteractiveBubble.react"),
            babelHelpers.extends({}, a, { header: s, displayFooter: !1 }),
          )),
          (n[5] = a),
          (n[6] = s),
          (n[7] = c))
        : (c = n[7]);
      var d = c;
      if (
        l === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
        o("WAWebGalaxyFlowFeatureSupport").isFlowSupported(a.msg)
      ) {
        var m;
        return (
          n[8] !== d || n[9] !== a.msg
            ? ((m = u.jsx(
                r("WAWebInteractiveGalaxyFlowResponseMessage.react"),
                { msg: a.msg, defaultMsg: d },
              )),
              (n[8] = d),
              (n[9] = a.msg),
              (n[10] = m))
            : (m = n[10]),
          m
        );
      }
      return d;
    }
    l.default = c;
  },
  98,
);
