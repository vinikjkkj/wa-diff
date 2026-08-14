__d(
  "WASmaxInStatusPublishPostBroadcastStatusResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInStatusPublishDeviceListStaleMixin",
    "WASmaxInStatusPublishFanoutCountMixin",
    "WASmaxInStatusPublishStatusAckMixin",
    "WASmaxInStatusPublishStatusAckRcatMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        "participant",
      );
      if (!r.success) return r;
      var a = o("WASmaxInStatusPublishStatusAckMixin").parseStatusAckMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = o(
          "WASmaxInStatusPublishDeviceListStaleMixin",
        ).parseDeviceListStaleMixin(e),
        l = o("WASmaxInStatusPublishFanoutCountMixin").parseFanoutCountMixin(e),
        s = o(
          "WASmaxInStatusPublishStatusAckRcatMixin",
        ).parseStatusAckRcatMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ participant: r.value }, a.value, {
          deviceListStaleMixin: i.success ? i.value : null,
          fanoutCountMixin: l.success ? l.value : null,
          statusAckRcatMixin: s.success ? s.value : null,
        }),
      );
    }
    l.parsePostBroadcastStatusResponseSuccess = e;
  },
  98,
);
