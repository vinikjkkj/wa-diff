__d(
  "WASmaxPresenceAvailabilityRPC",
  ["WAComms", "WASmaxAttrs", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = s(e);
      await o("WAComms").castSmaxStanza(t);
    }
    function s(e) {
      var t = e.presenceType,
        n = e.presenceName,
        r = o("WASmaxJsx").smax("presence", {
          type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          name: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
        });
      return r;
    }
    ((l.sendAvailabilityRPC = e), (l.makeAvailabilityRequest = s));
  },
  98,
);
