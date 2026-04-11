__d(
  "WASmaxOutSpamUserInitiatedExtensionMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamExtensionScreenMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutSpamExtensionScreenMixin").mergeExtensionScreenMixin(
        o("WASmaxJsx").smax("extension_screen", null),
        e,
      );
      return t;
    }
    function s(t) {
      var n = t.extensionScreenArgs,
        r = o("WASmaxJsx").smax(
          "user_initiated_extension",
          null,
          o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 100),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeUserInitiatedExtensionExtensionScreen = e),
      (l.mergeUserInitiatedExtensionMixin = u));
  },
  98,
);
