__d(
  "WAWebDBCommentAddOnProvider",
  [
    "Promise",
    "WAWebDBMarkAsReadForTable",
    "WAWebDBUpdateAddOnAcksForTable",
    "WAWebMessageAddOnType",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        type: o("WAWebMessageAddOnType").MessageAddOnType.Comment,
        matches: function (t) {
          return t.type === o("WAWebMsgType").MSG_TYPE.COMMENT;
        },
        matchesFutureproof: function (t) {
          return (
            t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
            t.futureproofType === o("WAWebMsgType").MSG_TYPE.COMMENT
          );
        },
        canRenderInUi: function () {
          return !0;
        },
        processOrphansForNewMsg: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, r) {
              return (e || (e = n("Promise"))).resolve();
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        updateAcks: function (t, n) {
          return o("WAWebDBUpdateAddOnAcksForTable").updateAddOnAcksForTable(
            "comments",
            t,
            n,
          );
        },
        markAsRead: function (t) {
          return o("WAWebDBMarkAsReadForTable").markAsReadForTable(
            "comments",
            t.map(String),
          );
        },
      };
    l.commentsAddOnProvider = s;
  },
  98,
);
