__d(
  "WAWebAddonPollVoteTableMode",
  [
    "WANullthrows",
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebDBPollsUpsertVotes",
    "WAWebMsgType",
    "WAWebPollsDbSerialization",
    "WAWebPollsVoteDataUtils",
    "WAWebPollsVotesSchema",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData(
          o("WAWebPollsDbSerialization").voteFromDbRow(t),
        );
      },
      s = {
        mode: o("WAWebAddonConstants").AddonTableMode.PollVote,
        bulkUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.map(function (e) {
              if (e.kind !== o("WAWebMsgType").MsgKind.PollVoteDecrypted)
                throw new (o("WAWebAddonInfraError").AddonInfraError)(
                  o("WAWebAddonInfraError").AddonInfraErrorCode
                    .NotSupportedMsgType,
                );
              return o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e);
            });
            yield o("WAWebDBPollsUpsertVotes").upsertVotesDb(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        bulkGetByParentAndSender: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = yield o("WAWebPollsVotesSchema")
              .getTable()
              .anyOf(
                ["parentMsgKey", "sender"],
                t.map(function (e) {
                  return [e[0].toString(), e[1].toString()];
                }),
              );
            return n.map(e);
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        bulkGetByMsgKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        bulkGetByParentMsgKey: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = yield o("WAWebPollsVotesSchema")
              .getTable()
              .anyOf(
                ["parentMsgKey"],
                t.map(function (e) {
                  return e.toString();
                }),
              );
            return n.map(e);
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        bulkGetByChatWid: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        bulkRemoveByMsgKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield o("WAWebPollsVotesSchema")
              .getTable()
              .bulkRemoveByIndex(
                ["msgKey"],
                e.map(function (e) {
                  return e.toString();
                }),
              );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getByMsgKey: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = (yield o("WAWebPollsVotesSchema")
              .getTable()
              .equals(["msgKey"], t.toString()))[0];
            return n == null ? n : e(n);
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        updateAck: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (
                e.kind !== o("WAWebMsgType").MsgKind.PollVoteDecrypted &&
                e.kind !== o("WAWebMsgType").MsgKind.PollVoteEncrypted
              )
                throw new (o("WAWebAddonInfraError").AddonInfraError)(
                  o("WAWebAddonInfraError").AddonInfraErrorCode
                    .NotSupportedMsgType,
                );
              yield o("WAWebPollsVotesSchema")
                .getTable()
                .merge(
                  [
                    e.pollUpdateParentKey.toString(),
                    r("WANullthrows")(e.from).toString(),
                  ],
                  { ack: t },
                );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        markAsRead: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield s.getByMsgKey(e);
            if (t != null)
              return s.bulkUpsert([babelHelpers.extends({}, t, { read: !0 })]);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getTableSize: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebPollsVotesSchema").getTable().count();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    l.pollVoteTableMode = s;
  },
  98,
);
