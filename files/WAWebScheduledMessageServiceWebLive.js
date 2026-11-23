__d(
  "WAWebScheduledMessageServiceWebLive",
  ["JSResourceForInteraction", "WAWebScheduledMessageService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")("WAWebScheduledMsgStore").__setRef(
        "WAWebScheduledMessageServiceWebLive",
      ),
      s = o("WAWebScheduledMessageService").ScheduledMessageService.make(
        function* () {
          var t = yield* o("WebDi.Async").fromPromise(function () {
              return e.load();
            }),
            n = t.getScheduledMessageCount,
            r = {
              getScheduledMessageCount: function (t) {
                return o("WebDi.Async").fromPromise(function () {
                  return n(t);
                });
              },
            };
          return r;
        },
      );
    l.ScheduledMessageServiceWebLive = s;
  },
  98,
);
