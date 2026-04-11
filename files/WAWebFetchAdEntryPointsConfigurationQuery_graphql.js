__d(
  "WAWebFetchAdEntryPointsConfigurationQuery.graphql",
  ["WAWebFetchAdEntryPointsConfigurationQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "entry_point_or_experience",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchAdEntryPointsConfigurationQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                concreteType: "TCTWAClientEntryPointEntitlementResponse",
                kind: "LinkedField",
                name: "ctwa_client_entry_point_entitlement",
                plural: !0,
                selections: [
                  {
                    kind: "RequiredField",
                    field: e,
                    action: "THROW",
                    path: "ctwa_client_entry_point_entitlement.entry_point_or_experience",
                  },
                  {
                    kind: "RequiredField",
                    field: t,
                    action: "THROW",
                    path: "ctwa_client_entry_point_entitlement.should_show",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "ctwa_client_entry_point_entitlement",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchAdEntryPointsConfigurationQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TCTWAClientEntryPointEntitlementResponse",
              kind: "LinkedField",
              name: "ctwa_client_entry_point_entitlement",
              plural: !0,
              selections: [e, t],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebFetchAdEntryPointsConfigurationQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebFetchAdEntryPointsConfigurationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
