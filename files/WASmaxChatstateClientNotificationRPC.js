__d(
  "WASmaxChatstateClientNotificationRPC",
  [
    "WAComms",
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = s(e);
      await o("WAComms").castSmaxStanza(t);
    }
    function s(e) {
      var t = e.chatstateTo,
        n = e.internalTestMixinArgs,
        r = e.stateTypesArgs,
        a = d(
          o("WASmaxMixins").optionalMerge(
            c,
            o("WASmaxJsx").smax("chatstate", { to: o("WAWap").JID(t) }),
            n,
          ),
          r,
        );
      return a;
    }
    function u(e) {
      var t = e.testConfig,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("test", {
            config: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
        );
      return n;
    }
    function c(e, t) {
      var n = u(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function d(e, t) {
      if (t.composing) return p(e, t.composing);
      if (t.isPaused) return f(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function m(e) {
      var t = e.hasComposingMediaAudio,
        n = o("WASmaxJsx").smax(
          "chatstate",
          null,
          o("WASmaxJsx").smax("composing", {
            media: o("WASmaxAttrs").OPTIONAL_LITERAL("audio", t),
          }),
        );
      return n;
    }
    function p(e, t) {
      var n = m(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _() {
      var e = o("WASmaxJsx").smax(
        "chatstate",
        null,
        o("WASmaxJsx").smax("paused", null),
      );
      return e;
    }
    function f(e) {
      var t = _();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendClientNotificationRPC = e), (l.makeClientNotificationRequest = s));
  },
  98,
);
