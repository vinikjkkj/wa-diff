__d(
  "WAWebStatusUpdatesServiceClient",
  ["WAWebStatusUpdatesService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        queryStatusAll: function () {
          return e(
            o("WAWebStatusUpdatesService").StatusUpdatesService,
            function (e) {
              return e.queryStatusAll();
            },
          );
        },
        sendReadStatus: function (n, r, a) {
          return e(
            o("WAWebStatusUpdatesService").StatusUpdatesService,
            function (e) {
              return e.sendReadStatus(n, r, a);
            },
          );
        },
      };
    }
    l.statusUpdatesServiceClient = e;
  },
  98,
);
