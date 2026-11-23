__d(
  "A2UIGeoTypeaheadProfileSearchQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = { defaultValue: null, kind: "LocalArgument", name: "picture_size" },
        n = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        r = [
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
                name: "category",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "A2UIGeoTypeaheadProfileSearchQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "A2UIGeoTypeaheadProfileSearchQuery",
          selections: r,
        },
        params: {
          id: "27251205921141830",
          metadata: {},
          name: "A2UIGeoTypeaheadProfileSearchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
