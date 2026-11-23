__d(
  "WAWebPollServiceClient",
  ["WAWebPollService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        restoreLastSuccessfulVote: function (n) {
          return e(o("WAWebPollService").PollService, function (e) {
            return e.restoreLastSuccessfulVote(n);
          });
        },
      };
    }
    l.pollServiceClient = e;
  },
  98,
);
