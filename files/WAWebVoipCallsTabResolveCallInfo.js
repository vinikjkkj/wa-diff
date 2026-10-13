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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (yield m()).find(function (t) {
            return t.some(function (t) {
              return t.id.id === e;
            });
          });
          t != null &&
            o("WAWebVoipCallsTabCallInfoRequest").requestOpenCallLogInfoPanel(
              t,
            );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = e.chat) != null
                ? t
                : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
                    e.wid,
                  );
          if (n != null) {
            var r = (yield m()).find(function (e) {
              return _(e[0], n);
            });
            if (r != null) {
              o("WAWebVoipCallsTabCallInfoRequest").requestOpenCallLogInfoPanel(
                r,
              );
              return;
            }
          }
          (n == null && !e.wid.isUser()) ||
            (yield o("WAWebChatlistUtils").openOrCreateLatestChat(e.wid),
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebMsgQueryUtils").getVoipCallLogMsgs(e, null);
          return o("WAWebCallLogUtils")
            .mergeCallRecords(
              t.filter(
                o("WAWebVoipCallsTabCallInfoUtils")
                  .getShouldShowInCallsTabCallLog,
              ),
            )
            .map(function (e) {
              var t = e.mergedMsgs;
              return t;
            });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return (
        o("WAWebFrontendMsgGetters").getChat(e).id.equals(t.id) &&
        o("WAWebMsgGetters").getIsGroupCall(e) === t.id.isGroup()
      );
    }
    ((l.openCallLogInfoPanelForCallId = s), (l.openFavoriteCallInfoOrChat = c));
  },
  98,
);
