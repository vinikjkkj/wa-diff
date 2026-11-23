__d(
  "WAWebDisappearingModeServiceClient",
  ["WAWebDisappearingModeService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        setDisappearingMode: function (n) {
          return e(
            o("WAWebDisappearingModeService").DisappearingModeService,
            function (e) {
              return e.setDisappearingMode(n);
            },
          );
        },
        updateDisappearingModeForContact: function (n) {
          return e(
            o("WAWebDisappearingModeService").DisappearingModeService,
            function (e) {
              return e.updateDisappearingModeForContact(n);
            },
          );
        },
      };
    }
    l.disappearingModeServiceClient = e;
  },
  98,
);
