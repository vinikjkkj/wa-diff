__d(
  "WAWebContactQueryServiceClient",
  ["WAWebContactQueryService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        queryPhoneExists: function (n, r) {
          return e(
            o("WAWebContactQueryService").ContactQueryService,
            function (e) {
              return e.queryPhoneExists(n, r);
            },
          );
        },
      };
    }
    l.contactQueryServiceClient = e;
  },
  98,
);
