__d(
  "WASmaxInMessageDeliverEncTypeIndividualMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
    "WASmaxInMessageDeliverEncMediaTypeOrListMixinGroup",
    "WASmaxInMessageDeliverEncPayloadMixin",
    "WASmaxInMessageDeliverEncStateOrSessionTypeMixinGroup",
    "WASmaxInMessageDeliverEnums",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInMessageDeliverEnums").ENUM_MSG_PKMSG,
      );
      if (!n.success) return n;
      var r = o(
          "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
        ).parseEncHideDecryptionPlaceholderMixin(e),
        a = o("WASmaxInMessageDeliverEncPayloadMixin").parseEncPayloadMixin(e);
      if (!a.success) return a;
      var i = o(
          "WASmaxInMessageDeliverEncStateOrSessionTypeMixinGroup",
        ).parseEncStateOrSessionTypeMixinGroup(e),
        l = o(
          "WASmaxInMessageDeliverEncMediaTypeOrListMixinGroup",
        ).parseEncMediaTypeOrListMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            type: n.value,
            encHideDecryptionPlaceholderMixin: r.success ? r.value : null,
          },
          a.value,
          {
            encStateOrSessionTypeMixinGroup: i.success ? i.value : null,
            encMediaTypeOrListMixinGroup: l.success ? l.value : null,
          },
        ),
      );
    }
    l.parseEncTypeIndividualMixin = e;
  },
  98,
);
