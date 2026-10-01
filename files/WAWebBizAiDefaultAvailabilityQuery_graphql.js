__d(
  "WAWebBizAiDefaultAvailabilityQuery.graphql",
  ["WAWebBizAiDefaultAvailabilityQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "MetaAIBizAgentWADefaultAvailabilityResponse",
          kind: "LinkedField",
          name: "meta_ai_biz_agent_wa_get_default_availability",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "timezone_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MetaAIBizAgentWADayAvailabilityRange",
              kind: "LinkedField",
              name: "availability",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "day_of_week",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "start_time_in_min",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "end_time_in_min",
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
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiDefaultAvailabilityQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiDefaultAvailabilityQuery",
          selections: e,
        },
        params: {
          id: n("WAWebBizAiDefaultAvailabilityQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiDefaultAvailabilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
