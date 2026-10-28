__d(
  "WASmaxChatstateClientNotificationRPC",
  [
    "WAComms",
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
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
      var t = e.chatstateTo,
        n = e.internalTestMixinArgs,
        r = e.stateTypesArgs,
        a = m(
          o("WASmaxMixins").optionalMerge(
            d,
            o("WASmaxJsx").smax("chatstate", { to: o("WAWap").JID(t) }),
            n,
          ),
          r,
        );
      return a;
    }
    function c(e) {
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
    function d(e, t) {
      var n = c(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function m(e, t) {
      if (t.composing) return _(e, t.composing);
      if (t.isPaused) return g(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function p(e) {
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
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f() {
      var e = o("WASmaxJsx").smax(
        "chatstate",
        null,
        o("WASmaxJsx").smax("paused", null),
      );
      return e;
    }
    function g(e) {
      var t = f();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendClientNotificationRPC = e),
      (l.makeClientNotificationRequest = u),
      (l.mergeInternalTestMixin = d),
      (l.mergeStateTypes = m),
      (l.mergeComposingMixin = _),
      (l.mergePausedMixin = g));
  },
  98,
);
