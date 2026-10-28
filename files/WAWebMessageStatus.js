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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(28),
        n = e.associatedMessages,
        a = e.msgKey,
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
      var c = o("useWAWebMsgValues").useMsgValues(a, i),
        d = c[0],
        m = c[1],
        p = c[2],
        _ = c[3],
        f = c[4],
        g = c[5],
        h = c[6],
        y = d != null ? d : o("WAWebAck").ACK.CLOCK,
        C;
      t[1] !== y || t[2] !== n || t[3] !== f
        ? ((C = { ack: y, associatedMessages: n, msgType: f }),
          (t[1] = y),
          (t[2] = n),
          (t[3] = f),
          (t[4] = C))
        : (C = t[4]);
      var b = r("useWAWebLowestAckState")(C),
        v;
      t[5] !== _ ||
      t[6] !== h ||
      t[7] !== m ||
      t[8] !== p ||
      t[9] !== g ||
      t[10] !== f
        ? ((v =
            (m &&
              r("isStringNullOrEmpty")(_) &&
              !p &&
              f !== o("WAWebMsgType").MSG_TYPE.AUDIO) ||
            (f === o("WAWebMsgType").MSG_TYPE.LOCATION && !g && !h)),
          (t[5] = _),
          (t[6] = h),
          (t[7] = m),
          (t[8] = p),
          (t[9] = g),
          (t[10] = f),
          (t[11] = v))
        : (v = t[11]);
      var S = v,
        R,
        L,
        E,
        k,
        I;
      if (t[12] !== y || t[13] !== b) {
        var T = o("WAWebStatusUtils").getMessageStatusLabel(y);
        (b < o("WAWebAck").ACK.SENT
          ? ((R = r("WDSIconWdsIcStatusPending.react")),
            (I = "wds-ic-status-pending"))
          : b === o("WAWebAck").ACK.SENT
            ? ((R = r("WDSIconWdsIcDelivered.react")), (I = "wds-ic-delivered"))
            : b === o("WAWebAck").ACK.RECEIVED
              ? ((R = r("WDSIconWdsIcRead.react")), (I = "wds-ic-read"))
              : ((R = r("WDSIconWdsIcRead.react")),
                (I = "wds-ic-read"),
                (E = u.ackBlue)),
          (L = R),
          (k = T.toString()),
          (t[12] = y),
          (t[13] = b),
          (t[14] = R),
          (t[15] = L),
          (t[16] = E),
          (t[17] = k),
          (t[18] = I));
      } else ((R = t[14]), (L = t[15]), (E = t[16]), (k = t[17]), (I = t[18]));
      var D = " " + k + " ",
        x = R === r("WDSIconWdsIcStatusPending.react") ? 11 : void 0,
        $ = S && u.light,
        P;
      t[19] !== E || t[20] !== $
        ? ((P = [$, E]), (t[19] = E), (t[20] = $), (t[21] = P))
        : (P = t[21]);
      var N;
      return (
        t[22] !== L || t[23] !== D || t[24] !== x || t[25] !== P || t[26] !== I
          ? ((N = s.jsx(L, {
              "aria-label": D,
              height: x,
              testid: I,
              width: 16,
              xstyle: P,
            })),
            (t[22] = L),
            (t[23] = D),
            (t[24] = x),
            (t[25] = P),
            (t[26] = I),
            (t[27] = N))
          : (N = t[27]),
        N
      );
    }
    l.default = c;
  },
  98,
);
