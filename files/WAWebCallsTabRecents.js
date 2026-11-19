__d(
  "WAWebCallsTabRecents",
  [
    "WAWebChatLockUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebVoipOngoingCallCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [],
        n = [],
        r = [];
      for (var a of e)
        o("WAWebChatLockUtils").chatIsAccessible(
          o("WAWebFrontendMsgGetters").getChat(a),
        ) &&
          (a.star
            ? t.push(a)
            : o("WAWebMsgGetters").getIsKept(a)
              ? n.push(a)
              : o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.getByCallId(a.id.id) == null &&
                r.push(a));
      return {
        kept: o("WAWebVoipOngoingCallCollection").getOneCallLogPerCall(n),
        recents: o("WAWebVoipOngoingCallCollection").getOneCallLogPerCall(r),
        starred: o("WAWebVoipOngoingCallCollection").getOneCallLogPerCall(t),
      };
    }
    l.partitionCallLogMsgs = e;
  },
  98,
);
