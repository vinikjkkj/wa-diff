__d(
  "MAIBAPlatformNewConversationSeed",
  [
    "MAIBAGeoChatThreadQuery.graphql",
    "MAIBAPlatformMessageListConnectionKey",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set();
    function s(t) {
      e.add(t);
    }
    function u(t) {
      return t != null && e.has(t);
    }
    function c(e, t, n) {
      s(t);
      var a = o(
        "MAIBAPlatformMessageListConnectionKey",
      ).maibaGeoPlatformThreadRecordID(t);
      if (e.getStore().getSource().get(a) == null) {
        var i = o("relay-runtime").createOperationDescriptor(
          o("relay-runtime").getRequest(r("MAIBAGeoChatThreadQuery.graphql")),
          { conversationId: t, surface: n },
        );
        e.commitPayload(i, {
          maiba_conversation_thread: {
            __typename: "MAIBAConversationThread",
            id: a,
            is_conversation_eligible_for_csat: !1,
            is_unread: !1,
            entry_point: null,
            thread_status: "ACTIVE",
            last_send_timestamp_ms: Date.now(),
            async_task_execution: null,
            proactive_task_origin: null,
            last_message: { edges: [] },
            messages: {
              edges: [],
              page_info: {
                end_cursor: null,
                has_next_page: !1,
                has_previous_page: !1,
                start_cursor: null,
              },
            },
          },
        });
      }
    }
    ((l.markMAIBAConversationStartedInSession = s),
      (l.wasMAIBAConversationStartedInSession = u),
      (l.seedMAIBAPlatformConversationThread = c));
  },
  98,
);
