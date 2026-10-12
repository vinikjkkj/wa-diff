__d(
  "WAWebHatchBrowserTaskState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "COMPLETED" || e === "FAILED" || e === "STOPPED";
    }
    function l(e) {
      return e != null && e.trim() !== "" ? e : null;
    }
    function s(e) {
      return e.slice(e.lastIndexOf(":") + 1);
    }
    ((i.isSettledBrowserTaskState = e),
      (i.nonBlank = l),
      (i.normalizedBrowserTaskID = s));
  },
  66,
);
