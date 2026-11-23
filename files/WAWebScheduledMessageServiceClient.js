__d(
  "WAWebScheduledMessageServiceClient",
  ["WAWebScheduledMessageService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        getScheduledMessageCount: function (n) {
          return e(
            o("WAWebScheduledMessageService").ScheduledMessageService,
            function (e) {
              return e.getScheduledMessageCount(n);
            },
          );
        },
      };
    }
    l.scheduledMessageServiceClient = e;
  },
  98,
);
