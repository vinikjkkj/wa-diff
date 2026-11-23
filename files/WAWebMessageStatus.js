__d(
  "WAWebMessageStatus",
  [
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStatusUtils",
    "WDSIconWdsIcDelivered.react",
    "WDSIconWdsIcRead.react",
    "WDSIconWdsIcStatusPending.react",
    "isStringNullOrEmpty",
    "react",
    "useWAWebLowestAckState",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        light: { color: "x17t9dm2", $$css: !0 },
        ackBlue: { color: "x1rv0e52", $$css: !0 },
      };
    function c(e) {
      var t,
        n = e.associatedMessages,
        a = e.msgKey,
        i = o("useWAWebMsgValues").useMsgValues(a, [
          (t = o("WAWebMsgGetters")).getAck,
          t.getIsMedia,
          t.getIsViewOnce,
          t.getCaption,
          t.getType,
          t.getLoc,
          t.getIsLive,
        ]),
        l = i[0],
        c = i[1],
        d = i[2],
        m = i[3],
        p = i[4],
        _ = i[5],
        f = i[6],
        g = l != null ? l : o("WAWebAck").ACK.CLOCK,
        h = r("useWAWebLowestAckState")({
          ack: g,
          associatedMessages: n,
          msgType: p,
        }),
        y =
          (c &&
            r("isStringNullOrEmpty")(m) &&
            !d &&
            p !== o("WAWebMsgType").MSG_TYPE.AUDIO) ||
          (p === o("WAWebMsgType").MSG_TYPE.LOCATION && !_ && !f),
        C = o("WAWebStatusUtils").getMessageStatusLabel(g),
        b,
        v,
        S;
      return (
        h < o("WAWebAck").ACK.SENT
          ? ((b = r("WDSIconWdsIcStatusPending.react")),
            (S = "wds-ic-status-pending"))
          : h === o("WAWebAck").ACK.SENT
            ? ((b = r("WDSIconWdsIcDelivered.react")), (S = "wds-ic-delivered"))
            : h === o("WAWebAck").ACK.RECEIVED
              ? ((b = r("WDSIconWdsIcRead.react")), (S = "wds-ic-read"))
              : ((b = r("WDSIconWdsIcRead.react")),
                (S = "wds-ic-read"),
                (v = u.ackBlue)),
        s.jsx(b, {
          "aria-label": " " + C.toString() + " ",
          height: b === r("WDSIconWdsIcStatusPending.react") ? 11 : void 0,
          testid: S,
          width: 16,
          xstyle: [y && u.light, v],
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
