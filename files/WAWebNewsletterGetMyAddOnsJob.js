__d(
  "WAWebNewsletterGetMyAddOnsJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebGetMyAddOnsRPC",
    "WAWebNewsletterDBUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPollOptionHashUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMyNewsletterAddOns",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o("WAWebGetMyAddOnsRPC").getMyNewsletterAddOnsRPC(e),
              n = t.messagesByNewsletter;
            return u(n, e.newsletterJid);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = t.reduce(
            function (e, t) {
              var n = t.jid,
                o = t.message,
                a = n != null ? n : r;
              return (
                a == null ||
                  o.forEach(function (t) {
                    var n = d(t, a);
                    n != null && e.reactions.push(n);
                    var r = m(t, a);
                    r != null && e.pollVotes.push(r);
                  }),
                e
              );
            },
            { reactions: [], pollVotes: [] },
          );
          return (
            yield (e || (e = n("Promise"))).all([
              o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(
                a.reactions,
              ),
              o(
                "WAWebCRUDOperationsNewsletterMyVotes",
              ).bulkCreateOrUpdateMyVotes(a.pollVotes),
            ]),
            a
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
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
            senderUserJid: o("WAWebUserPrefsMeUser")
              .getMePnUserOrThrow_DO_NOT_USE()
              .toString(),
            reactionText: i,
            timestamp: l * 1e3,
            orphan: 0,
            msgKey: a,
          };
    }
    function m(e, t) {
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
    l.getMyNewsletterAddOnsJob = s;
  },
  98,
);
