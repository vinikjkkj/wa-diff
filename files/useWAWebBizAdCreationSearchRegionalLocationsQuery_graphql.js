__d(
  "useWAWebBizAdCreationSearchRegionalLocationsQuery.graphql",
  ["useWAWebBizAdCreationSearchRegionalLocationsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: 10, kind: "LocalArgument", name: "first" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "locationTypes",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "query" },
        o = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "first", variableName: "first" },
              {
                kind: "Variable",
                name: "location_types",
                variableName: "locationTypes",
              },
              { kind: "Variable", name: "query", variableName: "query" },
            ],
            concreteType: "GeoLocationResult",
            kind: "LinkedField",
            name: "geo_locations_search",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "key",
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
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "country_code",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "country_name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "region",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "region_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_worldwide",
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
          name: "useWAWebBizAdCreationSearchRegionalLocationsQuery",
          selections: o,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, e, t],
          kind: "Operation",
          name: "useWAWebBizAdCreationSearchRegionalLocationsQuery",
          selections: o,
        },
        params: {
          id: n(
            "useWAWebBizAdCreationSearchRegionalLocationsQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationSearchRegionalLocationsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
