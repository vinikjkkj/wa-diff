__d(
  "WASmaxChatstateClientNotificationRPC",
  ["WAComms", "WASmaxOutChatstateClientNotificationRequest"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o(
        "WASmaxOutChatstateClientNotificationRequest",
      ).makeClientNotificationRequest(e);
      await o("WAComms").castSmaxStanza(t);
    }
    l.sendClientNotificationRPC = e;
  },
  98,
);
