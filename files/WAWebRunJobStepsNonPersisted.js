__d(
  "WAWebRunJobStepsNonPersisted",
  ["WATimeUtils", "err"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a = {
        afterCrash: !1,
        interruptJob: function () {
          throw r("err")("non-persisted job " + e + " tried to interrupt");
        },
        jobStartTime: o("WATimeUtils").unixTime(),
      };
      await t.reduce(function (e, t) {
        return e.then(function (e) {
          var r = t.info(e, n, a),
            o = r.code;
          return o(e, n, a);
        });
      }, Promise.resolve(n));
    }
    l.runJobStepsNonPersisted = e;
  },
  98,
);
