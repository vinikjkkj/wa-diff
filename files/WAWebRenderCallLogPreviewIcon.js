__d(
  "WAWebRenderCallLogPreviewIcon",
  [
    "WAWebCallLogIcon.react",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebVoipCallTransferEntryPointForCall",
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
        a;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var i;
        ((a = [
          (i = o("WAWebMsgGetters")).getIsVideoCall,
          i.getIsMissedCall,
          i.getIsSentByMe,
          i.getIsCallLink,
          i.getCallOutcome,
          i.getFinalCallOutcome,
          i.getCallParticipants,
          i.getCallId,
        ]),
          (t[0] = a));
      } else a = t[0];
      var l = o("useWAWebMsgValues").useMsgValues(n.id, a),
        c = l[0],
        d = l[1],
        m = l[2],
        p = l[3],
        _ = l[4],
        f = l[5],
        g = l[6],
        h = l[7],
        y = r("useWAWebVoipCallTransferEntryPointForCall")(h),
        C =
          y != null ||
          (_ === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
            f !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed),
        b;
      if (t[1] !== _ || t[2] !== g || t[3] !== f || t[4] !== d || t[5] !== m) {
        var v = o("WAWebCallLogUtils").getIsSelfConnected(g);
        ((b = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(
          d,
          v,
          m,
          _,
          f,
        )),
          (t[1] = _),
          (t[2] = g),
          (t[3] = f),
          (t[4] = d),
          (t[5] = m),
          (t[6] = b));
      } else b = t[6];
      var S = b,
        R;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = [u.container, u.paddingEnd2]), (t[7] = R))
        : (R = t[7]);
      var L = p != null ? p : !1,
        E;
      return (
        t[8] !== S || t[9] !== C || t[10] !== m || t[11] !== c || t[12] !== L
          ? ((E = s.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: R,
              align: "center",
              justify: "center",
              children: s.jsx(o("WAWebCallLogIcon.react").CallLogIcon, {
                iconHeight: 16,
                isMissedCall: S,
                isVideoCall: c,
                isFromMe: m,
                isCallLink: L,
                isOngoingCall: C,
              }),
            })),
            (t[8] = S),
            (t[9] = C),
            (t[10] = m),
            (t[11] = c),
            (t[12] = L),
            (t[13] = E))
          : (E = t[13]),
        E
      );
    }
    l.default = c;
  },
  98,
);
