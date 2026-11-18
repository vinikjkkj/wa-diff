__d(
  "WAWebPathfinderSettingToggle",
  ["WAWebPathfinderLogger", "WAWebPathfinderScreenName"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      "anti-brigading-privacy-settings-item",
      "disable-link-preview-privacy-settings-item",
      "limit-sharing-drawer-switch",
      "live-call-screening-privacy-settings-item",
      "protect-ip-in-calls-privacy-settings-item",
      "read-receipts-privacy-settings-item",
      "silence-unknown-callers-privacy-settings-item",
    ]);
    function s(t, n, r) {
      e.has(t) &&
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          appReactionMetadata: {
            toggle_change_source: r,
            toggle_state: n ? "on" : "off",
          },
          eventType: "TOGGLE_STATE_CHANGED",
          screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
          targetTrackingId: t,
          timestampMs: Date.now(),
        });
    }
    l.recordSettingToggle = s;
  },
  98,
);
