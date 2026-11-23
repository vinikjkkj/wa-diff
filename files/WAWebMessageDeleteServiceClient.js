__d(
  "WAWebMessageDeleteServiceClient",
  ["WAWebMessageDeleteService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        sendDeleteMsgs: function (n, r, a) {
          return e(
            o("WAWebMessageDeleteService").MessageDeleteService,
            function (e) {
              return e.sendDeleteMsgs(n, r, a);
            },
          );
        },
      };
    }
    l.messageDeleteServiceClient = e;
  },
  98,
);
