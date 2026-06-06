__d(
  "WAWebNewsletterPollVotesModelCollection",
  [
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebCRUDOperationsNewsletterPollsVotes",
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebNewsletterPollVotesModel",
    "WAWebPollsCreateOptionLocalIdMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.findImpl = async function (e) {
            var t = e.toString(),
              n = await o("WAWebCRUDOperationsNewsletterPollsVotes").getVote(t),
              a = await o(
                "WAWebMsgCollection",
              ).MsgCollection.hydrateOrGetMessages([t]),
              i = a[0];
            if (i == null)
              throw new (o("WAWebMiscErrors").NotFoundError)("No votes found");
            var l = i.id.remote.toJid(),
              s = i.pollOptions,
              u = i.serverId,
              c =
                u != null
                  ? await o("WAWebCRUDOperationsNewsletterMyVotes").getMyVote(
                      l,
                      u,
                    )
                  : null;
            if (s == null)
              throw new (o("WAWebMiscErrors").NotFoundError)(
                "No pollOptions found",
              );
            if (n == null && c == null)
              throw new (o("WAWebMiscErrors").NotFoundError)(
                "No polls to display",
              );
            var d = {
                id: r("WAWebMsgKey").fromString(t),
                pollVotesCountMap: new Map(),
              },
              m = await o(
                "WAWebPollsCreateOptionLocalIdMap",
              ).createOptionLocalIdMap(s);
            if (
              (n != null &&
                ((d.pollVotesCountMap = new Map(
                  Array.from(n.votesMap.entries(), function (e) {
                    var t = e[0],
                      n = e[1];
                    return [m.getLocalIdForHexHash(t), n];
                  }),
                )),
                (d.pollVotesCountMapTs = o("WATimeUtils").castToUnixTime(
                  n.serverTimestamp,
                ))),
              c != null)
            ) {
              d.myVote = new Set(
                c.votes.map(function (e) {
                  return m.getLocalIdForHexHash(e);
                }),
              );
              var p = d.pollVotesCountMap;
              (d.myVote.forEach(function (e) {
                p != null && !p.has(e) && p.set(e, 1);
              }),
                (d.myVoteTs = o("WATimeUtils").castToMillisTime(
                  c.serverTimestampMs,
                )),
                (d.ack = c.ack));
            }
            return d;
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebNewsletterPollVotesModel").NewsletterPollVotes;
    function s(e) {
      var t = e.msgKey,
        n = e.parentMsgKey,
        r = e.selectedOptionLocalIds,
        o = e.timestamp,
        a = u.gadd({ id: n });
      return (a.updateMyVote(r, o, t), a);
    }
    var u = new e();
    ((l.updateOrCreatePollVote = s),
      (l.NewsletterPollVotesModelCollection = u));
  },
  98,
);
