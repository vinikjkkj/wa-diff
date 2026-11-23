__d(
  "WAWebMessageQueryServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebMessageQueryService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebApiMessageInfoStore").__setRef(
        "WAWebMessageQueryServiceWebLive",
      ),
      u = r("JSResourceForInteraction")("WAWebDBMessageFindLocal").__setRef(
        "WAWebMessageQueryServiceWebLive",
      ),
      c = o("WAWebMessageQueryService").MessageQueryService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([s.load(), u.load()]);
          }),
          r = t[0],
          a = r.queryMsgInfo,
          i = r.queryMsgInfos,
          l = t[1],
          c = l.getAllDocsMessages,
          d = l.getVoipOngoingCallLogMessages,
          m = l.msgCountStarred,
          p = l.msgFindAfter,
          _ = l.msgFindBefore,
          f = l.msgFindByDirection,
          g = l.msgFindCallLog,
          h = l.msgFindEvents,
          y = l.msgFindMedia,
          C = l.msgFindSearch,
          b = l.msgFindStarred,
          v = {
            msgFindAfter: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return p(t);
              });
            },
            msgFindBefore: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return _(t);
              });
            },
            msgFindByDirection: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return f(t);
              });
            },
            msgFindSearch: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return C(t);
              });
            },
            msgFindMedia: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return y(t);
              });
            },
            msgFindStarred: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return b(t);
              });
            },
            msgCountStarred: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return m(t);
              });
            },
            msgFindCallLog: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return g(t);
              });
            },
            msgFindEvents: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return h(t);
              });
            },
            getAllDocsMessages: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return c(t);
              });
            },
            getVoipOngoingCallLogMessages: function () {
              return o("WebDi.Async").fromPromise(function () {
                return d();
              });
            },
            queryMsgInfo: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
            queryMsgInfos: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t);
              });
            },
          };
        return v;
      });
    l.MessageQueryServiceWebLive = c;
  },
  98,
);
