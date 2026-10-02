__d(
  "WASmaxInMessageDeliverDeliverLinkedDeviceScheduleMessageMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
    "WASmaxInMessageDeliverMetaScheduledMessageMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
      ).parseEncHideDecryptionPlaceholderMixin(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverMetaScheduledMessageMixin",
      ).parseMetaScheduledMessageMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { encEncHideDecryptionPlaceholderMixin: r.value },
              a.value,
            ),
          )
        : a;
    }
    l.parseDeliverLinkedDeviceScheduleMessageMixin = e;
  },
  98,
);
