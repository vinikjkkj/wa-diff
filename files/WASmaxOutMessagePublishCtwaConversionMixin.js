__d(
  "WASmaxOutMessagePublishCtwaConversionMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishClickToWhatsAppTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutMessagePublishClickToWhatsAppTypeMixin",
      ).mergeClickToWhatsAppTypeMixin(o("WASmaxJsx").smax("ctwa", null), e);
      return t;
    }
    function s(t) {
      var n = t.ctwaArgs,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxChildren").OPTIONAL_CHILD(e, n),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeCtwaConversionCtwa = e), (l.mergeCtwaConversionMixin = u));
  },
  98,
);
