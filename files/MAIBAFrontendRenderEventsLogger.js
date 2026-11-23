__d(
  "MAIBAFrontendRenderEventsLogger",
  [
    "ALToolTab",
    "FalcoLoggerInternal",
    "URI",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("FalcoLoggerInternal").create(
        "maiba_frontend_render_events",
        r("getFalcoLogPolicy_DO_NOT_USE")("8876"),
      ),
      u = null;
    r("requireWeak")("AdsAccountStore", function (e) {
      u = e;
    });
    function c() {
      var e, t;
      return (e = (t = u) == null ? void 0 : t.getSelectedAccountID()) != null
        ? e
        : null;
    }
    function d() {
      var t = new (e || (e = r("URI")))(window.location.href).getQueryData()
        .act;
      return typeof t == "string" && t !== "" ? t : null;
    }
    function m() {
      var e = o("ALToolTab").getCurrentToolTab();
      return e.tool != null ? String(e.tool) : null;
    }
    function p() {
      var e,
        t = o("ALToolTab").getCurrentToolTab(),
        n = (e = t.tab) != null ? e : t.tool;
      return n != null ? String(n) : null;
    }
    function _(e, t) {
      var n = t.externalConversationId;
      n == null ||
        n === "" ||
        s.log(function () {
          var r, o, a, i;
          return {
            ad_account_id:
              (r = (o = t.adAccountId) != null ? o : c()) != null ? r : d(),
            asset_id: t.assetId,
            asset_type: t.assetType,
            async_tool_request_id: t.asyncToolRequestId,
            bot_request_id: t.botRequestId,
            bot_response_id: t.botResponseId,
            entrypoint: t.entrypoint,
            event_type: e,
            external_conversation_id: n,
            fetch_id: t.fetchId,
            lobby_status: t.lobbyStatus,
            lobby_type: t.lobbyType,
            message_id: t.messageId,
            metadata: t.metadata,
            offline_threading_id: t.offlineThreadingId,
            operation_type: t.operationType,
            render_surface: t.renderSurface,
            stage_key: t.stageKey,
            surface: (a = t.surface) != null ? a : p(),
            tool_name: (i = t.toolName) != null ? i : m(),
          };
        });
    }
    l.logMAIBAFrontendRenderEvent = _;
  },
  98,
);
