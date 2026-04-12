__d(
  "useWAWebNewsletterPollsResults",
  [
    "WALogger",
    "WAWebContactCollection",
    "WAWebNewsletterFetchPollVotersAction",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterPollsUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s || (s = o("react"))).useEffect;
    function c(t, a) {
      var i = a === void 0 ? {} : a,
        l = i.pollVoteLocalId,
        s = o("useWAWebModelValues").useModelValues(t, ["id", "pollOptions"]),
        c = s.id,
        d = s.pollOptions;
      u(
        function () {
          n("asyncToGeneratorRuntime")
            .asyncToGenerator(function* () {
              var e = yield o("WAWebNewsletterPollVotesModelCollection")
                .NewsletterPollVotesModelCollection.find(c)
                .catch(function () {
                  return null;
                });
              if (e != null) {
                var n = yield o(
                  "WAWebNewsletterFetchPollVotersAction",
                ).fetchPollVotersAction({
                  msg: t.unsafe(),
                  pollVoteLocalId: l,
                });
                n != null && e.updatePollVotersMap(n, l);
              }
            })()
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[useWAWebNewsletterPollVotes] Failed to load polls from collection",
                    ])),
                )
                .sendLogs(
                  "newsletter-hook-failed-to-load-polls-from-collection",
                );
            });
        },
        [c, t, l],
      );
      var m = r("useWAWebEventTargetValue")(
          o("WAWebNewsletterPollVotesModelCollection")
            .NewsletterPollVotesModelCollection,
          ["add", "remove", "reset", "change"],
          function () {
            return o(
              "WAWebNewsletterPollVotesModelCollection",
            ).NewsletterPollVotesModelCollection.get(c);
          },
        ),
        p = r("useWAWebEventTargetValue")(
          m,
          [
            "change:myVote",
            "change:pollVotesCountMapTs",
            "change:pollVotersMap",
            "remove",
          ],
          function () {
            return o("WAWebNewsletterPollsUtils").aggregateNewsletterVotes(
              m,
              d,
              o("WAWebContactCollection").ContactCollection.getMeContact(),
            );
          },
        );
      return p;
    }
    l.useNewsletterPollsResults = c;
  },
  98,
);
