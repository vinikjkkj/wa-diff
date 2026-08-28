__d(
  "MAIBAAdObjectReferenceHoverCardQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "ids" }],
        t = [{ kind: "Variable", name: "ids", variableName: "ids" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        o = [n, r],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = [r];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAAdObjectReferenceHoverCardQuery",
          selections: [
            {
              alias: "adCampaignGroup",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: o,
                  type: "AdCampaignGroup",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: "adCampaign",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: o,
                  type: "AdCampaign",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: "adGroup",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: o,
                  type: "Adgroup",
                  abstractKey: null,
                },
              ],
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
          name: "MAIBAAdObjectReferenceHoverCardQuery",
          selections: [
            {
              alias: "adCampaignGroup",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                a,
                n,
                {
                  kind: "InlineFragment",
                  selections: i,
                  type: "AdCampaignGroup",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: "adCampaign",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                a,
                n,
                {
                  kind: "InlineFragment",
                  selections: i,
                  type: "AdCampaign",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: "adGroup",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                a,
                n,
                {
                  kind: "InlineFragment",
                  selections: i,
                  type: "Adgroup",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26928882686752673",
          metadata: {},
          name: "MAIBAAdObjectReferenceHoverCardQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
