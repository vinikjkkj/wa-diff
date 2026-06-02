__d(
  "WAWebFtsMsgsCollection",
  [
    "WAWebAppTracker",
    "WAWebChatMessageSearch",
    "WAWebFtsMsgsCollectionBase",
    "WAWebMsgCollection",
    "WAWebThreadMsgUtils",
    "WAWebUiActionWamEvent",
    "WAWebWamEnumUiActionType",
    "WAWebWamPrivateStatsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r,
          a = t ? t.msgs : o("WAWebMsgCollection").MsgCollection;
        return ((r = e.call(this, a) || this), (r.threadId = n), r);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.searchImpl = async function (t) {
          var e = t.chat,
            n = t.count,
            r = t.direction,
            a = t.filter,
            i = t.page,
            l = i === void 0 ? 1 : i,
            s = t.searchTerm;
          if (e) {
            var u = await o("WAWebChatMessageSearch").fts({
              chat: e,
              count: n,
              page: l,
              searchTerm: s,
            });
            if (this.threadId != null) {
              var c = this.threadId;
              u.messages = u.messages.filter(function (e) {
                return o("WAWebThreadMsgUtils").isMsgInThread(e, c);
              });
            }
            return u;
          }
          return o("WAWebMsgCollection").MsgCollection.search(
            s,
            l,
            n,
            void 0,
            a,
          );
        }),
        (n.onSeachPromiseComplete = function (t) {
          var e = new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
            uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
              .FIRST_FTS_RESULT,
            uiActionPreloaded: t,
          });
          (e.markUiActionT(),
            o("WAWebAppTracker").attachWAMAppContext(e, e.uiActionT),
            e.commit(),
            o(
              "WAWebWamPrivateStatsUtils",
            ).logUiActionShadowPrivateStatsTestEvents());
        }),
        t
      );
    })(r("WAWebFtsMsgsCollectionBase"));
    l.default = e;
  },
  98,
);
