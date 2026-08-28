__d(
  "AdsBusinessWhatsAppBusinessAccountProviderPluginBSPQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "wabaIds" }],
        t = [{ kind: "Variable", name: "ids", variableName: "wabaIds" }],
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
          concreteType: "AdBusiness",
          kind: "LinkedField",
          name: "bsp_partner_business",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
            n,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "profile_picture_url",
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
          name: "AdsBusinessWhatsAppBusinessAccountProviderPluginBSPQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [n, r],
                  type: "WhatsAppBusinessAccount",
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
          name: "AdsBusinessWhatsAppBusinessAccountProviderPluginBSPQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                n,
                {
                  kind: "InlineFragment",
                  selections: [r],
                  type: "WhatsAppBusinessAccount",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26672012252433699",
          metadata: {},
          name: "AdsBusinessWhatsAppBusinessAccountProviderPluginBSPQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
