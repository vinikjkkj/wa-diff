__d(
  "WAWebRenderCallLogPreviewIcon",
  [
    "WAWebCallLogIcon.react",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "react",
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
      var t,
        n = e.msg,
        a = o("useWAWebMsgValues").useMsgValues(n.id, [
          (t = o("WAWebMsgGetters")).getIsVideoCall,
          t.getIsMissedCall,
          t.getIsSentByMe,
          t.getIsCallLink,
          t.getCallOutcome,
          t.getFinalCallOutcome,
          t.getCallParticipants,
          t.getCallId,
        ]),
        i = a[0],
        l = a[1],
        c = a[2],
        d = a[3],
        m = a[4],
        p = a[5],
        _ = a[6],
        f = a[7],
        g = r("useWAWebVoipCallTransferEntryPointForCall")(f),
        h =
          g != null ||
          (m === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
            p !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed),
        y = o("WAWebCallLogUtils").getIsSelfConnected(_),
        C = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(l, y, c, m, p);
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: [u.container, u.paddingEnd2],
        align: "center",
        justify: "center",
        children: s.jsx(o("WAWebCallLogIcon.react").CallLogIcon, {
          iconHeight: 16,
          isMissedCall: C,
          isVideoCall: i,
          isFromMe: c,
          isCallLink: d != null ? d : !1,
          isOngoingCall: h,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
