__d(
  "MAWIsQuotaExceededError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
      return (
        t.name === "QuotaExceededError" ||
        (t.inner != null && t.inner.name === "QuotaExceededError")
      );
    };
    i.isQuotaExceededError = e;
  },
  66,
);
