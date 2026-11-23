__d(
  "WAWebMessageStarServiceClient",
  ["WAWebMessageStarService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        sendStarMsgs: function (n, r, a) {
          return e(
            o("WAWebMessageStarService").MessageStarService,
            function (e) {
              return e.sendStarMsgs(n, r, a);
            },
          );
        },
        sendUnstarAll: function (n, r) {
          return e(
            o("WAWebMessageStarService").MessageStarService,
            function (e) {
              return e.sendUnstarAll(n, r);
            },
          );
        },
      };
    }
    l.messageStarServiceClient = e;
  },
  98,
);
