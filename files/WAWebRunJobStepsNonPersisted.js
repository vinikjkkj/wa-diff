__d(
  "WAWebRunJobStepsNonPersisted",
  ["WATimeUtils", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = {
            afterCrash: !1,
            interruptJob: function () {
              throw r("err")("non-persisted job " + e + " tried to interrupt");
            },
            jobStartTime: o("WATimeUtils").unixTime(),
          };
          yield t.reduce(function (e, t) {
            return e.then(function (e) {
              var r = t.info(e, n, a),
                o = r.code;
              return o(e, n, a);
            });
          }, Promise.resolve(n));
        })),
        s.apply(this, arguments)
      );
    }
    l.runJobStepsNonPersisted = e;
  },
  98,
);
