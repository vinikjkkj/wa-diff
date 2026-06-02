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
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData(
          o("WAWebPollsDbSerialization").voteFromDbRow(t),
        );
      },
      s = {
        mode: o("WAWebAddonConstants").AddonTableMode.PollVote,
        bulkUpsert: async function (t) {
          var e = t.map(function (e) {
            if (e.kind !== o("WAWebMsgType").MsgKind.PollVoteDecrypted)
              throw new (o("WAWebAddonInfraError").AddonInfraError)(
                o("WAWebAddonInfraError").AddonInfraErrorCode
                  .NotSupportedMsgType,
              );
            return o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e);
          });
          await o("WAWebDBPollsUpsertVotes").upsertVotesDb(e);
        },
        bulkGetByParentAndSender: async function (n) {
          var t = await o("WAWebPollsVotesSchema")
            .getTable()
            .anyOf(
              ["parentMsgKey", "sender"],
              n.map(function (e) {
                return [e[0].toString(), e[1].toString()];
              }),
            );
          return t.map(e);
        },
        bulkGetByMsgKey: async function () {
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
          );
        },
        bulkGetByParentMsgKey: async function (n) {
          var t = await o("WAWebPollsVotesSchema")
            .getTable()
            .anyOf(
              ["parentMsgKey"],
              n.map(function (e) {
                return e.toString();
              }),
            );
          return t.map(e);
        },
        bulkGetByChatWid: async function () {
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
          );
        },
        bulkRemoveByMsgKey: async function (t) {
          await o("WAWebPollsVotesSchema")
            .getTable()
            .bulkRemoveByIndex(
              ["msgKey"],
              t.map(function (e) {
                return e.toString();
              }),
            );
        },
        getByMsgKey: async function (n) {
          var t = (
            await o("WAWebPollsVotesSchema")
              .getTable()
              .equals(["msgKey"], n.toString())
          )[0];
          return t == null ? t : e(t);
        },
        updateAck: async function (t, n) {
          if (
            t.kind !== o("WAWebMsgType").MsgKind.PollVoteDecrypted &&
            t.kind !== o("WAWebMsgType").MsgKind.PollVoteEncrypted
          )
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType,
            );
          await o("WAWebPollsVotesSchema")
            .getTable()
            .merge(
              [
                t.pollUpdateParentKey.toString(),
                r("WANullthrows")(t.from).toString(),
              ],
              { ack: n },
            );
        },
        markAsRead: async function (t) {
          var e = await s.getByMsgKey(t);
          if (e != null)
            return s.bulkUpsert([babelHelpers.extends({}, e, { read: !0 })]);
        },
        getTableSize: async function () {
          return o("WAWebPollsVotesSchema").getTable().count();
        },
      };
    l.pollVoteTableMode = s;
  },
  98,
);
