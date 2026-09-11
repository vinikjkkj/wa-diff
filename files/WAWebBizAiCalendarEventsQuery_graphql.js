__d(
  "WAWebBizAiCalendarEventsQuery.graphql",
  ["WAWebBizAiCalendarEventsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "MetaAIBizAgentWACalendarEventListResponse",
          kind: "LinkedField",
          name: "meta_ai_biz_agent_wa_get_calendar_events",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBMetaAIBusinessAgentWhatsAppCalendarEvent",
              kind: "LinkedField",
              name: "calendar_events",
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
                  name: "summary",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "start_date_time",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "end_date_time",
                  storageKey: null,
                },
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
                  kind: "ScalarField",
                  name: "location",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "location_type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "video_conference_link",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "appointment_details_form_json",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMaibaAiBizAgentWAConsumerUIDOutput",
                  kind: "LinkedField",
                  name: "consumer_uid",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "lid",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "pn",
                      storageKey: null,
                    },
                  ],
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
          metadata: { throwOnFieldError: !0 },
          name: "WAWebBizAiCalendarEventsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiCalendarEventsQuery",
          selections: e,
        },
        params: {
          id: n("WAWebBizAiCalendarEventsQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiCalendarEventsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
