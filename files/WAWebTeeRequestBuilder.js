__d(
  "WAWebTeeRequestBuilder",
  ["WAWebTeeEnums"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return {
        identifier: crypto.randomUUID(),
        locale: navigator.language,
        timezone_offset_hour: Math.round(
          -(new Date().getTimezoneOffset() / 60),
        ),
        timestamp_seconds: Math.floor(Date.now() / 1e3),
        client_surface: o("WAWebTeeEnums").TEEClientSurface.TEE_CLIENT_WA,
        request_format_version: 2,
      };
    }
    function s(t, n, r) {
      var a = { messages: t, add_attribution: n, config_overrides: r };
      return {
        common_metadata: e(),
        request_type: o("WAWebTeeEnums").TeeRequestType.SUMMARY,
        summary_request: a,
      };
    }
    function u(t, n, r, a) {
      var i = {
        text: t,
        tone: n,
        num_suggestions: r != null ? r : 3,
        conversation_context: a,
      };
      return {
        common_metadata: e(),
        request_type: o("WAWebTeeEnums").TeeRequestType.WRITE_WITH_AI,
        wwai_request: i,
      };
    }
    function c(t, n, r, a, i) {
      var l = {
        tee_chat_request: {
          message: t,
          conversation_history: n,
          additional_context:
            r != null ? { conversation_context: [r] } : void 0,
          config_overrides: a,
          ai_persona_metadata: i,
        },
      };
      return {
        common_metadata: e(),
        request_type: o("WAWebTeeEnums").TeeRequestType.SIDE_CHAT,
        chat_participation_request: l,
      };
    }
    ((l.buildSummaryRequest = s),
      (l.buildWriteWithAIRequest = u),
      (l.buildSideChatRequest = c));
  },
  98,
);
