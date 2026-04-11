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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebMsgGetters").getAck,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getAsPttLike,
          ]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(e.msg.id, r),
        i = a[0],
        l = a[1],
        s = a[2],
        d = i === o("WAWebAck").ACK.PLAYED,
        p;
      if (t[1] !== l || t[2] !== d) {
        var _;
        ((p = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          c.icon,
          m({ played: d, isOutgoingMsg: l }),
          ((_ = {}), (_[c.outgoing] = l), (_[c.incoming] = !l), _),
        )),
          (t[1] = l),
          (t[2] = d),
          (t[3] = p));
      } else p = t[3];
      var f = p,
        g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "xexx8yu xrw5ot4 x18d9i69 x7coems" }), (t[4] = g))
        : (g = t[4]);
      var h;
      t[5] !== s || t[6] !== n.type
        ? ((h =
            n.type === "ptt" || s
              ? u.jsx(o("WAWebPttStatusIcon.react").PttStatusIcon, {})
              : u.jsx(o("WAWebAudioStatusIcon.react").AudioStatusIcon, {})),
          (t[5] = s),
          (t[6] = n.type),
          (t[7] = h))
        : (h = t[7]);
      var y;
      return (
        t[8] !== f || t[9] !== h
          ? ((y = u.jsx(
              "div",
              babelHelpers.extends({}, g, {
                children: u.jsx("div", { className: f, children: h }),
              }),
            )),
            (t[8] = f),
            (t[9] = h),
            (t[10] = y))
          : (y = t[10]),
        y
      );
    }
    function m(e) {
      var t = e.isOutgoingMsg,
        n = e.played;
      return n ? c.blue : t ? c.gray : c.green;
    }
    l.default = d;
  },
  98,
);
