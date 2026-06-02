__d(
  "WASmaxPresenceAvailabilityRPC",
  ["WAComms", "WASmaxOutPresenceAvailabilityRequest"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutPresenceAvailabilityRequest").makeAvailabilityRequest(
        e,
      );
      await o("WAComms").castSmaxStanza(t);
    }
    l.sendAvailabilityRPC = e;
  },
  98,
);
