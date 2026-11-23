__d(
  "AdAccountReviewUtilsFetchMAIBAAccountReviewStatusQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "accountReviewTrackerId",
          },
        ],
        t = { vultureHash: "URaveYuE-1HcY_H1mtqrkS4GCbs=" },
        n = [
          {
            kind: "Variable",
            name: "id",
            variableName: "accountReviewTrackerId",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "review_status",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: t,
          name: "AdAccountReviewUtilsFetchMAIBAAccountReviewStatusQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "XFBMAIBAAccountStatusReview",
              kind: "LinkedField",
              name: "xfb_maiba_account_status_review",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdAccountReviewUtilsFetchMAIBAAccountReviewStatusQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "XFBMAIBAAccountStatusReview",
              kind: "LinkedField",
              name: "xfb_maiba_account_status_review",
              plural: !1,
              selections: [
                r,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27373577375583160",
          metadata: t,
          name: "AdAccountReviewUtilsFetchMAIBAAccountReviewStatusQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
