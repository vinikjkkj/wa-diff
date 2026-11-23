__d(
  "WAWebDBPollVotesAddOnProvider",
  [
    "WAWebDBMarkAsReadForTable",
    "WAWebDBProcessPollUpdateMsgs",
    "WAWebDBUpdateAddOnAcksForTable",
    "WAWebMessageAddOnType",
    "WAWebMsgType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      type: o("WAWebMessageAddOnType").MessageAddOnType.PollVote,
      matches: function (t) {
        return (
          t.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE &&
          t.subtype === "poll_vote"
        );
      },
      matchesFutureproof: function (t) {
        return (
          t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          t.futureproofType === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE
        );
      },
      canRenderInUi: function () {
        return !0;
      },
      processOrphansForNewMsg: async function (t, n) {
        var e = new Map();
        for (var a of n) e.set(a.msgKey, a);
        var i = await o("WAWebDBProcessPollUpdateMsgs").processPollUpdateMsgs(
          n.map(function (e) {
            var t = e.parsedMsgPayload;
            if (
              t.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE &&
              t.addonEncrypted
            )
              return t;
            throw r("err")("Invalid poll vote orphan type");
          }),
        );
        return i.map(function (t) {
          var n,
            r,
            o =
              t.read ||
              ((n =
                (r = e.get(t.msgKey.toString())) == null ? void 0 : r.read) !=
              null
                ? n
                : !1);
          return t.read === o ? t : babelHelpers.extends({}, t, { read: o });
        });
      },
      updateAcks: function (t, n) {
        return o("WAWebDBUpdateAddOnAcksForTable").updateAddOnAcksForTable(
          "poll-votes",
          t,
          n,
        );
      },
      markAsRead: function (t) {
        return o("WAWebDBMarkAsReadForTable").markAsReadForTable(
          "poll-votes",
          t.map(String),
        );
      },
    };
    l.pollVotesAddOnProvider = e;
  },
  98,
);
