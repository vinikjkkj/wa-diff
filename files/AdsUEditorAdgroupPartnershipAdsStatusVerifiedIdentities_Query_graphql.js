__d(
  "AdsUEditorAdgroupPartnershipAdsStatusVerifiedIdentities_Query.graphql",
  ["AdsRelaySurfaces_execTimeResolversProvider"],
  function (t, n, r, o, a, i) {
    "use strict";
    var l;
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hasPrimaryPage",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hasSecondaryPage",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "primaryPageID",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "secondaryPageID",
        },
        a = [{ kind: "Variable", name: "id", variableName: "primaryPageID" }],
        i = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_verified",
              storageKey: null,
            },
          ],
          type: "Page",
          abstractKey: null,
        },
        l = [i],
        s = [{ kind: "Variable", name: "id", variableName: "secondaryPageID" }],
        u = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          i,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "AdsUEditorAdgroupPartnershipAdsStatusVerifiedIdentities_Query",
          selections: [
            {
              condition: "hasPrimaryPage",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "primary_page",
                  args: a,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: l,
                  storageKey: null,
                },
              ],
            },
            {
              condition: "hasSecondaryPage",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "secondary_page",
                  args: s,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: l,
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, e, o, t],
          kind: "Operation",
          name: "AdsUEditorAdgroupPartnershipAdsStatusVerifiedIdentities_Query",
          selections: [
            {
              condition: "hasPrimaryPage",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "primary_page",
                  args: a,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: u,
                  storageKey: null,
                },
              ],
            },
            {
              condition: "hasSecondaryPage",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "secondary_page",
                  args: s,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: u,
                  storageKey: null,
                },
              ],
            },
          ],
          exec_time_resolvers_enabled_provider: n(
            "AdsRelaySurfaces_execTimeResolversProvider",
          ),
        },
        params: {
          id: "28312488775011145",
          metadata: {
            server_variables: [
              "primaryPageID",
              "hasPrimaryPage",
              "secondaryPageID",
              "hasSecondaryPage",
            ],
          },
          name: "AdsUEditorAdgroupPartnershipAdsStatusVerifiedIdentities_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (((l = e.operation.exec_time_resolvers_enabled_provider) == null
      ? void 0
      : l.get()) === !0 && (e.params.metadata.operation = e.operation),
      (a.exports = e));
  },
  null,
);
