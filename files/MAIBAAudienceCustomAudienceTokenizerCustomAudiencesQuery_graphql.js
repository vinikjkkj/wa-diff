__d(
  "MAIBAAudienceCustomAudienceTokenizerCustomAudiencesQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
          { defaultValue: null, kind: "LocalArgument", name: "mode" },
          { defaultValue: null, kind: "LocalArgument", name: "query" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: [
            { kind: "Variable", name: "first", variableName: "first" },
            { kind: "Variable", name: "mode", variableName: "mode" },
            { kind: "Variable", name: "query", variableName: "query" },
          ],
          concreteType: "MAIBACustomAudienceTypeaheadResult",
          kind: "LinkedField",
          name: "maiba_custom_audience_typeahead",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "allow_new_campaigns",
              storageKey: null,
            },
            n,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_disabled",
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
              name: "subtype",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAAudienceCustomAudienceTokenizerCustomAudiencesQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
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
          name: "MAIBAAudienceCustomAudienceTokenizerCustomAudiencesQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [r, n],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28661201523556997",
          metadata: {},
          name: "MAIBAAudienceCustomAudienceTokenizerCustomAudiencesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
