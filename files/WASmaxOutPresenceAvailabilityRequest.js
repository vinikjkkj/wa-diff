__d(
  "WASmaxOutPresenceAvailabilityRequest",
  ["WASmaxAttrs", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.presenceType,
        n = e.presenceName,
        r = o("WASmaxJsx").smax("presence", {
          type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          name: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
        });
      return r;
    }
    l.makeAvailabilityRequest = e;
  },
  98,
);
