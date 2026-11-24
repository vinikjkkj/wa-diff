__d(
  "WAWebMessageQueryServiceWebLive",
  [
    "WAWebApiMessageInfoStore",
    "WAWebDBMessageFindLocal",
    "WAWebMessageQueryService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebMessageQueryService").MessageQueryService.make(
      function* () {
        var e = {
          msgFindAfter: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").msgFindAfter(t);
            });
          },
          msgFindBefore: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").msgFindBefore(t);
            });
          },
          msgFindByDirection: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").msgFindByDirection(t);
            });
          },
          msgFindSearch: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").msgFindSearch(t);
            });
          },
          msgFindMedia: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").msgFindMedia(t);
            });
          },
          msgFindStarred: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").msgFindStarred(t);
            });
          },
          msgCountStarred: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").msgCountStarred(t);
            });
          },
          msgFindCallLog: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").msgFindCallLog(t);
            });
          },
          msgFindEvents: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").msgFindEvents(t);
            });
          },
          getAllDocsMessages: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageFindLocal").getAllDocsMessages(t);
            });
          },
          getVoipOngoingCallLogMessages: function () {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebDBMessageFindLocal",
              ).getVoipOngoingCallLogMessages();
            });
          },
          queryMsgInfo: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebApiMessageInfoStore").queryMsgInfo(t);
            });
          },
          queryMsgInfos: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebApiMessageInfoStore").queryMsgInfos(t);
            });
          },
        };
        return e;
      },
    );
    l.MessageQueryServiceWebLive = e;
  },
  98,
);
