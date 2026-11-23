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
      var t = e.msgKey,
        n = o("useWAWebMsgValues").useMsgValues(
          t,
          o("WAWebMsgCasts").castToAudioOrPttMsg,
          [
            o("WAWebMsgGetters").getAck,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getType,
            o("WAWebFrontendMsgGetters").getAsPttLike,
          ],
        ),
        a = n[0],
        i = n[1],
        l = n[2],
        c = n[3],
        m = a === o("WAWebAck").ACK.PLAYED,
        p = d(m, i),
        _ = l === "ptt" || c;
      return s.jsx("div", {
        className: "xexx8yu xrw5ot4 x18d9i69 x7coems",
        children: s.jsx("div", {
          className: "x11uqc5h x78zum5 x6s0dn4",
          children: s.jsx(r("WAWebPttAudioStatusBadge.react"), {
            Icon: r(
              _
                ? "WDSIconIcKeyboardVoiceFilled.react"
                : "WDSIconIcHeadphonesFilled.react",
            ),
            iconSize: 16,
            iconXstyle: p,
            testid: _ ? "ptt-status" : "audio-status",
            xstyle: [
              u.audioBadge,
              i ? u.audioBadgeOutgoing : u.audioBadgeIncoming,
            ],
          }),
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t) {
      return e ? u.iconBlue : t ? u.iconGray : u.iconGreen;
    }
    l.default = c;
  },
  98,
);
