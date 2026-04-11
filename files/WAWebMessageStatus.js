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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(22),
        n = e.associatedMessages,
        a = e.msg,
        i;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l;
        ((i = [
          (l = o("WAWebMsgGetters")).getAck,
          l.getIsMedia,
          l.getIsViewOnce,
          l.getCaption,
          l.getType,
          l.getLoc,
          l.getIsLive,
        ]),
          (t[0] = i));
      } else i = t[0];
      var u = o("useWAWebMsgValues").useMsgValues(a.id, i),
        d = u[0],
        m = u[1],
        p = u[2],
        _ = u[3],
        f = u[4],
        g = u[5],
        h = u[6],
        y = d != null ? d : o("WAWebAck").ACK.CLOCK,
        C = o("WAWebMessageAssociationUIUtils").getLowestAckState(y, f, n),
        b;
      t[1] !== _ ||
      t[2] !== h ||
      t[3] !== m ||
      t[4] !== p ||
      t[5] !== g ||
      t[6] !== f
        ? ((b =
            (m &&
              r("isStringNullOrEmpty")(_) &&
              !p &&
              f !== o("WAWebMsgType").MSG_TYPE.AUDIO) ||
            (f === o("WAWebMsgType").MSG_TYPE.LOCATION && !g && !h)),
          (t[1] = _),
          (t[2] = h),
          (t[3] = m),
          (t[4] = p),
          (t[5] = g),
          (t[6] = f),
          (t[7] = b))
        : (b = t[7]);
      var v = b,
        S,
        R,
        L,
        E;
      if (t[8] !== y || t[9] !== C) {
        var k = o("WAWebStatusUtils").getMessageStatusLabel(y);
        (C < o("WAWebAck").ACK.SENT
          ? (S = o("WAWebMsgTimeIcon.react").MsgTimeIcon)
          : C === o("WAWebAck").ACK.SENT
            ? (S = o("WAWebMsgCheckIcon.react").MsgCheckIcon)
            : C === o("WAWebAck").ACK.RECEIVED
              ? (S = o("WAWebMsgDblcheckIcon.react").MsgDblcheckIcon)
              : ((S = o("WAWebMsgDblcheckIcon.react").MsgDblcheckIcon),
                (L = c.ackBlue)),
          (R = S),
          (E = k.toString()),
          (t[8] = y),
          (t[9] = C),
          (t[10] = S),
          (t[11] = R),
          (t[12] = L),
          (t[13] = E));
      } else ((S = t[10]), (R = t[11]), (L = t[12]), (E = t[13]));
      var I = " " + E + " ",
        T = S === o("WAWebMsgTimeIcon.react").MsgTimeIcon ? void 0 : 11,
        D = v && c.light,
        x;
      t[14] !== L || t[15] !== D
        ? ((x = [D, L]), (t[14] = L), (t[15] = D), (t[16] = x))
        : (x = t[16]);
      var $;
      return (
        t[17] !== R || t[18] !== I || t[19] !== T || t[20] !== x
          ? (($ = s.jsx(R, {
              "aria-label": I,
              height: T,
              width: 16,
              xstyle: x,
            })),
            (t[17] = R),
            (t[18] = I),
            (t[19] = T),
            (t[20] = x),
            (t[21] = $))
          : ($ = t[21]),
        $
      );
    }
    l.default = d;
  },
  98,
);
