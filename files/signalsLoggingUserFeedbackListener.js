__d(
  "signalsLoggingUserFeedbackListener",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["ONE_LINE_PER_CALL"]);
    function l(t) {
      return { type: "USER_FEEDBACK", cb: t, options: e };
    }
    a.exports = l;
  },
  null,
);
