__d(
  "WASmaxInReceiptMessageAggregatedStyleReceiptType",
  [
    "WAResultOrError",
    "WASmaxInReceiptInactiveTypeMixin",
    "WASmaxInReceiptPlayedSelfTypeMixin",
    "WASmaxInReceiptPlayedTypeMixin",
    "WASmaxInReceiptReadSelfTypeMixin",
    "WASmaxInReceiptReadTypeMixin",
    "WASmaxInReceiptSenderTypeMixin",
    "WASmaxInReceiptUnknownTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInReceiptSenderTypeMixin").parseSenderTypeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SenderType",
          value: t.value,
        });
      var n = o("WASmaxInReceiptInactiveTypeMixin").parseInactiveTypeMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "InactiveType",
          value: n.value,
        });
      var r = o("WASmaxInReceiptReadTypeMixin").parseReadTypeMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ReadType",
          value: r.value,
        });
      var a = o("WASmaxInReceiptReadSelfTypeMixin").parseReadSelfTypeMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: a.value,
        });
      var i = o("WASmaxInReceiptPlayedTypeMixin").parsePlayedTypeMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedType",
          value: i.value,
        });
      var l = o("WASmaxInReceiptPlayedSelfTypeMixin").parsePlayedSelfTypeMixin(
        e,
      );
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedSelfType",
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
              "SenderType",
              "InactiveType",
              "ReadType",
              "ReadSelfType",
              "PlayedType",
              "PlayedSelfType",
              "UnknownType",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    l.parseMessageAggregatedStyleReceiptType = e;
  },
  98,
);
