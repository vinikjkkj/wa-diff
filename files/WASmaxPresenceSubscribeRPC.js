__d(
  "WASmaxPresenceSubscribeRPC",
  ["WAComms", "WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = s(e);
      await o("WAComms").castSmaxStanza(t);
    }
    function s(e) {
      var t = e.presenceTo,
        n = e.presenceName,
        r = e.presenceContext,
        a = e.tCTokenMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          c,
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
    function u(e) {
      var t = e.tctokenT,
        n = e.privacyTokenContentsMixinArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          m(
            o("WASmaxJsx").smax("tctoken", {
              t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            }),
            n,
          ),
        );
      return r;
    }
    function c(e, t) {
      var n = u(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function d(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function m(e, t) {
      var n = d(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendSubscribeRPC = e), (l.makeSubscribeRequest = s));
  },
  98,
);
