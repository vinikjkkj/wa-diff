__d(
  "WASmaxInAppdataDeliverEncTypeIndividualMixin",
  [
    "WAResultOrError",
    "WASmaxInAppdataDeliverEncHideDecryptionPlaceholderMixin",
    "WASmaxInAppdataDeliverEncPayloadMixin",
    "WASmaxInAppdataDeliverEnums",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInAppdataDeliverEnums").ENUM_MSG_PKMSG,
      );
      if (!n.success) return n;
      var r = o(
          "WASmaxInAppdataDeliverEncHideDecryptionPlaceholderMixin",
        ).parseEncHideDecryptionPlaceholderMixin(e),
        a = o("WASmaxInAppdataDeliverEncPayloadMixin").parseEncPayloadMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: n.value,
                encHideDecryptionPlaceholderMixin: r.success ? r.value : null,
              },
              a.value,
            ),
          )
        : a;
    }
    l.parseEncTypeIndividualMixin = e;
  },
  98,
);
