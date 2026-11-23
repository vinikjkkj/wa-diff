__d(
  "WAWebDBCommentAddOnProvider",
  [
    "WAWebDBMarkAsReadForTable",
    "WAWebDBUpdateAddOnAcksForTable",
    "WAWebMessageAddOnType",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
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
      processOrphansForNewMsg: async function (t, n) {
        return Promise.resolve();
      },
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
    l.commentsAddOnProvider = e;
  },
  98,
);
