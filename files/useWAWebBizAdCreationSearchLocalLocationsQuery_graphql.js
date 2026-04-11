__d(
  "useWAWebBizAdCreationSearchLocalLocationsQuery.graphql",
  ["useWAWebBizAdCreationSearchLocalLocationsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: 5, kind: "LocalArgument", name: "first" },
        t = { defaultValue: null, kind: "LocalArgument", name: "query" },
        r = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "first", variableName: "first" },
              {
                kind: "Literal",
                name: "location_types",
                value: ["CUSTOM_LOCATION"],
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
                name: "primary_city_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Location",
                kind: "LinkedField",
                name: "coordinates",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "latitude",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "longitude",
                    storageKey: null,
                  },
                ],
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
          name: "useWAWebBizAdCreationSearchLocalLocationsQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "useWAWebBizAdCreationSearchLocalLocationsQuery",
          selections: r,
        },
        params: {
          id: n(
            "useWAWebBizAdCreationSearchLocalLocationsQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationSearchLocalLocationsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
