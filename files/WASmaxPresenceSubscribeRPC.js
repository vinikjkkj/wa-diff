__d(
  "WASmaxPresenceSubscribeRPC",
  [
    "WAComms",
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = u(e);
          yield o("WAComms").castSmaxStanza(t);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t = e.presenceTo,
        n = e.presenceName,
        r = e.presenceContext,
        a = e.tCTokenMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          d,
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
    function c(e) {
      var t = e.tctokenT,
        n = e.privacyTokenContentsMixinArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          p(
            o("WASmaxJsx").smax("tctoken", {
              t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            }),
            n,
          ),
        );
      return r;
    }
    function d(e, t) {
      var n = c(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function m(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function p(e, t) {
      var n = m(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendSubscribeRPC = e),
      (l.makeSubscribeRequest = u),
      (l.mergeTCTokenMixin = d),
      (l.mergePrivacyTokenContentsMixin = p));
  },
  98,
);
