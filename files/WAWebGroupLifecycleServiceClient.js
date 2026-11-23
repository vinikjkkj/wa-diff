__d(
  "WAWebGroupLifecycleServiceClient",
  ["WAWebGroupLifecycleService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        createGroup: function (n, r, a) {
          return e(
            o("WAWebGroupLifecycleService").GroupLifecycleService,
            function (e) {
              return e.createGroup(n, r, a);
            },
          );
        },
        leaveGroup: function (n) {
          return e(
            o("WAWebGroupLifecycleService").GroupLifecycleService,
            function (e) {
              return e.leaveGroup(n);
            },
          );
        },
      };
    }
    l.groupLifecycleServiceClient = e;
  },
  98,
);
