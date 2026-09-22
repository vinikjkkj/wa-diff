__d(
  "WAWebBizAiUpcomingAppointmentsSubtitleQuery.graphql",
  ["WAWebBizAiUpcomingAppointmentsSubtitleQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
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
              concreteType: "XFBMetaAIBizAgentWAAppointmentsSummary",
              kind: "LinkedField",
              name: "appointments_summary",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "appointment_count",
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
          name: "WAWebBizAiUpcomingAppointmentsSubtitleQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiUpcomingAppointmentsSubtitleQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizAiUpcomingAppointmentsSubtitleQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiUpcomingAppointmentsSubtitleQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
