__d(
  "WAWebPttAudioPlayedStatus",
  [
    "cx",
    "WAWebAck",
    "WAWebAudioStatusIcon.react",
    "WAWebClassnames",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPttStatusIcon.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        incoming: "_akb1",
        outgoing: "_akb2",
        green: "_akb5",
        blue: "_akb3",
        gray: "_akb4",
        icon: "_akb0",
      };
    function d(e) {
      var t,
        n = e.msg,
        r = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebFrontendMsgGetters").getAsPttLike,
        ]),
        a = r[0],
        i = r[1],
        l = r[2],
        s = a === o("WAWebAck").ACK.PLAYED,
        d = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          c.icon,
          m({ played: s, isOutgoingMsg: i }),
          ((t = {}), (t[c.outgoing] = i), (t[c.incoming] = !i), t),
        );
      return u.jsx("div", {
        className: "xexx8yu xrw5ot4 x18d9i69 x7coems",
        children: u.jsx("div", {
          className: d,
          children:
            n.type === "ptt" || l
              ? u.jsx(o("WAWebPttStatusIcon.react").PttStatusIcon, {})
              : u.jsx(o("WAWebAudioStatusIcon.react").AudioStatusIcon, {}),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.isOutgoingMsg,
        n = e.played;
      return n ? c.blue : t ? c.gray : c.green;
    }
    l.default = d;
  },
  98,
);
