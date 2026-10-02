__d(
  "WASmaxInReceiptSingleStyleReceiptType",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverBizTypeMixin",
    "WASmaxInReceiptDeliverLIDFeatureIncapableTypeMixin",
    "WASmaxInReceiptEngagedTypeMixin",
    "WASmaxInReceiptInactiveTypeMixin",
    "WASmaxInReceiptPlayedSelfTypeMixin",
    "WASmaxInReceiptPlayedTypeMixin",
    "WASmaxInReceiptReadSelfTypeMixin",
    "WASmaxInReceiptReadTypeMixin",
    "WASmaxInReceiptRetryMixin",
    "WASmaxInReceiptServerErrorTypeMixin",
    "WASmaxInReceiptUnknownTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInReceiptServerErrorTypeMixin",
      ).parseServerErrorTypeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ServerErrorType",
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
      var s = o("WASmaxInReceiptRetryMixin").parseRetryMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "Retry",
          value: s.value,
        });
      var u = o(
        "WASmaxInReceiptDeliverLIDFeatureIncapableTypeMixin",
      ).parseDeliverLIDFeatureIncapableTypeMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverLIDFeatureIncapableType",
          value: u.value,
        });
      var c = o("WASmaxInReceiptDeliverBizTypeMixin").parseDeliverBizTypeMixin(
        e,
      );
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverBizType",
          value: c.value,
        });
      var d = o("WASmaxInReceiptEngagedTypeMixin").parseEngagedTypeMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "EngagedType",
          value: d.value,
        });
      var m = o("WASmaxInReceiptUnknownTypeMixin").parseUnknownTypeMixin(e);
      return m.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownType",
            value: m.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ServerErrorType",
              "InactiveType",
              "ReadType",
              "ReadSelfType",
              "PlayedType",
              "PlayedSelfType",
              "Retry",
              "LIDFeatureIncapableType",
              "BizType",
              "EngagedType",
              "UnknownType",
            ],
            [t, n, r, a, i, l, s, u, c, d, m],
          );
    }
    l.parseSingleStyleReceiptType = e;
  },
  98,
);
