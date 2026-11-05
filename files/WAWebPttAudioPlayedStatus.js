__d(
  "WAWebPttAudioPlayedStatus",
  [
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCasts",
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
      var t = o("react-compiler-runtime").c(14),
        n = e.msgKey,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getAck,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getType,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(
          n,
          o("WAWebMsgCasts").castToAudioOrPttMsg,
          a,
        ),
        l = i[0],
        c = i[1],
        m = i[2],
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [o("WAWebFrontendMsgGetters").getAsPttLike]), (t[1] = p))
        : (p = t[1]);
      var _ = o("useWAWebMsgValues").useMsgValues(n, p),
        f = _[0],
        g = l === o("WAWebAck").ACK.PLAYED,
        h;
      t[2] !== c || t[3] !== g
        ? ((h = d(g, c)), (t[2] = c), (t[3] = g), (t[4] = h))
        : (h = t[4]);
      var y = h,
        C = m === "ptt" || f,
        b,
        v;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "xexx8yu xrw5ot4 x18d9i69 x7coems" }),
          (v = { className: "x11uqc5h x78zum5 x6s0dn4" }),
          (t[5] = b),
          (t[6] = v))
        : ((b = t[5]), (v = t[6]));
      var S = r(
          C
            ? "WDSIconIcKeyboardVoiceFilled.react"
            : "WDSIconIcHeadphonesFilled.react",
        ),
        R = C ? "ptt-status" : "audio-status",
        L = c ? u.audioBadgeOutgoing : u.audioBadgeIncoming,
        E;
      t[7] !== L
        ? ((E = [u.audioBadge, L]), (t[7] = L), (t[8] = E))
        : (E = t[8]);
      var k;
      return (
        t[9] !== y || t[10] !== S || t[11] !== R || t[12] !== E
          ? ((k = s.jsx(
              "div",
              babelHelpers.extends({}, b, {
                children: s.jsx(
                  "div",
                  babelHelpers.extends({}, v, {
                    children: s.jsx(r("WAWebPttAudioStatusBadge.react"), {
                      Icon: S,
                      iconSize: 16,
                      iconXstyle: y,
                      testid: R,
                      xstyle: E,
                    }),
                  }),
                ),
              }),
            )),
            (t[9] = y),
            (t[10] = S),
            (t[11] = R),
            (t[12] = E),
            (t[13] = k))
          : (k = t[13]),
        k
      );
    }
    function d(e, t) {
      return e ? u.iconBlue : t ? u.iconGray : u.iconGreen;
    }
    l.default = c;
  },
  98,
);
