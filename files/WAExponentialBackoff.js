__d(
  "WAExponentialBackoff",
  ["WABackoff", "WAExponentialBackoffIterator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["signal", "timeoutIncludesTaskDuration"],
      s = babelHelpers.extends(
        {},
        o("WAExponentialBackoffIterator").defaults,
        o("WABackoff").defaults,
      );
    function u(t, n) {
      var r = babelHelpers.extends({}, s, t),
        a = r.signal,
        i = r.timeoutIncludesTaskDuration,
        l = babelHelpers.objectWithoutPropertiesLoose(r, e),
        u = o("WAExponentialBackoffIterator").exponentialBackoffIterator(l);
      return o("WABackoff").backoff(
        { signal: a, timeoutIterator: u, timeoutIncludesTaskDuration: i },
        n,
      );
    }
    l.exponentialBackoff = u;
  },
  98,
);
