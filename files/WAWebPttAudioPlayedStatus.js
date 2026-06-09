__d(
  "WAWebPttAudioPlayedStatus",
  [
    "WAWebAck",
    "WAWebAudioStatusIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPttStatusIconStyleable.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        bgIncoming: { fill: "x1yd6tts", $$css: !0 },
        bgOutgoing: { fill: "xnbcrc8", $$css: !0 },
        iconBlue: { color: "x100la0o", $$css: !0 },
        iconGray: { color: "x1bbjyja", $$css: !0 },
        iconGreen: { color: "x1x3uvgb", $$css: !0 },
      };
    function c(e) {
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
        c = a[2],
        m = i === o("WAWebAck").ACK.PLAYED,
        p = l ? u.bgOutgoing : u.bgIncoming,
        _;
      t[1] !== l || t[2] !== m
        ? ((_ = d(m, l)), (t[1] = l), (t[2] = m), (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g,
        h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "xexx8yu xrw5ot4 x18d9i69 x7coems" }),
          (h = { className: "x11uqc5h x78zum5 x6s0dn4" }),
          (t[4] = g),
          (t[5] = h))
        : ((g = t[4]), (h = t[5]));
      var y;
      return (
        t[6] !== c || t[7] !== p || t[8] !== n.type || t[9] !== f
          ? ((y = s.jsx(
              "div",
              babelHelpers.extends({}, g, {
                children: s.jsx(
                  "div",
                  babelHelpers.extends({}, h, {
                    children:
                      n.type === "ptt" || c
                        ? s.jsx(
                            o("WAWebPttStatusIconStyleable.react")
                              .PttStatusIconStyleable,
                            { innerStyles: { background: p, primary: f } },
                          )
                        : s.jsx(
                            o("WAWebAudioStatusIcon.react").AudioStatusIcon,
                            { innerStyles: { background: p, primary: f } },
                          ),
                  }),
                ),
              }),
            )),
            (t[6] = c),
            (t[7] = p),
            (t[8] = n.type),
            (t[9] = f),
            (t[10] = y))
          : (y = t[10]),
        y
      );
    }
    function d(e, t) {
      return e ? u.iconBlue : t ? u.iconGray : u.iconGreen;
    }
    l.default = c;
  },
  98,
);
