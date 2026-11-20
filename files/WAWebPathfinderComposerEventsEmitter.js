__d(
  "WAWebPathfinderComposerEventsEmitter",
  [
    "WALogger",
    "WAWebPathfinderCustomEvent",
    "WAWebPathfinderTrackingId",
    "WAWebUnifiedSession",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        if (t.capturedAt.unifiedSessionId !== u()) return;
        o("WAWebPathfinderCustomEvent").recordPathfinderCustomEvent({
          eventName: "CONTENT_CHANGED",
          targetType: "WAWebChatComposer",
          targetTrackingId: o("WAWebPathfinderTrackingId")
            .PATHFINDER_TRACKING_ID.CHAT_COMPOSER_INPUT,
          customEventType: t.customEventType,
          capturedAt: t.capturedAt,
        });
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] composer event not recorded (",
                ")",
              ])),
            c(t),
          )
          .sendLogs("pathfinder-composer-event-record-failed");
      }
    }
    function u() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e !== "" ? e : null;
    }
    function c(e) {
      return e instanceof Error ? e.name : typeof e;
    }
    l.emitPathfinderComposerEvent = s;
  },
  98,
);
