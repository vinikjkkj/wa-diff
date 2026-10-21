__d(
  "WAWebPttAudioPlayedStatus",
  [
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPttAudioStatusBadge.react",
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
        audioBadge: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        audioBadgeIncoming: { backgroundColor: "x1ew7x2d", $$css: !0 },
        audioBadgeOutgoing: { backgroundColor: "x1g5lz36", $$css: !0 },
        iconBlue: { color: "x100la0o", $$css: !0 },
        iconGray: { color: "x1bbjyja", $$css: !0 },
        iconGreen: { color: "x1x3uvgb", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.msgKey,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getAck,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getAsPttLike,
            o("WAWebMsgGetters").getType,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n, a),
        l = i[0],
        c = i[1],
        m = i[2],
        p = i[3],
        _ = l === o("WAWebAck").ACK.PLAYED,
        f = c ? u.bgOutgoing : u.bgIncoming,
        g;
      t[1] !== c || t[2] !== _
        ? ((g = d(_, c)), (t[1] = c), (t[2] = _), (t[3] = g))
        : (g = t[3]);
      var h = g,
        y,
        C;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "xexx8yu xrw5ot4 x18d9i69 x7coems" }),
          (C = { className: "x11uqc5h x78zum5 x6s0dn4" }),
          (t[4] = y),
          (t[5] = C))
        : ((y = t[4]), (C = t[5]));
      var b;
      return (
        t[6] !== m || t[7] !== f || t[8] !== c || t[9] !== h || t[10] !== p
          ? ((b = s.jsx(
              "div",
              babelHelpers.extends({}, y, {
                children: s.jsx(
                  "div",
                  babelHelpers.extends({}, C, {
                    children:
                      p === "ptt" || m
                        ? s.jsx(
                            o("WAWebPttStatusIconStyleable.react")
                              .PttStatusIconStyleable,
                            { innerStyles: { background: f, primary: h } },
                          )
                        : s.jsx(r("WAWebPttAudioStatusBadge.react"), {
                            iconSize: 16,
                            iconXstyle: h,
                            xstyle: [
                              u.audioBadge,
                              c ? u.audioBadgeOutgoing : u.audioBadgeIncoming,
                            ],
                          }),
                  }),
                ),
              }),
            )),
            (t[6] = m),
            (t[7] = f),
            (t[8] = c),
            (t[9] = h),
            (t[10] = p),
            (t[11] = b))
          : (b = t[11]),
        b
      );
    }
    function d(e, t) {
      return e ? u.iconBlue : t ? u.iconGray : u.iconGreen;
    }
    l.default = c;
  },
  98,
);
