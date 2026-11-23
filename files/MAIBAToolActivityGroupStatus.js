__d(
  "MAIBAToolActivityGroupStatus",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.tool_status === "FAILED"
        ? "failed"
        : e.is_completed === !0 || e.tool_result != null
          ? "completed"
          : "running";
    }
    function l(t) {
      return t.some(function (t) {
        return e(t) === "running";
      })
        ? "running"
        : t.some(function (t) {
              return e(t) === "failed";
            })
          ? "failed"
          : "completed";
    }
    i.default = l;
  },
  66,
);
