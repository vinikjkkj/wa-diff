__d(
  "WASmaxInChatstateServerNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInChatstateInternalTestMixin",
    "WASmaxInChatstateStateSource",
    "WASmaxInChatstateStateTypes",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = o("WASmaxInChatstateInternalTestMixin").parseInternalTestMixin(e),
        r = o("WASmaxInChatstateStateSource").parseStateSource(e);
      if (!r.success) return r;
      var a = o("WASmaxInChatstateStateTypes").parseStateTypes(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            internalTestMixin: n.success ? n.value : null,
            stateSource: r.value,
            stateTypes: a.value,
          })
        : a;
    }
    l.parseServerNotificationRequest = e;
  },
  98,
);
