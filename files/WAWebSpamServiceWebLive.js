__d(
  "WAWebSpamServiceWebLive",
  [
    "WASmaxGroupsAcknowledgeGroupRPC",
    "WAWebSendNotSpamJob",
    "WAWebSpamService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebSpamService").SpamService.make(function* () {
      var e = {
        sendNotSpam: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return r("WAWebSendNotSpamJob")(t);
          });
        },
        sendAcknowledgeGroupRPC: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WASmaxGroupsAcknowledgeGroupRPC").sendAcknowledgeGroupRPC(
              t,
              n,
            );
          });
        },
      };
      return e;
    });
    l.SpamServiceWebLive = e;
  },
  98,
);
