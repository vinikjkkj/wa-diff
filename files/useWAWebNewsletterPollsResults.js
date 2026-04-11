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
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s || (s = o("react"))).useEffect;
    function c(e, t) {
      var a = o("react-compiler-runtime").c(15),
        i;
      a[0] !== t
        ? ((i = t === void 0 ? {} : t), (a[0] = t), (a[1] = i))
        : (i = a[1]);
      var l = i,
        s = l.pollVoteLocalId,
        c;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = ["id", "pollOptions"]), (a[2] = c))
        : (c = a[2]);
      var p = o("useWAWebModelValues").useModelValues(e, c),
        _ = p.id,
        f = p.pollOptions,
        g,
        h;
      (a[3] !== _ || a[4] !== e || a[5] !== s
        ? ((g = function () {
            n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                var t = yield o("WAWebNewsletterPollVotesModelCollection")
                  .NewsletterPollVotesModelCollection.find(_)
                  .catch(m);
                if (t != null) {
                  var n = yield o(
                    "WAWebNewsletterFetchPollVotersAction",
                  ).fetchPollVotersAction({
                    msg: e.unsafe(),
                    pollVoteLocalId: s,
                  });
                  n != null && t.updatePollVotersMap(n, s);
                }
              })()
              .catch(d);
          }),
          (h = [_, e, s]),
          (a[3] = _),
          (a[4] = e),
          (a[5] = s),
          (a[6] = g),
          (a[7] = h))
        : ((g = a[6]), (h = a[7])),
        u(g, h));
      var y;
      a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["add", "remove", "reset", "change"]), (a[8] = y))
        : (y = a[8]);
      var C;
      a[9] !== _
        ? ((C = function () {
            return o(
              "WAWebNewsletterPollVotesModelCollection",
            ).NewsletterPollVotesModelCollection.get(_);
          }),
          (a[9] = _),
          (a[10] = C))
        : (C = a[10]);
      var b = r("useWAWebEventTargetValue")(
          o("WAWebNewsletterPollVotesModelCollection")
            .NewsletterPollVotesModelCollection,
          y,
          C,
        ),
        v;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [
            "change:myVote",
            "change:pollVotesCountMapTs",
            "change:pollVotersMap",
            "remove",
          ]),
          (a[11] = v))
        : (v = a[11]);
      var S;
      a[12] !== f || a[13] !== b
        ? ((S = function () {
            return o("WAWebNewsletterPollsUtils").aggregateNewsletterVotes(
              b,
              f,
              o("WAWebContactCollection").ContactCollection.getMeContact(),
            );
          }),
          (a[12] = f),
          (a[13] = b),
          (a[14] = S))
        : (S = a[14]);
      var R = r("useWAWebEventTargetValue")(b, v, S);
      return R;
    }
    function d(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[useWAWebNewsletterPollVotes] Failed to load polls from collection",
            ])),
        )
        .sendLogs("newsletter-hook-failed-to-load-polls-from-collection");
    }
    function m() {
      return null;
    }
    l.useNewsletterPollsResults = c;
  },
  98,
);
