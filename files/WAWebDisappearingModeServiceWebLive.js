__d(
  "WAWebDisappearingModeServiceWebLive",
  [
    "WAWebDisappearingModeService",
    "WAWebSetDisappearingModeJob",
    "WAWebUpdateDisappearingModeForContact",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDisappearingModeService").DisappearingModeService.make(
      function* () {
        var e = {
          setDisappearingMode: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebSetDisappearingModeJob").setDisappearingMode(t);
            });
          },
          updateDisappearingModeForContact: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebUpdateDisappearingModeForContact",
              ).updateDisappearingModeForContact(t);
            });
          },
        };
        return e;
      },
    );
    l.DisappearingModeServiceWebLive = e;
  },
  98,
);
