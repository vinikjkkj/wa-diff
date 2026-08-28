__d(
  "MAIBARecordAsyncAuthConsentMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ad_account_id",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        n = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "ad_account_id",
                    variableName: "ad_account_id",
                  },
                  {
                    kind: "Variable",
                    name: "page_id",
                    variableName: "page_id",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "MAIBARecordAsyncAuthConsentResult",
            kind: "LinkedField",
            name: "maiba_record_async_auth_consent",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_message",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "MAIBARecordAsyncAuthConsentMutation",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "MAIBARecordAsyncAuthConsentMutation",
          selections: n,
        },
        params: {
          id: "27087116144243008",
          metadata: {},
          name: "MAIBARecordAsyncAuthConsentMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
