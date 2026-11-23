__d(
  "WAWebProfileServiceClient",
  ["WAWebProfileService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        setPushName: function (n) {
          return e(o("WAWebProfileService").ProfileService, function (e) {
            return e.setPushName(n);
          });
        },
      };
    }
    l.profileServiceClient = e;
  },
  98,
);
