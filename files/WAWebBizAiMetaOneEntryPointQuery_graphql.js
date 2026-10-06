__d(
  "WAWebBizAiMetaOneEntryPointQuery.graphql",
  ["WAWebBizAiMetaOneEntryPointQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "includeBizAiHome",
          },
        ],
        t = {
          condition: "includeBizAiHome",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBMetaAIBizAgentWAAIHome",
              kind: "LinkedField",
              name: "xfb_meta_ai_biz_agent_wa_ai_home",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_biz_ai_subscription_benefit_eligible",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "MetaAIBizAgentWASubscriptionState",
                  kind: "LinkedField",
                  name: "subscription_state",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "status",
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
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          concreteType: "AdBusiness",
          kind: "LinkedField",
          name: "owner_business",
          plural: !1,
          selections: [r],
          storageKey: null,
        },
        a = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "subscription_types",
              value: ["META_ONE"],
            },
          ],
          concreteType: "XWASubscriptionEntryPointsResponse",
          kind: "LinkedField",
          name: "xwa_subscription_entrypoints",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWASubscriptionEntryPoints",
              kind: "LinkedField",
              name: "subscription_entrypoints",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "subscription_type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "web_entry_point_eligibility",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey:
            'xwa_subscription_entrypoints(subscription_types:["META_ONE"])',
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiMetaOneEntryPointQuery",
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
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "backing_waba",
                  plural: !1,
                  selections: [o],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            a,
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiMetaOneEntryPointQuery",
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
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "backing_waba",
                  plural: !1,
                  selections: [o, r],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            a,
          ],
        },
        params: {
          id: n("WAWebBizAiMetaOneEntryPointQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiMetaOneEntryPointQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
