__d(
  "schedulePeriodicTask",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = async function () {
        try {
          await e();
        } finally {
          globalThis.setTimeout(n, t);
        }
      };
      globalThis.setTimeout(n, 0);
    }
    i.schedulePeriodicTask = e;
  },
  66,
);
