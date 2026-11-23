__d(
  "WAWebDisappearingModeServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebDisappearingModeService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebSetDisappearingModeJob").__setRef(
        "WAWebDisappearingModeServiceWebLive",
      ),
      u = r("JSResourceForInteraction")(
        "WAWebUpdateDisappearingModeForContact",
      ).__setRef("WAWebDisappearingModeServiceWebLive"),
      c = o("WAWebDisappearingModeService").DisappearingModeService.make(
        function* () {
          var t = yield* o("WebDi.Async").fromPromise(function () {
              return (e || (e = n("Promise"))).all([s.load(), u.load()]);
            }),
            r = t[0].setDisappearingMode,
            a = t[1].updateDisappearingModeForContact,
            i = {
              setDisappearingMode: function (t) {
                return o("WebDi.Async").fromPromise(function () {
                  return r(t);
                });
              },
              updateDisappearingModeForContact: function (t) {
                return o("WebDi.Async").fromPromise(function () {
                  return a(t);
                });
              },
            };
          return i;
        },
      );
    l.DisappearingModeServiceWebLive = c;
  },
  98,
);
