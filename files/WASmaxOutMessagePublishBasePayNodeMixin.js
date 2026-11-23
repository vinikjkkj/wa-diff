__d(
  "WASmaxOutMessagePublishBasePayNodeMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishPayNodeTypeMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.payCountry,
        n = e.payVersion,
        r = e.payIsFirstSend,
        a = o("WASmaxOutMessagePublishPayNodeTypeMixin").mergePayNodeTypeMixin(
          o("WASmaxJsx").smax("pay", {
            country: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
            version: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
            is_first_send: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              r,
            ),
          }),
          e,
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBasePayNodeMixin = s;
  },
  98,
);
