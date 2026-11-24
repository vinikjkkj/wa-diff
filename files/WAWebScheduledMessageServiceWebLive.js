__d(
  "WAWebScheduledMessageServiceWebLive",
  ["WAWebScheduledMessageService", "WAWebScheduledMsgStore", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebScheduledMessageService").ScheduledMessageService.make(
      function* () {
        var e = {
          getScheduledMessageCount: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebScheduledMsgStore").getScheduledMessageCount(t);
            });
          },
        };
        return e;
      },
    );
    l.ScheduledMessageServiceWebLive = e;
  },
  98,
);
