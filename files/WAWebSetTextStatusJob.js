__d(
  "WAWebSetTextStatusJob",
  [
    "WAWebDefinePersistedJob",
    "WAWebUpdateTextStatusJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep(
        "sendMex",
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.emoji,
              n = e.ephemeralDurationSeconds,
              r = e.text,
              a = yield o("WAWebUpdateTextStatusJob").updateTextStatus(r, t, n);
            return a;
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      )
      .end();
    l.setTextStatus = e;
  },
  98,
);
