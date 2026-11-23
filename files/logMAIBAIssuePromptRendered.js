__d(
  "logMAIBAIssuePromptRendered",
  ["PaidSupportFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("PaidSupportFalcoEvent").log(function () {
        return {
          ad_account_id: e,
          event: "maiba_issue_prompt_rendered",
          event_data: { placement: t },
        };
      });
    }
    l.default = e;
  },
  98,
);
