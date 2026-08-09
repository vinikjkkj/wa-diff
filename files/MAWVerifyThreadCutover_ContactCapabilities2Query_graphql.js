__d(
  "MAWVerifyThreadCutover_ContactCapabilities2Query.graphql",
  ["MAWVerifyThreadCutover_ContactCapabilities2Query_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        t = [{ kind: "Variable", name: "id", variableName: "id" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message_capabilities2_str",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAWVerifyThreadCutover_ContactCapabilities2Query",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
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
          name: "MAWVerifyThreadCutover_ContactCapabilities2Query",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
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
          id: n(
            "MAWVerifyThreadCutover_ContactCapabilities2Query_facebookRelayOperation",
          ),
          metadata: {},
          name: "MAWVerifyThreadCutover_ContactCapabilities2Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
