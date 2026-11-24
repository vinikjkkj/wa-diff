__d(
  "WAWebPollServiceWebLive",
  ["WAWebPollService", "WAWebPollsRestoreLastSuccessfulVote", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPollService").PollService.make(function* () {
      var e = {
        restoreLastSuccessfulVote: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o(
              "WAWebPollsRestoreLastSuccessfulVote",
            ).restoreLastSuccessfulVote(t);
          });
        },
      };
      return e;
    });
    l.PollServiceWebLive = e;
  },
  98,
);
