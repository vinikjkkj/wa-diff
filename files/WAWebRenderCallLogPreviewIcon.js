__d(
  "WAWebRenderCallLogPreviewIcon",
  [
    "WAWebCallLogEntryCell.react",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "react",
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
      var t,
        n = e.msg,
        r = o("useWAWebMsgValues").useMsgValues(n.id, [
          (t = o("WAWebMsgGetters")).getIsVideoCall,
          t.getIsMissedCall,
          t.getIsSentByMe,
          t.getIsCallLink,
          t.getCallOutcome,
          t.getFinalCallOutcome,
          t.getCallParticipants,
        ]),
        a = r[0],
        i = r[1],
        l = r[2],
        c = r[3],
        d = r[4],
        m = r[5],
        p = r[6],
        _ =
          d === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
          m !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
        f = o("WAWebCallLogUtils").getIsSelfConnected(p),
        g = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(i, f, l, d, m);
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: [u.container, u.paddingEnd2],
        align: "center",
        justify: "center",
        children: s.jsx(o("WAWebCallLogEntryCell.react").CallLogIcon, {
          iconHeight: 16,
          isMissedCall: g,
          isVideoCall: a,
          isFromMe: l,
          isCallLink: c != null ? c : !1,
          isOngoingCall: _,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
