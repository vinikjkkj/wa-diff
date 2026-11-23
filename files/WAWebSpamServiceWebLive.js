__d(
  "WAWebSpamServiceWebLive",
  ["JSResourceForInteraction", "Promise", "WAWebSpamService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WASmaxGroupsAcknowledgeGroupRPC",
      ).__setRef("WAWebSpamServiceWebLive"),
      u = r("JSResourceForInteraction")("WAWebSendNotSpamJob").__setRef(
        "WAWebSpamServiceWebLive",
      ),
      c = o("WAWebSpamService").SpamService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([s.load(), u.load()]);
          }),
          r = t[0].sendAcknowledgeGroupRPC,
          a = t[1],
          i = {
            sendNotSpam: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
            sendAcknowledgeGroupRPC: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t, n);
              });
            },
          };
        return i;
      });
    l.SpamServiceWebLive = c;
  },
  98,
);
