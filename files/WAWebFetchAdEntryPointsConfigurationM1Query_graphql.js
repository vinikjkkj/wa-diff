__d(
  "WAWebFetchAdEntryPointsConfigurationM1Query.graphql",
  ["WAWebFetchAdEntryPointsConfigurationM1Query_facebookRelayOperation"],
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
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "content",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "sub_content",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchAdEntryPointsConfigurationM1Query",
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
                  r,
                  o,
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
          name: "WAWebFetchAdEntryPointsConfigurationM1Query",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TCTWAClientEntryPointEntitlementResponse",
              kind: "LinkedField",
              name: "ctwa_client_entry_point_entitlement",
              plural: !0,
              selections: [e, t, r, o],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebFetchAdEntryPointsConfigurationM1Query_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebFetchAdEntryPointsConfigurationM1Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
