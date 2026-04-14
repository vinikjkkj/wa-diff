__d(
  "WAWebMessageStatus",
  [
    "WAWebAck",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCheckIcon.react",
    "WAWebMsgDblcheckIcon.react",
    "WAWebMsgGetters",
    "WAWebMsgTimeIcon.react",
    "WAWebMsgType",
    "WAWebStatusUtils",
    "isStringNullOrEmpty",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = {
        light: { color: "x17t9dm2", $$css: !0 },
        ackBlue: { color: "x1rv0e52", $$css: !0 },
      };
    function d(e) {
      var t,
        n = e.associatedMessages,
        a = e.msg,
        i = o("useWAWebMsgValues").useMsgValues(a.id, [
          (t = o("WAWebMsgGetters")).getAck,
          t.getIsMedia,
          t.getIsViewOnce,
          t.getCaption,
          t.getType,
          t.getLoc,
          t.getIsLive,
        ]),
        l = i[0],
        d = i[1],
        m = i[2],
        p = i[3],
        _ = i[4],
        f = i[5],
        g = i[6],
        h = l != null ? l : o("WAWebAck").ACK.CLOCK,
        y = u(
          function () {
            return o("WAWebMessageAssociationUIUtils").getLowestAckState(
              h,
              _,
              n,
            );
          },
          [h, n, _],
        ),
        C =
          (d &&
            r("isStringNullOrEmpty")(p) &&
            !m &&
            _ !== o("WAWebMsgType").MSG_TYPE.AUDIO) ||
          (_ === o("WAWebMsgType").MSG_TYPE.LOCATION && !f && !g),
        b = o("WAWebStatusUtils").getMessageStatusLabel(h),
        v,
        S;
      return (
        y < o("WAWebAck").ACK.SENT
          ? (v = o("WAWebMsgTimeIcon.react").MsgTimeIcon)
          : y === o("WAWebAck").ACK.SENT
            ? (v = o("WAWebMsgCheckIcon.react").MsgCheckIcon)
            : y === o("WAWebAck").ACK.RECEIVED
              ? (v = o("WAWebMsgDblcheckIcon.react").MsgDblcheckIcon)
              : ((v = o("WAWebMsgDblcheckIcon.react").MsgDblcheckIcon),
                (S = c.ackBlue)),
        s.jsx(v, {
          "aria-label": " " + b.toString() + " ",
          height: v === o("WAWebMsgTimeIcon.react").MsgTimeIcon ? void 0 : 11,
          width: 16,
          xstyle: [C && c.light, S],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
