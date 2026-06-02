__d(
  "WAWebNewsletterBridgeMsgAddOnsUtils",
  [
    "WAWebMsgCollection",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterReactionCollection",
    "WAWebNoop",
    "WAWebPollsCreateOptionLocalIdMap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e != null && e.size > 0)
        for (var t of e.entries()) {
          var n = t[0],
            r = t[1],
            a = o("WAWebMsgCollection").MsgCollection.get(n);
          a == null || a.set("viewCount", r);
        }
    }
    function s(e) {
      if (e != null && e.size > 0)
        for (var t of e.entries()) {
          var n = t[0],
            r = t[1],
            a = o("WAWebMsgCollection").MsgCollection.get(n);
          a == null || a.set("questionResponsesCount", r);
        }
    }
    function u(e) {
      if (e != null && e.size > 0)
        for (var t of e.entries()) {
          var n = t[0],
            r = t[1],
            a = o("WAWebMsgCollection").MsgCollection.get(n);
          if (a != null) {
            var i,
              l = (i = a.forwardsCount) != null ? i : 0;
            a.set("forwardsCount", Math.max(l, r));
          }
        }
    }
    async function c(e) {
      var t,
        n = e.ids,
        a = e.reactionIdsToRemove,
        i = e.reactions;
      (a != null &&
        o(
          "WAWebNewsletterReactionCollection",
        ).NewsletterMessageReactionsCollection.remove(a),
        await Promise.all(
          (t = n.map(function (e) {
            return o("WAWebNewsletterReactionCollection")
              .NewsletterMessageReactionsCollection.find(e.toString())
              .catch(r("WAWebNoop"));
          })) != null
            ? t
            : [],
        ),
        o(
          "WAWebNewsletterReactionCollection",
        ).NewsletterMessageReactionsCollection.add(
          i.map(function (e) {
            return {
              id: e.parentMsgKey,
              reactionCountMap: e.emojiCountMap,
              reactionCountMapTs: e.serverTimestamp,
            };
          }),
          { merge: !0 },
        ));
    }
    async function d(e) {
      var t,
        n = e.ids,
        a = e.pollVotes;
      await Promise.all(
        (t = n.map(function (e) {
          return o("WAWebNewsletterPollVotesModelCollection")
            .NewsletterPollVotesModelCollection.find(e)
            .catch(r("WAWebNoop"));
        })) != null
          ? t
          : [],
      );
      var i = await Promise.all(
        a.map(async function (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey),
            n = t == null ? void 0 : t.pollOptions;
          if (n != null) {
            var r = await o(
              "WAWebPollsCreateOptionLocalIdMap",
            ).createOptionLocalIdMap(n);
            return {
              id: e.parentMsgKey,
              pollVotesCountMap: m(e.voteCountMap, r),
              pollVotesCountMapTs: e.serverTimestamp,
            };
          }
        }),
      );
      o(
        "WAWebNewsletterPollVotesModelCollection",
      ).NewsletterPollVotesModelCollection.add(i.filter(Boolean), {
        merge: !0,
      });
    }
    function m(e, t) {
      var n = new Map();
      for (var r of e.entries()) {
        var o = r[0],
          a = r[1];
        n.set(t.getLocalIdForHexHash(o), a);
      }
      return n;
    }
    function p(e, t) {
      t != null &&
        e.forEach(function (e) {
          var n = o("WAWebMsgCollection").MsgCollection.get(e);
          n == null || n.set("lastUpdateFromServerTs", t);
        });
    }
    ((l.updateViewCounts = e),
      (l.updateQuestionResponsesCounts = s),
      (l.updateForwardCounts = u),
      (l.updateReactions = c),
      (l.updatePollVotes = d),
      (l.updateLastUpdateTs = p));
  },
  98,
);
