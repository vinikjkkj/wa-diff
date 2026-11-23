__d(
  "WAWebVoipCallsTabResolveCallInfo",
  [
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebChatlistUtils",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgQueryUtils",
    "WAWebVoipCallsTabCallInfoRequest",
    "WAWebVoipCallsTabCallInfoUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200;
    async function s(e) {
      var t = (await c()).find(function (t) {
        return t.some(function (t) {
          return t.id.id === e;
        });
      });
      t != null &&
        o("WAWebVoipCallsTabCallInfoRequest").requestOpenCallLogInfoPanel(t);
    }
    async function u(e) {
      var t,
        n =
          (t = e.chat) != null
            ? t
            : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
                e.wid,
              );
      if (n != null) {
        var r = (await c()).find(function (e) {
          return d(e[0], n);
        });
        if (r != null) {
          o("WAWebVoipCallsTabCallInfoRequest").requestOpenCallLogInfoPanel(r);
          return;
        }
      }
      (n == null && !e.wid.isUser()) ||
        (await o("WAWebChatlistUtils").openOrCreateLatestChat(e.wid),
        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
    }
    async function c() {
      var t = await o("WAWebMsgQueryUtils").getVoipCallLogMsgs(e, null);
      return o("WAWebCallLogUtils")
        .mergeCallRecords(
          t.filter(
            o("WAWebVoipCallsTabCallInfoUtils").getShouldShowInCallsTabCallLog,
          ),
        )
        .map(function (e) {
          var t = e.mergedMsgs;
          return t;
        });
    }
    function d(e, t) {
      return (
        o("WAWebFrontendMsgGetters").getChat(e).id.equals(t.id) &&
        o("WAWebMsgGetters").getIsGroupCall(e) === t.id.isGroup()
      );
    }
    ((l.openCallLogInfoPanelForCallId = s), (l.openFavoriteCallInfoOrChat = u));
  },
  98,
);
