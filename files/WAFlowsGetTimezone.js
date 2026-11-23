__d(
  "WAFlowsGetTimezone",
  ["memoize"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = "UTC",
        t = window.Intl;
      return (
        t != null &&
          t.DateTimeFormat() != null &&
          t.DateTimeFormat().resolvedOptions() != null &&
          (e = t.DateTimeFormat().resolvedOptions().timeZone || ""),
        e !== null && e !== "" ? e : "UTC"
      );
    }
    var s = r("memoize")(e)(),
      u = s;
    l.default = u;
  },
  98,
);
