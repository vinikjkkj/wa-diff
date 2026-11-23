__d(
  "isMAIBAIssueContextLBDPromptEligible",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n = e.plan_v2;
      return (
        (n == null ? void 0 : n.id) != null &&
        n.id !== "" &&
        n.name != null &&
        n.name !== "" &&
        ((t = n.topic) == null ? void 0 : t.id) != null &&
        n.topic.id !== ""
      );
    }
    i.default = e;
  },
  66,
);
