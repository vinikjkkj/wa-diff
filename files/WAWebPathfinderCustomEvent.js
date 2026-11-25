__d(
  "WAWebPathfinderCustomEvent",
  ["WAWebPathfinderLogger", "WAWebPathfinderScreenName"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n, r, a;
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "CUSTOM_EVENT",
        originalEventName: e.eventName,
        timestampMs:
          (t = (n = e.capturedAt) == null ? void 0 : n.timestampMs) != null
            ? t
            : Date.now(),
        screenName:
          e.capturedAt != null
            ? e.capturedAt.screenName
            : o("WAWebPathfinderScreenName").getCurrentScreenName(),
        unifiedSessionId:
          (r = e.capturedAt) == null ? void 0 : r.unifiedSessionId,
        heldBackSurface:
          (a = e.capturedAt) == null ? void 0 : a.heldBackSurface,
        accountTokenAtCapture:
          e.capturedAt != null
            ? e.capturedAt.accountToken
            : e.accountTokenAtCapture,
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
