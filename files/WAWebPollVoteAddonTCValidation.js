__d(
  "WAWebPollVoteAddonTCValidation",
  [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebApplyPollVoteTCValidation",
    "WAWebPollsVoteDataUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !e.some(function (e) {
              return e.pollUpdateMessageMetadata != null;
            })
          )
            return e;
          var n = yield u(e, t);
          return o("WAWebApplyPollVoteTCValidation").applyPollVoteTCValidation(
            e.map(function (e) {
              var t,
                r = d(n, e),
                a = o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e);
              return {
                vote: e,
                parentMsg: r != null ? r : {},
                voteMetadata: e.pollUpdateMessageMetadata,
                parentMsgKey:
                  (t = r == null ? void 0 : r.id) != null ? t : a.parentMsgKey,
                voteMsgKey: a.msgKey,
                sender: a.sender,
                senderTimestampMs: a.senderTimestampMs,
                selectedOptionLocalIds: a.selectedOptionLocalIds,
              };
            }),
            t.processMode ===
              o("WAWebAddonConstants").AddonProcessMode.HistorySync
              ? "history-sync-vote"
              : "live-vote",
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.parents,
            r = t.processMode;
          if (r !== o("WAWebAddonConstants").AddonProcessMode.HistorySync)
            return n;
          var a = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
              e,
              r,
            ),
            i = a[0];
          return o("WAWebAddonSelectUtils").createAddonParentSelector(i);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
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
