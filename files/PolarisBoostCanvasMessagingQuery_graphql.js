__d(
  "PolarisBoostCanvasMessagingQuery.graphql",
  ["PolarisBoostCanvasMessagingQuery_instagramRelayOperation", "relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "loadMessaging" },
        ],
        t = {
          alias: null,
          args: [
            { kind: "Literal", name: "include_page_linked_number", value: !1 },
          ],
          concreteType: "IGWebDisplayWhatsappNumberResponse",
          kind: "LinkedField",
          name: "linked_whatsapp_business_phone_number",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "country_prefix",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "phone_number",
              storageKey: null,
            },
          ],
          storageKey:
            "linked_whatsapp_business_phone_number(include_page_linked_number:false)",
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "fbid_v2",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pk",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "PolarisBoostCanvasMessagingQuery",
          selections: [
            {
              condition: "loadMessaging",
              kind: "Condition",
              passingValue: !0,
              selections: [
                t,
                {
                  alias: null,
                  args: null,
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "user",
                      plural: !1,
                      selections: [r, o],
                      storageKey: null,
                    },
                  ],
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "PolarisBoostCanvasMessagingQuery",
          selections: [
            {
              condition: "loadMessaging",
              kind: "Condition",
              passingValue: !0,
              selections: [
                t,
                {
                  alias: null,
                  args: null,
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "user",
                      plural: !1,
                      selections: [
                        r,
                        o,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "id",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: n("PolarisBoostCanvasMessagingQuery_instagramRelayOperation"),
          metadata: { is_fully_www_executable: !0 },
          name: "PolarisBoostCanvasMessagingQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
