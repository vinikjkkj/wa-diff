__d(
  "WAWebPollVoteAddonTCValidation",
  [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebApplyPollVoteTCValidation",
    "WAWebPollsVoteDataUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (!e.some(s)) return e;
      var n = await u(e, t);
      return o("WAWebApplyPollVoteTCValidation").applyPollVoteTCValidation(
        e.map(function (e) {
          var t,
            r,
            a = c(n, e),
            i = o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e);
          return {
            vote: e,
            parentMsg: a != null ? a : {},
            voteMetadata: e.pollUpdateMessageMetadata,
            parentMsgKey:
              (t = a == null ? void 0 : a.id) != null ? t : i.parentMsgKey,
            voteMsgKey: i.msgKey,
            sender: i.sender,
            senderTimestampMs: i.senderTimestampMs,
            t: i.t,
            selectedOptionLocalIds: i.selectedOptionLocalIds,
            unresolvedOptionHashes:
              (r = i.unresolvedOptionHashes) != null ? r : [],
          };
        }),
        t.processMode === o("WAWebAddonConstants").AddonProcessMode.HistorySync
          ? "history-sync-vote"
          : "live-vote",
      );
    }
    function s(e) {
      var t, n;
      return (
        e.pollUpdateMessageMetadata != null ||
        ((t = (n = e.unresolvedOptionHashes) == null ? void 0 : n.length) !=
        null
          ? t
          : 0) > 0
      );
    }
    async function u(e, t) {
      var n = t.parents,
        r = t.processMode;
      if (r !== o("WAWebAddonConstants").AddonProcessMode.HistorySync) return n;
      var a = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(e, r),
        i = a[0];
      return o("WAWebAddonSelectUtils").createAddonParentSelector(i);
    }
    function c(e, t) {
      try {
        return e.getForAddon(t);
      } catch (e) {
        if (e instanceof o("WAWebAddonInfraError").AddonInfraError) return null;
        throw e;
      }
    }
    ((l.validateAddonPollVotes = e), (l.getPollVoteParentsForProcessMode = u));
  },
  98,
);
