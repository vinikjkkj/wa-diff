__d(
  "WASmaxOutMessagePublishBaseIndividualPublishSendPayNodeMixin",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishBasePayNodeMixin",
    "WASmaxOutMessagePublishLegacyAmountMixin",
    "WASmaxOutMessagePublishMoneyMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutMessagePublishMoneyMixin").mergeMoneyMixin(
        o("WASmaxJsx").smax("amount", null),
        e,
      );
      return t;
    }
    function s(t) {
      var n = t.amountArgs,
        r = t.payRequestId,
        a = t.legacyAmountMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishLegacyAmountMixin").mergeLegacyAmountMixin,
          o("WASmaxOutMessagePublishBasePayNodeMixin").mergeBasePayNodeMixin(
            o("WASmaxJsx").smax(
              "pay",
              {
                "request-id": o("WASmaxAttrs").OPTIONAL(
                  o("WAWap").CUSTOM_STRING,
                  r,
                ),
              },
              o("WASmaxChildren").OPTIONAL_CHILD(e, n),
            ),
            t,
          ),
          a,
        );
      return i;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeBaseIndividualPublishSendPayNodeAmount = e),
      (l.mergeBaseIndividualPublishSendPayNodeMixin = u));
  },
  98,
);
