__d(
  "CometFRXProfileSelectionDataSourceQuery.graphql",
  ["CometFRXProfileSelectionDataSourceQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = { defaultValue: null, kind: "LocalArgument", name: "picture_size" },
        r = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        o = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "FRXProfileEvidencePayload",
            kind: "LinkedField",
            name: "cix_frx_evidence_profile_search",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "height",
                    variableName: "picture_size",
                  },
                  { kind: "Variable", name: "scale", variableName: "scale" },
                  {
                    kind: "Variable",
                    name: "width",
                    variableName: "picture_size",
                  },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "verified_status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "fan_count",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "category",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "CometFRXProfileSelectionDataSourceQuery",
          selections: o,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t],
          kind: "Operation",
          name: "CometFRXProfileSelectionDataSourceQuery",
          selections: o,
        },
        params: {
          id: n(
            "CometFRXProfileSelectionDataSourceQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometFRXProfileSelectionDataSourceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
