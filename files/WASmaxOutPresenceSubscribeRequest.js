__d(
  "WASmaxOutPresenceSubscribeRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPresenceTCTokenMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.presenceTo,
        n = e.presenceName,
        r = e.presenceContext,
        a = e.tCTokenMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutPresenceTCTokenMixin").mergeTCTokenMixin,
          o("WASmaxJsx").smax("presence", {
            type: "subscribe",
            to: o("WAWap").JID(t),
            name: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
            context: o("WASmaxAttrs").OPTIONAL(o("WAWap").GROUP_JID, r),
          }),
          a,
        );
      return i;
    }
    l.makeSubscribeRequest = e;
  },
  98,
);
