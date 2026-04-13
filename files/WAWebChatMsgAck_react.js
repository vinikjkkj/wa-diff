__d(
  "WAWebChatMsgAck.react",
  [
    "WAWebAck",
    "WAWebIcChatlistClockIcon.react",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgGetters",
    "WAWebStatusCheckIcon.react",
    "WAWebStatusDblcheckIcon.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        ack: {
          display: "x78zum5",
          flex: "x1okw0bk",
          color: "xhslqc4",
          verticalAlign: "x16dsc37",
          width: "x1xp8n7a",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        ackBlue: { color: "x1rv0e52", $$css: !0 },
        marginEnd2: { marginInlineEnd: "x16q7b9a", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.associatedMessages,
        i = t.msg,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebMsgGetters").getAck, o("WAWebMsgGetters").getType]),
          (n[0] = l))
        : (l = n[0]);
      var s = o("useWAWebMsgValues").useMsgValues(i.id, l),
        c = s[0],
        m = s[1],
        p = c != null ? c : o("WAWebAck").ACK.CLOCK,
        _ = o("WAWebMessageAssociationUIUtils").getLowestAckState(p, m, a),
        f,
        g;
      if (_ < o("WAWebAck").ACK.SENT) {
        var h;
        (n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = u.jsx(
              o("WAWebIcChatlistClockIcon.react").IcChatlistClockIcon,
              {},
            )),
            (n[1] = h))
          : (h = n[1]),
          (f = h));
      } else if (_ === o("WAWebAck").ACK.SENT) {
        var y;
        (n[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = u.jsx(o("WAWebStatusCheckIcon.react").StatusCheckIcon, {})),
            (n[2] = y))
          : (y = n[2]),
          (f = y));
      } else if (_ === o("WAWebAck").ACK.RECEIVED) {
        var C;
        (n[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = u.jsx(
              o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon,
              {},
            )),
            (n[3] = C))
          : (C = n[3]),
          (f = C));
      } else {
        var b;
        (n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = u.jsx(
              o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon,
              {},
            )),
            (n[4] = b))
          : (b = n[4]),
          (f = b),
          (g = d.ackBlue));
      }
      var v;
      n[5] !== g
        ? ((v = (e || (e = r("stylex"))).props(d.ack, g, d.marginEnd2)),
          (n[5] = g),
          (n[6] = v))
        : (v = n[6]);
      var S;
      return (
        n[7] !== f || n[8] !== v
          ? ((S = u.jsx("div", babelHelpers.extends({}, v, { children: f }))),
            (n[7] = f),
            (n[8] = v),
            (n[9] = S))
          : (S = n[9]),
        S
      );
    }
    l.default = m;
  },
  98,
);
