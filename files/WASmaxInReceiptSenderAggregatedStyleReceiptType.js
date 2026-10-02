__d(
  "WASmaxInReceiptSenderAggregatedStyleReceiptType",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeprecatedDeliveryTypeMixin",
    "WASmaxInReceiptInactiveTypeMixin",
    "WASmaxInReceiptPlayedSelfTypeMixin",
    "WASmaxInReceiptPlayedTypeMixin",
    "WASmaxInReceiptReadSelfTypeMixin",
    "WASmaxInReceiptReadTypeMixin",
    "WASmaxInReceiptUnknownTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInReceiptInactiveTypeMixin").parseInactiveTypeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "InactiveType",
          value: t.value,
        });
      var n = o("WASmaxInReceiptReadTypeMixin").parseReadTypeMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ReadType",
          value: n.value,
        });
      var r = o("WASmaxInReceiptReadSelfTypeMixin").parseReadSelfTypeMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: r.value,
        });
      var a = o("WASmaxInReceiptPlayedTypeMixin").parsePlayedTypeMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedType",
          value: a.value,
        });
      var i = o("WASmaxInReceiptPlayedSelfTypeMixin").parsePlayedSelfTypeMixin(
        e,
      );
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedSelfType",
          value: i.value,
        });
      var l = o(
        "WASmaxInReceiptDeprecatedDeliveryTypeMixin",
      ).parseDeprecatedDeliveryTypeMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "DeprecatedDeliveryType",
          value: l.value,
        });
      var s = o("WASmaxInReceiptUnknownTypeMixin").parseUnknownTypeMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownType",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "InactiveType",
              "ReadType",
              "ReadSelfType",
              "PlayedType",
              "PlayedSelfType",
              "DeprecatedDeliveryType",
              "UnknownType",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    l.parseSenderAggregatedStyleReceiptType = e;
  },
  98,
);
