__d(
  "AdsCrepeGetCurrentStep",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return Math.max(
        0,
        t.findIndex(function (t) {
          return t.mergedAdObjectLevels.includes(e);
        }),
      );
    }
    i.default = e;
  },
  66,
);
