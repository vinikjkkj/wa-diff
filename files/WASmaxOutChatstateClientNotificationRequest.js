__d(
  "WASmaxOutChatstateClientNotificationRequest",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutChatstateInternalTestMixin",
    "WASmaxOutChatstateStateTypes",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatstateTo,
        n = e.internalTestMixinArgs,
        r = e.stateTypesArgs,
        a = o("WASmaxOutChatstateStateTypes").mergeStateTypes(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutChatstateInternalTestMixin").mergeInternalTestMixin,
            o("WASmaxJsx").smax("chatstate", { to: o("WAWap").JID(t) }),
            n,
          ),
          r,
        );
      return a;
    }
    l.makeClientNotificationRequest = e;
  },
  98,
);
