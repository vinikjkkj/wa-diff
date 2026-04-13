__d(
  "WAWebRenderCallLogPreviewIcon",
  [
    "WAWebCallLogEntryCell.react",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: { height: "x5yr21d", $$css: !0 },
        paddingEnd2: { paddingInlineEnd: "x1j8ymqv", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.msg,
        r;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var a;
        ((r = [
          (a = o("WAWebMsgGetters")).getIsVideoCall,
          a.getIsMissedCall,
          a.getIsSentByMe,
          a.getIsCallLink,
          a.getCallOutcome,
          a.getFinalCallOutcome,
          a.getCallParticipants,
        ]),
          (t[0] = r));
      } else r = t[0];
      var i = o("useWAWebMsgValues").useMsgValues(n.id, r),
        l = i[0],
        c = i[1],
        d = i[2],
        m = i[3],
        p = i[4],
        _ = i[5],
        f = i[6],
        g =
          p === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
          _ !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
        h;
      if (t[1] !== p || t[2] !== f || t[3] !== _ || t[4] !== c || t[5] !== d) {
        var y = o("WAWebCallLogUtils").getIsSelfConnected(f);
        ((h = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(
          c,
          y,
          d,
          p,
          _,
        )),
          (t[1] = p),
          (t[2] = f),
          (t[3] = _),
          (t[4] = c),
          (t[5] = d),
          (t[6] = h));
      } else h = t[6];
      var C = h,
        b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [u.container, u.paddingEnd2]), (t[7] = b))
        : (b = t[7]);
      var v = m != null ? m : !1,
        S;
      return (
        t[8] !== C || t[9] !== g || t[10] !== d || t[11] !== l || t[12] !== v
          ? ((S = s.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: b,
              align: "center",
              justify: "center",
              children: s.jsx(o("WAWebCallLogEntryCell.react").CallLogIcon, {
                iconHeight: 16,
                isMissedCall: C,
                isVideoCall: l,
                isFromMe: d,
                isCallLink: v,
                isOngoingCall: g,
              }),
            })),
            (t[8] = C),
            (t[9] = g),
            (t[10] = d),
            (t[11] = l),
            (t[12] = v),
            (t[13] = S))
          : (S = t[13]),
        S
      );
    }
    l.default = c;
  },
  98,
);
