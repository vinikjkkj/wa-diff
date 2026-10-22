__d(
  "WAWebPttAudioPlayedStatus",
  [
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPttAudioStatusBadge.react",
    "WDSIconIcHeadphonesFilled.react",
    "WDSIconIcKeyboardVoiceFilled.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        audioBadge: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        audioBadgeIncoming: { backgroundColor: "x1ew7x2d", $$css: !0 },
        audioBadgeOutgoing: { backgroundColor: "x1g5lz36", $$css: !0 },
        iconBlue: { color: "x100la0o", $$css: !0 },
        iconGray: { color: "x1bbjyja", $$css: !0 },
        iconGreen: { color: "x1x3uvgb", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
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
        f;
      t[1] !== c || t[2] !== _
        ? ((f = d(_, c)), (t[1] = c), (t[2] = _), (t[3] = f))
        : (f = t[3]);
      var g = f,
        h = p === "ptt" || m,
        y,
        C;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "xexx8yu xrw5ot4 x18d9i69 x7coems" }),
          (C = { className: "x11uqc5h x78zum5 x6s0dn4" }),
          (t[4] = y),
          (t[5] = C))
        : ((y = t[4]), (C = t[5]));
      var b = r(
          h
            ? "WDSIconIcKeyboardVoiceFilled.react"
            : "WDSIconIcHeadphonesFilled.react",
        ),
        v = h ? "ptt-status" : "audio-status",
        S = c ? u.audioBadgeOutgoing : u.audioBadgeIncoming,
        R;
      t[6] !== S
        ? ((R = [u.audioBadge, S]), (t[6] = S), (t[7] = R))
        : (R = t[7]);
      var L;
      return (
        t[8] !== g || t[9] !== b || t[10] !== v || t[11] !== R
          ? ((L = s.jsx(
              "div",
              babelHelpers.extends({}, y, {
                children: s.jsx(
                  "div",
                  babelHelpers.extends({}, C, {
                    children: s.jsx(r("WAWebPttAudioStatusBadge.react"), {
                      Icon: b,
                      iconSize: 16,
                      iconXstyle: g,
                      testid: v,
                      xstyle: R,
                    }),
                  }),
                ),
              }),
            )),
            (t[8] = g),
            (t[9] = b),
            (t[10] = v),
            (t[11] = R),
            (t[12] = L))
          : (L = t[12]),
        L
      );
    }
    function d(e, t) {
      return e ? u.iconBlue : t ? u.iconGray : u.iconGreen;
    }
    l.default = c;
  },
  98,
);
