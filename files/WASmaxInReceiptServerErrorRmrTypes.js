__d(
  "WASmaxInReceiptServerErrorRmrTypes",
  [
    "WAResultOrError",
    "WASmaxInReceiptRmrBroadcastDeprecatedMixin",
    "WASmaxInReceiptRmrBroadcastMixin",
    "WASmaxInReceiptRmrGroupDeprecatedMixin",
    "WASmaxInReceiptRmrGroupMixin",
    "WASmaxInReceiptRmrIndividualDeprecatedMixin",
    "WASmaxInReceiptRmrIndividualMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInReceiptRmrBroadcastMixin").parseRmrBroadcastMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RmrBroadcast",
          value: t.value,
        });
      var n = o("WASmaxInReceiptRmrGroupMixin").parseRmrGroupMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "RmrGroup",
          value: n.value,
        });
      var r = o(
        "WASmaxInReceiptRmrIndividualDeprecatedMixin",
      ).parseRmrIndividualDeprecatedMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "RmrIndividualDeprecated",
          value: r.value,
        });
      var a = o("WASmaxInReceiptRmrIndividualMixin").parseRmrIndividualMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "RmrIndividual",
          value: a.value,
        });
      var i = o(
        "WASmaxInReceiptRmrGroupDeprecatedMixin",
      ).parseRmrGroupDeprecatedMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "RmrGroupDeprecated",
          value: i.value,
        });
      var l = o(
        "WASmaxInReceiptRmrBroadcastDeprecatedMixin",
      ).parseRmrBroadcastDeprecatedMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "RmrBroadcastDeprecated",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "RmrBroadcast",
              "RmrGroup",
              "RmrIndividualDeprecated",
              "RmrIndividual",
              "RmrGroupDeprecated",
              "RmrBroadcastDeprecated",
            ],
            [t, n, r, a, i, l],
          );
    }
    l.parseServerErrorRmrTypes = e;
  },
  98,
);
