__d(
  "WAWebNewsletterGetMyAddOnsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebGetMyAddOnsRPC",
    "WAWebNewsletterDBUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPollOptionHashUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMyNewsletterAddOns",
          async function () {
            var t = await o("WAWebGetMyAddOnsRPC").getMyNewsletterAddOnsRPC(e),
              n = t.messagesByNewsletter;
            return s(n, e.newsletterJid);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function s(e, t) {
      var n = e.reduce(
        function (e, n) {
          var r = n.jid,
            o = n.message,
            a = r != null ? r : t;
          return (
            a == null ||
              o.forEach(function (t) {
                var n = u(t, a);
                n != null && e.reactions.push(n);
                var r = c(t, a);
                r != null && e.pollVotes.push(r);
              }),
            e
          );
        },
        { reactions: [], pollVotes: [] },
      );
      return (
        await Promise.all([
          o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(
            n.reactions,
          ),
          o("WAWebCRUDOperationsNewsletterMyVotes").bulkCreateOrUpdateMyVotes(
            n.pollVotes,
          ),
        ]),
        n
      );
    }
    function u(e, t) {
      var n,
        r,
        a = o("WAWebNewsletterDBUtils")
          .craftNewsletterMsgKeyFromServerId(e.serverId, t)
          .toString(),
        i =
          e == null || (n = e.newsletterMyReactionMixin) == null
            ? void 0
            : n.reactionCode,
        l =
          e == null || (r = e.newsletterMyReactionMixin) == null
            ? void 0
            : r.reactionT;
      return i == null || l == null
        ? null
        : {
            parentMsgKey: a,
            senderUserJid: o("WAWebUserPrefsMeUser").getMeUser().toJid(),
            reactionText: i,
            timestamp: l * 1e3,
            orphan: 0,
            msgKey: a,
          };
    }
    function c(e, t) {
      var n = e.newsletterMyPollVoteMixin;
      if (n == null) return null;
      var r = n.votesT,
        a = n.votesVote;
      return {
        chatJid: t,
        msgServerId: e.serverId,
        serverTimestampMs: r * 1e3,
        t: r,
        msgKey: o("WAWebNewsletterDBUtils")
          .craftNewsletterMsgKeyFromServerId(e.serverId, t)
          .toString(),
        votes: a.map(function (e) {
          return o("WAWebPollOptionHashUtils").bufferToHex(e.elementValue);
        }),
      };
    }
    l.getMyNewsletterAddOnsJob = e;
  },
  98,
);
