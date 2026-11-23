__d(
  "getLWIMessageFinality",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "LLM_DONE" || e === "MAKING_TITLE" || e === "OVERALL_DONE"
        ? "final"
        : e === "CLIENT_STOP" ||
            e === "CLIENT_STREAMING_ERROR" ||
            e === "CLIENT_SWITCH_TO_ASYNC" ||
            e === "ERROR" ||
            e === "ERROR_LOGIN_REQUIRED"
          ? "never"
          : "pending";
    }
    l.default = e;
  },
  98,
);
