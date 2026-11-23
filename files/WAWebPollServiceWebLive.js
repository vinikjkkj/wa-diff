__d(
  "WAWebPollServiceWebLive",
  ["JSResourceForInteraction", "WAWebPollService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebPollsRestoreLastSuccessfulVote",
      ).__setRef("WAWebPollServiceWebLive"),
      s = o("WAWebPollService").PollService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.restoreLastSuccessfulVote,
          r = {
            restoreLastSuccessfulVote: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return n(t);
              });
            },
          };
        return r;
      });
    l.PollServiceWebLive = s;
  },
  98,
);
