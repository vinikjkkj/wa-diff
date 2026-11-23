__d(
  "WAWebSpamServiceClient",
  ["WAWebSpamService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        sendNotSpam: function (n) {
          return e(o("WAWebSpamService").SpamService, function (e) {
            return e.sendNotSpam(n);
          });
        },
        sendAcknowledgeGroupRPC: function (n, r) {
          return e(o("WAWebSpamService").SpamService, function (e) {
            return e.sendAcknowledgeGroupRPC(n, r);
          });
        },
      };
    }
    l.spamServiceClient = e;
  },
  98,
);
