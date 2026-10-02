__d(
  "WASmaxInMessageDeliverEncTypeIndividualMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
    "WASmaxInMessageDeliverEncMediaTypeMixin",
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
        a = o("WASmaxInMessageDeliverEncMediaTypeMixin").parseEncMediaTypeMixin(
          e,
        ),
        i = o("WASmaxInMessageDeliverEncPayloadMixin").parseEncPayloadMixin(e);
      if (!i.success) return i;
      var l = o(
        "WASmaxInMessageDeliverEncStateOrSessionTypeMixinGroup",
      ).parseEncStateOrSessionTypeMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            type: n.value,
            encHideDecryptionPlaceholderMixin: r.success ? r.value : null,
            encMediaTypeMixin: a.success ? a.value : null,
          },
          i.value,
          { encStateOrSessionTypeMixinGroup: l.success ? l.value : null },
        ),
      );
    }
    l.parseEncTypeIndividualMixin = e;
  },
  98,
);
