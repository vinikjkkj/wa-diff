__d(
  "WAWebNewsletterBridgeMsgAddOnsUtils",
  [
    "Promise",
    "WAWebMsgCollection",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterReactionCollection",
    "WAWebNoop",
    "WAWebPollsCreateOptionLocalIdMap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      if (e != null && e.size > 0)
        for (var t of e.entries()) {
          var n = t[0],
            r = t[1],
            a = o("WAWebMsgCollection").MsgCollection.get(n);
          a == null || a.set("viewCount", r);
        }
    }
    function u(e) {
      if (e != null && e.size > 0)
        for (var t of e.entries()) {
          var n = t[0],
            r = t[1],
            a = o("WAWebMsgCollection").MsgCollection.get(n);
          a == null || a.set("questionResponsesCount", r);
        }
    }
    function c(e) {
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = t.ids,
            l = t.reactionIdsToRemove,
            s = t.reactions;
          (l != null &&
            o(
              "WAWebNewsletterReactionCollection",
            ).NewsletterMessageReactionsCollection.remove(l),
            yield (e || (e = n("Promise"))).all(
              (a = i.map(function (e) {
                return o("WAWebNewsletterReactionCollection")
                  .NewsletterMessageReactionsCollection.find(e.toString())
                  .catch(r("WAWebNoop"));
              })) != null
                ? a
                : [],
            ),
            o(
              "WAWebNewsletterReactionCollection",
            ).NewsletterMessageReactionsCollection.add(
              s.map(function (e) {
                return {
                  id: e.parentMsgKey,
                  reactionCountMap: e.emojiCountMap,
                  reactionCountMapTs: e.serverTimestamp,
                };
              }),
              { merge: !0 },
            ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = t.ids,
            l = t.pollVotes;
          yield (e || (e = n("Promise"))).all(
            (a = i.map(function (e) {
              return o("WAWebNewsletterPollVotesModelCollection")
                .NewsletterPollVotesModelCollection.find(e)
                .catch(r("WAWebNoop"));
            })) != null
              ? a
              : [],
          );
          var s = yield e.all(
            l.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = o("WAWebMsgCollection").MsgCollection.get(
                        e.parentMsgKey,
                      ),
                      n = t == null ? void 0 : t.pollOptions;
                    if (n != null) {
                      var r = yield o(
                        "WAWebPollsCreateOptionLocalIdMap",
                      ).createOptionLocalIdMap(n);
                      return {
                        id: e.parentMsgKey,
                        pollVotesCountMap: f(e.voteCountMap, r),
                        pollVotesCountMapTs: e.serverTimestamp,
                      };
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          o(
            "WAWebNewsletterPollVotesModelCollection",
          ).NewsletterPollVotesModelCollection.add(s.filter(Boolean), {
            merge: !0,
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n = new Map();
      for (var r of e.entries()) {
        var o = r[0],
          a = r[1];
        n.set(t.getLocalIdForHexHash(o), a);
      }
      return n;
    }
    function g(e, t) {
      t != null &&
        e.forEach(function (e) {
          var n = o("WAWebMsgCollection").MsgCollection.get(e);
          n == null || n.set("lastUpdateFromServerTs", t);
        });
    }
    ((l.updateViewCounts = s),
      (l.updateQuestionResponsesCounts = u),
      (l.updateForwardCounts = c),
      (l.updateReactions = d),
      (l.updatePollVotes = p),
      (l.updateLastUpdateTs = g));
  },
  98,
);
