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
    function s(t) {
      var n = t.accountTokenAtCapture,
        r = t.changeSource,
        a = t.isOn,
        i = t.testId;
      e.has(i) &&
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          accountTokenAtCapture: n,
          appReactionMetadata: {
            toggle_change_source: r,
            toggle_state: a ? "on" : "off",
          },
          eventType: "TOGGLE_STATE_CHANGED",
          screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
          targetTrackingId: i,
          timestampMs: Date.now(),
        });
    }
    l.recordSettingToggle = s;
  },
  98,
);
