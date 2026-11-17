__d(
  "WAWebPathfinderCustomEvent",
  ["WAWebPathfinderLogger", "WAWebPathfinderScreenName"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "CUSTOM_EVENT",
        originalEventName: e.eventName,
        timestampMs: Date.now(),
        screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
        targetType: e.targetType,
        targetTrackingId: e.targetTrackingId,
        customMetadata: e.customMetadata,
        customEventTypeId: e.customEventType,
      });
    }
    l.recordPathfinderCustomEvent = e;
  },
  98,
);
