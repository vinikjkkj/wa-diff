__d(
  "WAWebMessageQueryServiceClient",
  ["WAWebMessageQueryService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        msgFindAfter: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.msgFindAfter(n);
            },
          );
        },
        msgFindBefore: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.msgFindBefore(n);
            },
          );
        },
        msgFindByDirection: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.msgFindByDirection(n);
            },
          );
        },
        msgFindSearch: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.msgFindSearch(n);
            },
          );
        },
        msgFindMedia: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.msgFindMedia(n);
            },
          );
        },
        msgFindStarred: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.msgFindStarred(n);
            },
          );
        },
        msgCountStarred: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.msgCountStarred(n);
            },
          );
        },
        msgFindCallLog: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.msgFindCallLog(n);
            },
          );
        },
        msgFindEvents: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.msgFindEvents(n);
            },
          );
        },
        getAllDocsMessages: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.getAllDocsMessages(n);
            },
          );
        },
        getVoipOngoingCallLogMessages: function () {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.getVoipOngoingCallLogMessages();
            },
          );
        },
        queryMsgInfo: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.queryMsgInfo(n);
            },
          );
        },
        queryMsgInfos: function (n) {
          return e(
            o("WAWebMessageQueryService").MessageQueryService,
            function (e) {
              return e.queryMsgInfos(n);
            },
          );
        },
      };
    }
    l.messageQueryServiceClient = e;
  },
  98,
);
