__d(
  "WAWebAddonDBTable",
  [
    "WAWebAddonCommentTableMode",
    "WAWebAddonConstants",
    "WAWebAddonEventResponseTableMode",
    "WAWebAddonInfraError",
    "WAWebAddonPinTableMode",
    "WAWebAddonPollVoteTableMode",
    "WAWebAddonReactionTableMode",
    "WAWebAddonSelectUtils",
    "WAWebAddonUnifiedAddonsTableMode",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        switch (t) {
          case o("WAWebAddonConstants").AddonTableMode.Pin:
            return o("WAWebAddonPinTableMode").pinTableMode;
          case o("WAWebAddonConstants").AddonTableMode.PollVote:
            return o("WAWebAddonPollVoteTableMode").pollVoteTableMode;
          case o("WAWebAddonConstants").AddonTableMode.Comment:
            return o("WAWebAddonCommentTableMode").commentTableMode;
          case o("WAWebAddonConstants").AddonTableMode.Reaction:
            return o("WAWebAddonReactionTableMode").reactionTableMode;
          case o("WAWebAddonConstants").AddonTableMode.EventResponse:
            return o("WAWebAddonEventResponseTableMode").eventResponseTableMode;
          case o("WAWebAddonConstants").AddonTableMode.Unified:
            return o("WAWebAddonUnifiedAddonsTableMode").unifiedAddonsTableMode;
          case o("WAWebAddonConstants").AddonTableMode.None:
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
            );
        }
      },
      s = {
        bulkUpsert: async function (n, r) {
          if (r.length !== 0) return e(n).bulkUpsert(r);
        },
        bulkGetByParentAndSender: async function (n, r) {
          return r.length === 0 ? [] : e(n).bulkGetByParentAndSender(r);
        },
        bulkGetByMsgKey: async function (n, r, o) {
          return e(n).bulkGetByMsgKey(r, o);
        },
        bulkGetByParentMsgKey: async function (n, r) {
          return e(n).bulkGetByParentMsgKey(r);
        },
        bulkGetByChatWid: async function (n, r) {
          return e(n).bulkGetByChatWid(r);
        },
        bulkRemoveByMsgKey: async function (n, r) {
          if (r.length !== 0) return e(n).bulkRemoveByMsgKey(r);
        },
        updateAck: async function (n, r, o) {
          return e(n).updateAck(r, o);
        },
        getByMsgKey: async function (n, r) {
          return e(n).getByMsgKey(r);
        },
        getTableSize: async function (n) {
          return e(n).getTableSize();
        },
      },
      u = {
        bulkGetByParentAndSender: async function (t, n) {
          return s.bulkGetByParentAndSender(
            o("WAWebAddonSelectUtils").getTableModeByMsgType(t),
            n,
          );
        },
        getByMsgKey: async function (t, n) {
          return s.getByMsgKey(
            o("WAWebAddonSelectUtils").getTableModeByMsgType(t),
            n,
          );
        },
      };
    ((l.addonInternalDBTable = s), (l.addonDBTable = u));
  },
  98,
);
