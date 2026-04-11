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
    "asyncToGeneratorRuntime",
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
      var r = t.prototype;
      return (
        (r.searchImpl = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a) {
              if ((n === void 0 && (n = 1), e)) {
                var i = yield o("WAWebChatMessageSearch").fts(e, t, n, r);
                if (this.threadId != null) {
                  var l = this.threadId;
                  i.messages = i.messages.filter(function (e) {
                    return o("WAWebThreadMsgUtils").isMsgInThread(e, l);
                  });
                }
                return i;
              }
              return o("WAWebMsgCollection").MsgCollection.search(
                t,
                n,
                r,
                void 0,
                a,
              );
            },
          );
          function t(t, n, r, o, a) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.onSeachPromiseComplete = function (t) {
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
