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
      var n = t.associatedMessages,
        a = t.msg,
        i = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getType,
        ]),
        l = i[0],
        s = i[1],
        m = l != null ? l : o("WAWebAck").ACK.CLOCK,
        p = c(
          function () {
            return o("WAWebMessageAssociationUIUtils").getLowestAckState(
              m,
              s,
              n,
            );
          },
          [m, n, s],
        ),
        _,
        f;
      return (
        p < o("WAWebAck").ACK.SENT
          ? (_ = u.jsx(
              o("WAWebIcChatlistClockIcon.react").IcChatlistClockIcon,
              {},
            ))
          : p === o("WAWebAck").ACK.SENT
            ? (_ = u.jsx(o("WAWebStatusCheckIcon.react").StatusCheckIcon, {}))
            : p === o("WAWebAck").ACK.RECEIVED
              ? (_ = u.jsx(
                  o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon,
                  {},
                ))
              : ((_ = u.jsx(
                  o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon,
                  {},
                )),
                (f = d.ackBlue)),
        u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(d.ack, f, d.marginEnd2),
            { children: _ },
          ),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
