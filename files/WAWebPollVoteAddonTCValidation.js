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
          if (!e.some(u)) return e;
          var n = yield c(e, t);
          return o("WAWebApplyPollVoteTCValidation").applyPollVoteTCValidation(
            e.map(function (e) {
              var t,
                r,
                a = m(n, e),
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
            t.processMode ===
              o("WAWebAddonConstants").AddonProcessMode.HistorySync
              ? "history-sync-vote"
              : "live-vote",
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t, n;
      return (
        e.pollUpdateMessageMetadata != null ||
        ((t = (n = e.unresolvedOptionHashes) == null ? void 0 : n.length) !=
        null
          ? t
          : 0) > 0
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      try {
        return e.getForAddon(t);
      } catch (e) {
        if (e instanceof o("WAWebAddonInfraError").AddonInfraError) return null;
        throw e;
      }
    }
    ((l.validateAddonPollVotes = e), (l.getPollVoteParentsForProcessMode = c));
  },
  98,
);
