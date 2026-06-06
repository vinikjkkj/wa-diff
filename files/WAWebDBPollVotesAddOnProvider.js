__d(
  "WAWebDBPollVotesAddOnProvider",
  [
    "WAWebDBMarkAsReadForTable",
    "WAWebDBProcessPollUpdateMsgs",
    "WAWebDBUpdateAddOnAcksForTable",
    "WAWebMessageAddOnType",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
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
      processOrphansForNewMsg: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Map();
          for (var a of t) n.set(a.msgKey, a);
          var i = yield o("WAWebDBProcessPollUpdateMsgs").processPollUpdateMsgs(
            t.map(function (e) {
              var t = e.parsedMsgPayload;
              if (
                t.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE &&
                t.addonEncrypted
              )
                return t;
              throw r("err")("Invalid poll vote orphan type");
            }),
          );
          return i.map(function (e) {
            var t,
              r,
              o =
                e.read ||
                ((t =
                  (r = n.get(e.msgKey.toString())) == null ? void 0 : r.read) !=
                null
                  ? t
                  : !1);
            return e.read === o ? e : babelHelpers.extends({}, e, { read: o });
          });
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
