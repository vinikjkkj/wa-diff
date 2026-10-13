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
        n = e.msgKey,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebMsgGetters").getAck,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getAsPttLike,
            o("WAWebMsgGetters").getType,
          ]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n, r),
        i = a[0],
        l = a[1],
        c = a[2],
        m = a[3],
        p = i === o("WAWebAck").ACK.PLAYED,
        _ = l ? u.bgOutgoing : u.bgIncoming,
        f;
      t[1] !== l || t[2] !== p
        ? ((f = d(p, l)), (t[1] = l), (t[2] = p), (t[3] = f))
        : (f = t[3]);
      var g = f,
        h,
        y;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "xexx8yu xrw5ot4 x18d9i69 x7coems" }),
          (y = { className: "x11uqc5h x78zum5 x6s0dn4" }),
          (t[4] = h),
          (t[5] = y))
        : ((h = t[4]), (y = t[5]));
      var C;
      return (
        t[6] !== c || t[7] !== _ || t[8] !== g || t[9] !== m
          ? ((C = s.jsx(
              "div",
              babelHelpers.extends({}, h, {
                children: s.jsx(
                  "div",
                  babelHelpers.extends({}, y, {
                    children:
                      m === "ptt" || c
                        ? s.jsx(
                            o("WAWebPttStatusIconStyleable.react")
                              .PttStatusIconStyleable,
                            { innerStyles: { background: _, primary: g } },
                          )
                        : s.jsx(
                            o("WAWebAudioStatusIcon.react").AudioStatusIcon,
                            { innerStyles: { background: _, primary: g } },
                          ),
                  }),
                ),
              }),
            )),
            (t[6] = c),
            (t[7] = _),
            (t[8] = g),
            (t[9] = m),
            (t[10] = C))
          : (C = t[10]),
        C
      );
    }
    function d(e, t) {
      return e ? u.iconBlue : t ? u.iconGray : u.iconGreen;
    }
    l.default = c;
  },
  98,
);
