__d(
  "MAIBAHumanHandoverLobbyLogger",
  ["PaidSupportFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = t.externalConversationId,
        a = o != null && o !== "",
        i =
          e === "subscription_received" || e === "renderer_mounted"
            ? !0
            : e === "rendered" && t.renderSurface === "inline";
      if (!(!a && !i)) {
        var l = (function (e) {
            return ((typeof e == "object" && e !== null) ||
              typeof e == "function") &&
              e.hasConversationId === !1
              ? "none"
              : ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.hasLobbyConversationId === !1
                ? "displayed"
                : "lobby";
          })({
            hasConversationId: a,
            hasLobbyConversationId: t.hasLobbyConversationId,
          }),
          s = {
            conversation_id_source:
              (n = t.conversationIdSource) != null ? n : l,
            renderer: t.renderer,
            stage: e,
          };
        o != null && o !== ""
          ? (s.external_conversation_id = o)
          : (s.has_lobby_conversation_id = "false");
        var u = t.lobbyState;
        (u != null &&
          (s.lobby_state =
            u === "WAITING" || u === "JOINED" || u === "CLOSED"
              ? u
              : "unknown"),
          t.storedLobbyState != null &&
            (s.stored_lobby_state =
              t.storedLobbyState === "WAITING" ||
              t.storedLobbyState === "JOINED" ||
              t.storedLobbyState === "CLOSED"
                ? t.storedLobbyState
                : "unknown"),
          t.asyncSupportCardRendered != null &&
            (s.async_support_card_rendered = String(
              t.asyncSupportCardRendered,
            )),
          t.renderInstanceId != null &&
            (s.render_instance_id = t.renderInstanceId),
          t.renderSurface != null && (s.render_surface = t.renderSurface),
          t.reason != null && (s.reason = t.reason),
          t.hasLobbyConversationId != null &&
            (s.has_lobby_conversation_id = String(
              t.hasLobbyConversationId && a,
            )),
          r("PaidSupportFalcoEvent").log(function () {
            return {
              event: "help_tray_ip_ads_ai_human_handover_lobby",
              event_data: s,
            };
          }));
      }
    }
    l.logMAIBAHumanHandoverLobbyEvent = e;
  },
  98,
);
